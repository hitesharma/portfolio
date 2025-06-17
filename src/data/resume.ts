
export const resumeData = {
  name: "Hitesh Sharma",
  title: "Software Engineer",
  summary: `I’m a developer who enjoys building systems that are efficient, reliable, and easy to reason about. I work mostly with Go, Node, and Python — depending on what the problem calls for — and care deeply about simplicity, clarity, and performance.

Whether it’s designing real-time systems, automating infrastructure, or building tools that scale, I like breaking down complex problems and solving them with thoughtful, maintainable code.

I believe good engineering is not just about what you build, but how well it fits the bigger picture — the product, the team, and the users.`,
  contact: {
    email: "hitesharma01@gmail.com",
    linkedin: "https://linkedin.com/in/hitesharma1",
    github: "https://github.com/hitesharma",
  },
  experience: [
    {
      company: "Coredge",
      title: "SDE II",
      period: "December 2023 – Present",
      description: [
        "Developed a Baremetal-as-a-Service (BMaaS) platform atop Canonical MAAS with features like deployment, reservation, flavor management, multi-provider support with flavor sync, and auto-mounting of block/file storage.",
        "Designed and developed a strongly-typed, extensible Service Catalog acting as a central repository for all services, with dynamic flavor management, region-based pricing, and serving as a single source of truth for all services.",
        "Designed and developed a multi-tenant, flexible and granular Quota Engine enabling precise resource allocation and consumption tracking across diverse cloud services.",
        "Designed and developed a monitoring system that tracks resource allocation, upgrades, and releases, delivering accurate, real-time billing insights and usage metrics.",
        "Developed a plugin for interfacing company's cloud platform with 3rd party services for streamlined organisation and user on-boarding along with interfacing metering data to billing sub-systems; supporting entire order journey.",
        "Built a state-machine-style Managed Database Cloud Offering (DBaaS) that provides scalability and reliability in creating and managing databases such as Postgres, MySQL and MongoDB.",
        "Led direct collaboration with stakeholders at Airtel, DRDO, G42 and many more to architect and customize solutions aligned with their needs. Mentored and guided a team of 4, creating and distributing tasks to effectively meet these customer-specific requirements.",
      ],
    },
    {
      company: "Majid Al Futtaim",
      title: "SDE II (SRE)",
      period: "April 2023 – November 2023",
      description: [
        "Crafted Bash scripts for the automated migration of all Kubernetes cluster deployments and objects to a backup cluster, enabling swift recovery in the event of a geographical region outage. This reduced cluster recovery process to a mere 15-20 minutes.",
        "Supported various SRE initiatives for kubernetes, helm, cicd, docker and buildpack.",
      ],
    },
    {
      company: "Majid Al Futtaim",
      title: "SDE (SRE)",
      period: "July 2022 – March 2023",
      description: [
        "Built Microsoft Teams bot that facilitates Kubernetes task management across multiple regions, including tasks like retrieving pod status, restarting, scaling, and deploying rollbacks. This reduced sre reliance by 60 percent.",
        "Built access management system to enforce internal policies, categorizing access according to business verticals and tiers. This system has significantly improved the company's ability to finely control access to resources.",
      ],
    },
    {
      company: "Majid Al Futtaim",
      title: "SDE",
      period: "June 2021 – June 2022",
      description: [
        "Built microservices and wrappers for the core api-testing service, optimizing progress tracking and automating the workload. Employed Kubernetes Event-Driven Autoscaler for scalable concurrent test suite execution by dynamically provisioning containers for each request.",
        "Built seeder script to periodically push TestRail results to InfluxDB through a cron job. Designed and implemented Grafana dashboards for effective time series data visualization.",
        "Made internal services accessible through a single UI portal and built micro-services like approval, scheduler and notification service to support it.",
      ],
    },
    {
      company: "Majid Al Futtaim",
      title: "SDE (Intern)",
      period: "October 2020 – May 2021",
      description: [
        "Created a web service using Google's Lighthouse to assist developers in evaluating website performance. Implemented a GraphQL-REST hybrid server to efficiently manage job results each over 1 MB, minimizing over-fetching and reducing network payload.",
        "Wrote a web scraper using Puppeteer to efficiently extract links and images across the website, with a capability to detect and report broken elements.",
      ],
    },
  ],
  skills: [
    {
      icon: "💻",
      category: "What I Code In",
      tools: [
        { name: "Golang", slug: "go" },
        { name: "Python", slug: "python" },
        { name: "Bash", slug: "gnubash" },
        { name: "C++", slug: "cplusplus" },
        { name: "Node.js", slug: "nodedotjs" },
        { name: "JavaScript", slug: "javascript" },
        { name: "React", slug: "react" },
      ],
    },
    {
      icon: "🗃️",
      category: "Data & Storage",
      tools: [
        { name: "MongoDB", slug: "mongodb" },
        { name: "InfluxDB", slug: "influxdb" },
        { name: "ClickHouse", slug: "clickhouse" },
        { name: "MySQL", slug: "mysql" },
        { name: "Redis", slug: "redis" },
        { name: "Dgraph", slug: "dgraph" },
        { name: "Neo4j", slug: "neo4j" },
      ],
    },
    {
      icon: "🌐",
      category: "Protocols & Interfaces",
      tools: [
        { name: "REST" },
        { name: "GraphQL", slug: "graphql" },
        { name: "gRPC", slug: "grpc" },
        { name: "WebSockets", slug: "socketdotio" },
      ],
    },
    {
      icon: "🛠️",
      category: "Infrastructure & Tooling",
      tools: [
        { name: "Kubernetes", slug: "kubernetes" },
        { name: "Docker", slug: "docker" },
        { name: "Helm", slug: "helm" },
        { name: "Grafana", slug: "grafana" },
        { name: "Git", slug: "git" },
        { name: "Kafka", slug: "apachekafka" },
      ],
    },
  ],
};
