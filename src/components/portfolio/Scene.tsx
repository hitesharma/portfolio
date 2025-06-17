
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, useMatcapTexture, useCursor } from '@react-three/drei';
import { useRef, useMemo, useState } from 'react';
import * as THREE from 'three';
import { createNoise4D } from 'simplex-noise';

type Noise4D = ReturnType<typeof createNoise4D>;

class FBM {
  private noise4D: Noise4D;
  private octaves: number;
  private lacunarity: number;
  private persistance: number;

  constructor(options: { octaves?: number; lacunarity?: number; persistance?: number }) {
    this.noise4D = createNoise4D();
    this.octaves = options.octaves ?? 3;
    this.lacunarity = options.lacunarity ?? 2.0;
    this.persistance = options.persistance ?? 0.5;
  }

  get(x: number, y: number, z: number, w: number) {
    let total = 0;
    let frequency = 1;
    let amplitude = 1;
    let maxValue = 0;

    for (let i = 0; i < this.octaves; i++) {
      total += this.noise4D(x * frequency, y * frequency, z * frequency, w * frequency) * amplitude;
      maxValue += amplitude;
      amplitude *= this.persistance;
      frequency *= this.lacunarity;
    }

    return total / maxValue;
  }
}

const MorphingObject = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const originalPositions = useRef<Float32Array>();

  const noise = useMemo(
    () =>
      new FBM({
        lacunarity: 2.0,
        persistance: 0.5,
        octaves: 3,
      }),
    [],
  );

  useFrame((state) => {
    if (!mesh.current) return;

    // Hover effect
    mesh.current.scale.lerp(new THREE.Vector3(1, 1, 1).multiplyScalar(hovered ? 1.05 : 1), 0.1);

    const { clock } = state;
    const time = clock.getElapsedTime();

    mesh.current.rotation.y += 0.001;

    const geometry = mesh.current.geometry;
    const positions = geometry.attributes.position.array as Float32Array;

    if (!originalPositions.current) {
      originalPositions.current = new Float32Array(positions);
    }

    const original = originalPositions.current;

    for (let i = 0; i < positions.length; i += 3) {
      const p = new THREE.Vector3(original[i], original[i + 1], original[i + 2]);

      const displacement = noise.get(p.x * 0.5, p.y * 0.5, p.z * 0.5, time * 0.2) * 0.5;

      p.normalize().multiplyScalar(2.5 + displacement);

      positions[i] = p.x;
      positions[i + 1] = p.y;
      positions[i + 2] = p.z;
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <Icosahedron
      args={[2.5, 5]}
      ref={mesh}
      onPointerOver={(event) => (event.stopPropagation(), setHovered(true))}
      onPointerOut={() => setHovered(false)}
    >
      <meshMatcapMaterial map={matcapTexture} />
    </Icosahedron>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ fov: 45, position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 2]} />
      <MorphingObject />
    </Canvas>
  );
};

export default Scene;
