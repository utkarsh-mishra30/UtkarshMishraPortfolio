/* ============================================================================
   PORTFOLIO — single JavaScript file
   ----------------------------------------------------------------------------
   STRUCTURE
     1. DATA .............. the ONLY place you edit content (text, numbers, links)
     2. HELPERS ........... formatting + dynamic years-of-experience
     3. RENDER ............ builds the DOM sections from DATA
     4. CHARTS ............ Chart.js configs (lazy-rendered on scroll)
    5. INTERACTIONS ...... nav, scroll-reveal, count-up, falling data canvas
     6. INIT .............. wires everything together on load
   See README.md for a full "edit map" of which DATA key controls which section.
============================================================================ */


/* ============================================================================
   1. DATA  —  EDIT EVERYTHING HERE
============================================================================ */
const DATA = {
  /* --- Identity / hero ------------------------------------------------- */
  name: "Utkarsh Mishra",
  role: "Data Analyst",
  headline: "Analyst @Netlink || Ex-Associate Consultant @PwC\nIndia || Tech & Strategy Generalist",
  tagline:
    "I help businesses transform complex challenges into measurable outcomes through analytics, structured problem-solving, KPI frameworks, and executive-ready dashboards. By combining analytics, consulting, and technology, I enable smarter, data-driven decisions.",
  location: "Indore, India",
  resumeFile: "Utkarsh_Mishra_Resume.pdf", // file lives at the project root
  // Drives the dynamic years-of-experience number. This counts only active
  // professional work periods, so the Feb-Nov 2025 break is not overstated.
  experiencePeriods: [
    { start: "2023-01-01", end: "2025-02-28", label: "PwC" },
    { start: "2025-12-01", end: null, label: "Netlink / Lumenore" },
  ],

  /* --- Contact / links (update the URLs to your real profiles) --------- */
  contact: {
    email: "utkarsh30um@gmail.com",
    phone: "+91 9202855188",
    linkedin: "https://www.linkedin.com/in/utkarsh-mishra",
    leetcode: "https://leetcode.com/utkarsh30um/",
  },

  /* --- Hero KPI tiles (top of the page) -------------------------------
     Set dynamicYears:true on ONE tile to auto-compute from experiencePeriods. */
  heroKpis: [
    { label: "Active Professional Experience", dynamicYears: true, suffix: "+" },
    { label: "Number of Organisations Worked With", value: 2, suffix: "" },
    { label: "Client Orgs Worked With (USA & Aus)", value: 4, suffix: "" },
  ],

  /* --- Profile / about ------------------------------------------------- */
  profile: {
    summary:
      "I'm a business-focused data professional who enjoys solving real problems, not just building dashboards. My work sits at the intersection of analytics, consulting, and technology: I partner with stakeholders to break down complex business challenges, structure ambiguous requirements, and translate data into insights that improve performance, efficiency, and growth. I bring strong foundations in SQL, BI tools, analytics, and process optimization, along with consulting skills in critical thinking, client communication, documentation, and cross-functional alignment.",
    positioning:
      "Consulting mindset, analyst toolkit: I pair structured problem-solving with executive-ready data storytelling.",
    industries: [
      { label: "Consumer Goods / Supply Chain", value: 30 },
      { label: "Finance / Collections", value: 15 },
      { label: "Mining & Resources", value: 10 },
      { label: "BPO Operations", value: 25 },
      { label: "Entertainment / CXM", value: 20 },
    ],
  },

  /* --- Consulting & product fit (recruiter-targeted competency cards) -- */
  fit: [
    {
      title: "Structured Problem Solving",
      proof:
        "Structured ambiguous business problems into KPI frameworks for multinational clients.",
    },
    {
      title: "Stakeholder & Client Management",
      proof:
        "Primary BA / point-of-contact for global B2B clients, from requirement gathering to delivery.",
    },
    {
      title: "Executive Data Storytelling",
      proof:
        "Translated raw data into strategic decisions and executive-ready dashboards.",
    },
    {
      title: "KPI & Metrics Frameworks",
      proof:
        "Define the right metrics, connect them to business goals, and turn performance into a measurable operating rhythm.",
    },
    {
      title: "Metrics & Experimentation Mindset",
      proof:
        "Use data validation, hypothesis-driven analysis, and performance tracking to improve decisions, processes, and user outcomes.",
    },
    {
      title: "End-to-End Delivery",
      proof:
        "Move work from ambiguous problem statements to structured analysis, stakeholder alignment, dashboard delivery, and adoption.",
    },
  ],

  /* --- Skills ---------------------------------------------------------- */
  skills: {
    // Radar: high-level skill categories (0-100)
    radar: {
      labels: [
        "Gen AI Tools",
        "Data Analytics",
        "Data Viz & BI",
        "Data Engineering / ETL",
        "Database Mgmt",
        "Soft Skills",
      ],
      values: [88, 90, 92, 75, 80, 90],
    },
    // Proficiency bars (0-100) — animated CSS bars
    bars: [
      { name: "Power BI", level: 88 },
      { name: "Tableau", level: 80 },
      { name: "SQL", level: 85 },
      { name: "Advanced Excel", level: 88 },
      { name: "Python (Pandas/NumPy)", level: 80 },
      { name: "Alteryx", level: 78 },
      { name: "Looker", level: 75 },
      { name: "Databricks", level: 72 },
    ],
    // Logo wall: core analytics tools + Gen AI/LLM toolkit.
    tools: [
      { name: "Tableau", logo: "assets/logos/tableau.svg", category: "BI & Visualization", fallback: "TB" },
      { name: "Power BI", logo: "assets/logos/power-bi.svg", category: "BI & Visualization", fallback: "BI" },
      { name: "SQL", logo: "assets/logos/sql.svg", category: "Data & Querying", fallback: "SQL" },
      { name: "Python", logo: "assets/logos/python.svg", category: "Programming & Analysis", fallback: "PY" },
      { name: "Alteryx", logo: "assets/logos/alteryx.svg", category: "Data Engineering", fallback: "AX" },
      { name: "Databricks", logo: "assets/logos/databricks.svg", category: "Data Engineering", fallback: "DB" },
      { name: "Looker", logo: "assets/logos/looker.svg", category: "BI & Visualization", fallback: "LK" },
      { name: "Lumenore", logo: "assets/logos/lumenore.png", category: "BI & Visualization", fallback: "LM", variant: "wide" },
      { name: "Excel", logo: "assets/logos/excel.svg", category: "Analysis & Reporting", fallback: "XL" },
      { name: "DBeaver", logo: "assets/logos/dbeaver.svg", category: "Database Tools", fallback: "DB" },
      { name: "SQL Server", logo: "assets/logos/sql-server.svg", category: "Database Tools", fallback: "SQL" },
      { name: "MySQL", logo: "assets/logos/mysql.svg", category: "Database Tools", fallback: "MY" },
      { name: "ChatGPT", logo: "assets/logos/chatgpt.svg", category: "AI Research", fallback: "GPT" },
      { name: "Claude", logo: "assets/logos/anthropic.svg", category: "AI Research", fallback: "CL" },
      { name: "Gemini", logo: "assets/logos/gemini.svg", category: "AI Research", fallback: "GM" },
      { name: "Perplexity", logo: "assets/logos/perplexity.svg", category: "AI Research", fallback: "PX" },
      { name: "Julius AI", logo: "assets/logos/julious-ai.png", category: "AI Analytics & Development", fallback: "JA" },
      { name: "Co-Pilot", logo: "assets/logos/github-copilot.svg", category: "AI Analytics & Development", fallback: "CP" },
      { name: "Cursor AI", logo: "assets/logos/cursor.svg", category: "AI Analytics & Development", fallback: "CR" },
      { name: "Antigravity", logo: "assets/logos/antigravity.png", category: "AI Analytics & Development", fallback: "AG" },
      { name: "Lovable", logo: "assets/logos/lovable.png", category: "AI Analytics & Development", fallback: "LV" },
      { name: "n8n", logo: "assets/logos/n8n.svg", category: "AI Automation", fallback: "N8" },
      { name: "Make", logo: "assets/logos/make.svg", category: "AI Automation", fallback: "MK" },
      { name: "Nanobanana", logo: "assets/logos/nanobanana.png", category: "Diffusion & Creative", fallback: "NB" },
      { name: "DALL.E", logo: "assets/logos/dalle.svg", category: "Diffusion & Creative", fallback: "DE" },
      { name: "Higgsfield", logo: "assets/logos/higgsfield.png", category: "Diffusion & Creative", fallback: "HF" },
      { name: "Seedance", logo: "assets/logos/seedance.png", category: "Diffusion & Creative", fallback: "SD" },
      { name: "Gamma AI", logo: "assets/logos/gamma.png", category: "Diffusion & Creative", fallback: "GA" },
    ],
    additionalSkills: [
      "GenAI tools",
      "Prompt Engineering",
      "Client Communication",
      "Leadership",
      "Documentation",
      "Critical Thinking",
    ],
  },

  /* --- Professional experience (Situation -> Action -> Impact) ---------
     Salaried roles only. Each panel renders a mini chart (see chartSpec). */
  experience: [
    {
      company: "Netlink Software Pvt. Ltd.",
      brand: "Lumenore",
      role: "Analyst (Full Time)",
      period: "Dec 2025 – Present",
      location: "Bhopal, India",
      sub: "Lumenore (AI driven analytics tool)",
      bullets: [
        {
          keyword: "Global B2B analytics",
          text: "Collaborate with global B2B clients across BPO and entertainment sectors in a hybrid BA-DA role, translating business requirements into structured analytics solutions.",
        },
        {
          keyword: "Operational efficiency dashboard",
          text: "Designed and delivered an end-to-end operational efficiency dashboard for a BPO client, translating requirements into a KPI framework for tracking 100+ agents, consolidating 7 spreadsheets, and eliminating 2 hours of manual reporting per day.",
        },
        {
          keyword: "Dashboard sustainment",
          text: "Managed and sustained CXM, workforce utilization, and agent performance dashboards for an entertainment sector client, handling data validation, data loading, routine health checks, and client change requests to ensure uninterrupted reporting.",
        },
        {
          keyword: "Business analysis ownership",
          text: "Act as primary BA for projects, managing requirement gathering, documentation, and stakeholder communication.",
        },
      ],
      impacts: [
        { display: "BA+DA", label: "Role coverage" },
        { value: 2, suffix: "", label: "Industries served: Entertainment & BPO" },
        { value: 100, suffix: "+", label: "Agents tracked" },
        { value: 730, suffix: " hrs/yr", label: "2 hrs/day × 365 days saved annually" },
      ],
      visuals: [
        {
          title: "Reporting time compression",
          note: "Manual reporting reduced from 3 hrs/day to 1 hr/day.",
          chartSpec: {
            type: "bar",
            labels: ["Before", "After"],
            series: [{ label: "Reporting time (hrs/day)", data: [3, 1] }],
          },
        },
        {
          title: "Analytics capacity radar",
          note: "",
          chartSpec: {
            type: "radar",
            labels: ["BA", "SQL", "DA", "Dashboarding"],
            values: [90, 82, 88, 92],
            label: "Capability coverage",
            legendPosition: "bottom",
          },
        },
      ],
    },
    {
      company: "PricewaterhouseCoopers (PwC)",
      brand: "PwC",
      role: "Associate Consultant (Full Time)",
      period: "Jun 2023 – Feb 2025",
      location: "Pune, India",
      sub: "Supply Chain Optimization & Sustain",
      bullets: [
        {
          keyword: "Supply chain analytics",
          text: "Worked on supply chain analytics and optimization for a multinational consumer goods company, improving order tracking and logistics efficiency.",
        },
        {
          keyword: "Life of an Order",
          text: "Developed Power BI dashboard, including Life of an Order, enhancing order visibility by 20% and reducing processing time by 15%.",
        },
        {
          keyword: "Finance tracking",
          text: "Created a finance tracking dashboard on a 200+ client database, leading to a 25% increase in collection rates and reducing deductions by 10%, improving revenue flow.",
        },
        {
          keyword: "Client support and sustain",
          text: "Resolved 200+ client queries and support tickets covering data discrepancies, dashboard issues, and reporting enhancements, ensuring business continuity and improving overall client satisfaction.",
        },
      ],
      impacts: [
        { value: 20, prefix: "+", suffix: "%", label: "Order visibility" },
        { value: 15, prefix: "-", suffix: "%", label: "Processing time" },
        { value: 25, prefix: "+", suffix: "%", label: "Collection rate" },
        { value: 10, prefix: "-", suffix: "%", label: "Deductions" },
        { value: 200, suffix: "+", label: "Client queries resolved" },
      ],
      visuals: [
        {
          title: "Revenue improvement chart",
          note: "As collection discipline improves, deduction-led revenue leakage reduces.",
          revenueMovement: {
            left: { label: "Collection Rate", value: "+25%", direction: "up" },
            right: { label: "Revenue Leakage", value: "-10%", direction: "down" },
          },
        },
        {
          title: "Executive business impact panel",
          note: "A strategy-to-dashboard path showing how analytics translated into operational outcomes.",
          flow: [
            "Supply Chain Analytics",
            "Order Tracking Optimization",
            "Power BI Dashboard",
            "20% Visibility Gain",
            "15% Faster Processing",
          ],
        },
      ],
    },
    {
      company: "PricewaterhouseCoopers (PwC)",
      brand: "PwC",
      role: "Technology Consultant",
      period: "Jan 2023 – Jun 2023",
      location: "Pune, India",
      sub: "Data Management & Business Intelligence",
      bullets: [
        {
          keyword: "Data cleansing and ETL",
          text: "Processed large datasets for a major mining and resource company, performing data cleansing, ETL, and report creation.",
        },
        {
          keyword: "Power BI dashboard suite",
          text: "Designed and deployed 4 Power BI dashboards: Sales Performance, Manpower Utilization, Production Monitoring, and Financial Metrics, improving sales forecast accuracy by 10%, workforce productivity tracking by 12%, and reducing operational delays by 20% across the client’s business units.",
        },
        {
          keyword: "Stakeholder translation",
          text: "Collaborated with stakeholders to translate business needs into data models and actionable insights, improving decision-making efficiency by 15%.",
        },
      ],
      impacts: [
        { value: 4, suffix: "", label: "Dashboards deployed" },
        { value: 10, prefix: "+", suffix: "%", label: "Forecast accuracy" },
        { value: 12, prefix: "+", suffix: "%", label: "Productivity tracking" },
        { value: 20, prefix: "-", suffix: "%", label: "Operational delays" },
        { value: 15, prefix: "+", suffix: "%", label: "Decision efficiency" },
      ],
      visuals: [
        {
          type: "sankey",
          title: "Turning Raw Data Into Business Decisions",
          note:
            "Designed and deployed analytics solutions that transformed operational data into measurable business outcomes.",
          nodes: [
            {
              icon: "DB",
              title: "Raw Data",
              desc: "Mining operations data, financial data, workforce data",
            },
            {
              icon: "WF",
              title: "ETL & Cleansing",
              desc: "Data cleaning, transformation, validation",
            },
            {
              icon: "BI",
              title: "Power BI Dashboards",
              desc: "Sales, Finance, Production and Workforce dashboards",
            },
            {
              icon: "BU",
              title: "Business Units",
              desc: "Multiple departments consuming insights",
            },
            {
              icon: "TG",
              title: "Operational Decisions",
              desc: "Faster and more informed business decisions",
            },
          ],
          kpis: [],
        },
      ],
    },
    {
      sectionHeading: "Education",
      company: "Vellore Institute of Technology",
      brand: "VIT",
      role: "B.Tech - Computer Science and Engineering",
      period: "Jul 2019 – May 2023",
      location: "Bhopal, India",
      sub: "Cumulative GPA: 8.52 / 10.00",
      bullets: [
        {
          keyword: "Technical foundation",
          text: "Built hands-on skills across Python, SQL, C++, HTML, CSS, JavaScript, React, AI & ML concepts, and UI/UX.",
        },
        {
          keyword: "Core CS subjects",
          text: "Studied DBMS, OOPS, Computer Networks, Operating Systems, Computer Vision, and NLP.",
        },
        {
          keyword: "Frontend internship",
          text: "Interned as a Frontend Developer at TDB.ai, contributing to web interface development and frontend implementation.",
        },
        {
          keyword: "Achievements",
          text: "Received a <strong>50% scholarship</strong> from VIT University and an <strong>Award of Excellence</strong> in Class 12th.",
        },
        {
          keyword: "Extra curricular",
          text: "Core team member of SEDS Nebula VITB, and part of Google Developer Student Club, IoT Club, and IEEE Club.",
        },
      ],
      impacts: [
        { display: "8.52", label: "CGPA / 10.00" },
        { display: "50%", label: "VIT scholarship" },
        { display: "TDB.ai", label: "Frontend developer intern" },
        { display: "SEDS & GDSC", label: "Student communities" },
      ],
      schoolCards: [
        {
          title: "Class 12",
          period: "2018 – 2019",
          school: "Vidya Bhavan Public School",
          stream: "PCM",
          city: "Indore",
          grade: "85%",
        },
        {
          title: "Class 10",
          period: "2016 – 2017",
          school: "Vidya Bhavan Public School",
          city: "Gwalior",
          grade: "9.4 CGPA",
        },
      ],
      visuals: [],
    },
  ],

  /* --- Career trend chart ----------------------------------------------
     Values are generated from experiencePeriods, not hardcoded. */
  careerTrend: {
    labels: ["Jan 2023", "Jun 2023", "Feb 2025", "Nov 2025", "Today"],
    dates: ["2023-01-01", "2023-06-01", "2025-02-28", "2025-11-30", "today"],
  },

  /* --- Projects and dashboards -----------------------------------------
     Resume-backed project briefs: problem, solution, tools, and outcomes. */
  caseStudies: [
    {
      title: "Life of an Order Dashboard",
      context: "Global CPG client · PwC",
      problem:
        "Order tracking and logistics workflows had limited visibility, making it harder for teams to monitor lifecycle status and processing delays.",
      solution:
        "Developed a Power BI dashboard that mapped the life of an order and surfaced key logistics checkpoints for better operational visibility.",
      tools: ["Power BI", "SQL", "Excel", "Supply Chain Analytics", "KPI Tracking", "A/B Testing"],
      metrics: [
        { value: "+20%", label: "Order visibility", type: "increase", note: "Improved" },
        { value: "-15%", label: "Processing time", type: "reduction", note: "Reduced" },
      ],
      businessMeaning:
        "Helped business users identify order movement issues faster and reduce process friction across logistics operations.",
    },
    {
      title: "Finance Collections Tracker",
      context: "200+ client database · PwC",
      problem:
        "Finance teams needed better collections and deductions visibility across a large client database to improve revenue flow.",
      solution:
        "Created a finance tracking dashboard to monitor collection progress, deductions, and portfolio-level movement across <strong>200+</strong> client accounts.",
      tools: ["Power BI", "SQL", "Excel", "Finance Analytics", "KPI Tracking", "A/B Testing"],
      metrics: [
        { value: "+25%", label: "Collection rate", type: "increase", note: "Improved" },
        { value: "-10%", label: "Deductions", type: "reduction", note: "Reduced" },
      ],
      businessMeaning:
        "Improved collection visibility and helped reduce deduction leakage, strengthening cash-flow discipline.",
    },
    {
      title: "BPO Operational Efficiency",
      context: "BPO client · Lumenore",
      problem:
        "Operational reporting for agent performance was spread across multiple spreadsheets, creating manual effort and fragmented KPI tracking.",
      solution:
        "Designed an end-to-end operational efficiency dashboard and KPI framework to track the performance of <strong>100+</strong> agents in one unified view.",
      tools: ["Lumenore", "Excel", "Data Validation", "KPI Frameworks"],
      metrics: [
        { value: "7 → 1", label: "Reporting sources", type: "consolidation", note: "Consolidated" },
        { value: "2 hrs/day", label: "Manual reporting", type: "saving", note: "Saved" },
      ],
      businessMeaning:
        "Converted fragmented spreadsheet reporting into a structured performance-monitoring system with measurable time savings.",
    },
    {
      title: "Sales, Manpower & Production",
      context: "Mining & resources client · PwC",
      problem:
        "Business units needed reliable reporting across sales, workforce, production, and finance after large-scale data cleansing and ETL work.",
      solution:
        "Designed and deployed <strong>4</strong> Power BI dashboards covering Sales Performance, Manpower Utilization, Production Monitoring, and Financial Metrics.",
      tools: ["Power BI", "ETL", "Data Cleansing", "BI Reporting"],
      metrics: [
        { value: "-20%", label: "Operational delays", type: "reduction", note: "Reduced" },
        { value: "+15%", label: "Decision efficiency", type: "increase", note: "Improved" },
      ],
      businessMeaning:
        "Created trusted BI coverage across key business units, improving planning, productivity visibility, and operational decision-making.",
    },
  ],

  /* --- Dashboard gallery ------------------------------------------------
     Update these image paths if your snippet filenames are different. */
  dashboardGallery: [
    {
      title: "Task Operations Dashboard",
      image: "Dashboard Snippets/Task Operations Dashboard.png",
      alt: "Task operations dashboard snippet",
    },
    {
      title: "BPO Operations Dashboard",
      image: "Dashboard Snippets/BPO Operations Dashboard.png",
      alt: "BPO operations dashboard snippet",
    },
    {
      title: "Workflow Management Dashboard",
      image: "Dashboard Snippets/Workflow management Dashboard.png",
      alt: "Workflow management dashboard snippet",
    },
    {
      title: "Healthcare Revenue Dashboard",
      image: "Dashboard Snippets/Healthcare Revenue Dashboard.png",
      alt: "Healthcare revenue dashboard snippet",
    },
    {
      title: "Profitability Analysis Dashboard",
      image: "Dashboard Snippets/Profitability Analysis Dashboard.png",
      alt: "Profitability analysis dashboard snippet",
    },
    {
      title: "Sales Performance Dashboard",
      image: "Dashboard Snippets/Sales Performance Dashboard.png",
      alt: "Sales performance dashboard snippet",
    },
  ],

  /* --- Side hustles & community (SECONDARY, extracurricular case studies)
     No fake KPIs. Add real numbers later only if you can verify them. */
  ventures: [
    {
      title: "Punkster",
      role: "Co-founder · Operations & Marketing",
      period: "2024 – 2025",
      sub: "Funky streetwear clothing brand blending punk/music culture with oversized streetwear",
      gallery: [
        "assets/side-hustles/punkster/1",
        "assets/side-hustles/punkster/2",
        "assets/side-hustles/punkster/3",
        "assets/side-hustles/punkster/4",
      ],
      thesis:
        "Built a 0-to-1 D2C streetwear experiment with a designer co-founder, owning operations, sourcing, Instagram-led sales, offline activation, and customer acquisition.",
      bullets: [
        {
          keyword: "Brand positioning",
          text: "Defined Punkster as a funky streetwear brand for Gen Z, blending punk/music culture with oversized T-shirts, original graphics, and a distinct visual identity.",
        },
        {
          keyword: "Operating model",
          text: "Managed the operations and marketing side while the co-founder handled design/editing; outsourced blank oversized T-shirts and printing to build a lean production workflow.",
        },
        {
          keyword: "Go-to-market",
          text: "Used Instagram DM-to-order, word of mouth, friend networks, story promotions, paid ads, and barter influencer collaborations to create early demand.",
        },
        {
          keyword: "Offline growth experiments",
          text: "Promoted the brand at high streets and cafe-heavy youth locations through posters, visiting cards, street reviews, product demos, and graffiti-style awareness.",
        },
        {
          keyword: "Customer discovery",
          text: "Delivered custom designs requested by early supporters and used direct feedback from buyers and prospects to understand taste, pricing sensitivity, and repeat-purchase behavior.",
        },
        {
          keyword: "Business learning",
          text: "Identified key bottlenecks around sourcing cost, inconsistent supplier quality, low order volumes, high CAC, and pricing pressure, strengthening my understanding of unit economics and GTM trade-offs.",
        },
      ],
      proof:
        "Punkster became a practical lesson in building hype, culture, and community around a product, while learning that creativity, supplier economics, customer acquisition, and pricing discipline matter as much as the product itself.",
      skills: [
        "Product Thinking",
        "Brand Building",
        "Business Strategy",
        "0-to-1 GTM",
        "Instagram-led sales",
        "Influencer barter",
        "Supplier economics",
        "Community building",
      ],
    },
    {
      title: "The Quick Shop",
      role: "Co-founder · Business Strategy & Operations Lead",
      period: "2025",
      sub: "Indore, India · Retail Operations & Growth Strategy",
      gallery: [
        "assets/side-hustles/the-quick-shop/1",
        "assets/side-hustles/the-quick-shop/2",
        "assets/side-hustles/the-quick-shop/3",
        "assets/side-hustles/the-quick-shop/4",
      ],
      thesis:
        "Co-founded and launched a SuperMart from scratch in a new city, owning strategy, operations, vendor partnerships, inventory, promotions, staff enablement, and growth execution.",
      bullets: [
        {
          keyword: "0-to-1 launch",
          text: "Co-founded and launched the store from scratch, driving operations through strategic planning, execution, and daily operating discipline.",
        },
        {
          keyword: "Site and assortment strategy",
          text: "Finalized store location after evaluating 8+ commercial sites and planned the layout for a 600+ SKU product catalogue across 12+ categories.",
        },
        {
          keyword: "Vendor and inventory operations",
          text: "Built partnerships with 25+ vendors and established efficient inventory routines, reducing stockouts by 40%.",
        },
        {
          keyword: "Local growth campaigns",
          text: "Crafted promotional campaigns using Canva and AI tools, and launched a WhatsApp community that increased footfall by 60%.",
        },
        {
          keyword: "Sales optimization",
          text: "Drove 2x sales growth in 3 months through sales analysis, product optimization, and customer feedback loops.",
        },
        {
          keyword: "People and process",
          text: "Trained and managed store staff, implemented SOPs, and ensured seamless daily operations.",
        },
      ],
      proof:
        "The Quick Shop became hands-on proof of strategy-to-execution ownership: market evaluation, operating design, vendor management, local growth, sales analytics, SOP building, and team management in a real retail environment.",
      skills: [
        "0-to-1 Launch",
        "Retail Strategy",
        "Vendor Partnerships",
        "Inventory Ops",
        "WhatsApp Growth",
        "Sales Analysis",
        "SOPs",
      ],
    },
    {
      title: "Humour Herald - Open Mic Community",
      role: "Co-organizer · Indore",
      period: "2025",
      sub: "Weekend live-performance community and event operations",
      gallery: [
        "assets/side-hustles/humour-herald/1",
        "assets/side-hustles/humour-herald/2",
        "assets/side-hustles/humour-herald/3",
        "assets/side-hustles/humour-herald/4",
      ],
      thesis:
        "Co-founded and scaled an open-mic community by combining event operations, partnerships, and community-building into a repeatable experience that kept performers and audiences coming back.",
      bullets: [
        {
          keyword: "Community as a product",
          text: "Helped create a repeatable weekend experience for performers and audiences, treating programming, venue quality, and audience energy as parts of the product.",
        },
        {
          keyword: "Event operations",
          text: "Co-managed performer coordination, venue conversations, event flow, audience engagement, and on-ground execution.",
        },
        {
          keyword: "Growth and partnerships",
          text: "Built the community through consistency, word of mouth, partnerships, and a stronger performer pipeline over time.",
        },
      ],
      proof:
        "The community taught me how engagement, retention, partnerships, and experience quality work together when building something people choose to return to.",
      skills: ["Community Building", "Event Ops", "Partnerships", "Growth Strategy", "Public Speaking", "Networking"],
    },
  ],
  venturesTransferable: [
    "Structured problem-solving under ambiguity",
    "Stakeholder management",
    "End-to-end ownership",
    "Growth experimentation",
    "P&L exposure",
  ],

  /* --- Certifications --------------------------------------------------- */
  certifications: [
    {
      title: "Leetcode SQL 50",
      image: "certificates/Leetcode SQL 50.png",
    },
    {
      title: "Outskill GenAI Certificate",
      image: "certificates/Outskill GenAI certificate.png",
    },
    {
      title: "McKinsey Forward Certificate",
      image: "certificates/McKinsey Forward Certificate.png",
      thumbnail: "certificates/forward-badge.png",
    },
  ],

  /* --- Aggregate impact band (recruiter 30-second skim) ---------------- */
  impact: [
    { value: 7, suffix: "+", label: "BI dashboards delivered" },
    { value: 730, suffix: " hrs/yr", label: "Manual Reporting Eliminated" },
    { value: 200, suffix: "+", label: "Client queries resolved" },
    { value: 25, prefix: "+", suffix: "%", label: "Collection-rate improvement" },
    { value: 5, suffix: "", label: "Business domains covered" },
  ],
};


/* ============================================================================
   2. HELPERS
============================================================================ */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const el = (tag, cls, html) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html != null) node.innerHTML = html;
  return node;
};

/* Dynamic active years of experience — recomputed on every page load.
   It sums only DATA.experiencePeriods, so known breaks are excluded. */
function parseDate(value) {
  if (value === "today" || value == null) return new Date();
  return new Date(value);
}
function overlapMs(period, cutoff = new Date()) {
  const start = parseDate(period.start);
  const rawEnd = parseDate(period.end);
  const end = rawEnd > cutoff ? cutoff : rawEnd;
  if (end <= start || cutoff <= start) return 0;
  return end - start;
}
function computeActiveYears(cutoff = new Date()) {
  const ms = DATA.experiencePeriods.reduce((sum, period) => {
    return sum + overlapMs(period, cutoff);
  }, 0);
  return Math.max(0, ms / (1000 * 60 * 60 * 24 * 365.25));
}
function formatYears() {
  // one decimal place, e.g. "2.6"; the "+" suffix is added by the KPI tile
  return computeActiveYears().toFixed(1);
}
function careerTrendValues() {
  return DATA.careerTrend.dates.map((date) => {
    const cutoff = parseDate(date);
    return Number(computeActiveYears(cutoff).toFixed(1));
  });
}


/* ============================================================================
   3. RENDER  —  build sections from DATA
============================================================================ */
function renderIdentity() {
  if ($("#brandName")) $("#brandName").textContent = DATA.name;
  $("#heroName").textContent = DATA.name;
  $("#heroHeadline").textContent = DATA.headline;
  $("#heroTagline").textContent = DATA.tagline;
  $("#heroLocation").textContent = DATA.location;

  // Resume links
  $$(".resume-link").forEach((a) => {
    a.href = DATA.resumeFile;
    a.removeAttribute("download");
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });
}

function kpiTile(kpi) {
  const value = kpi.dynamicYears ? formatYears() : kpi.value;
  const tile = el("div", "kpi-tile reveal");
  tile.innerHTML = `
    <div class="kpi-value">
      <span class="kpi-prefix">${kpi.prefix || ""}</span><span class="count" data-target="${value}" data-decimals="${kpi.dynamicYears ? 1 : 0}">0</span><span class="kpi-suffix">${kpi.suffix || ""}</span>
    </div>
    <div class="kpi-label">${kpi.label}</div>
    <div class="kpi-spark"></div>`;
  return tile;
}

function renderHeroKpis() {
  const wrap = $("#heroKpis");
  DATA.heroKpis.forEach((k) => wrap.appendChild(kpiTile(k)));
}

function renderProfile() {
  const profileSummary = $("#profileSummary");
  const profilePositioning = $("#profilePositioning");
  if (profileSummary) profileSummary.textContent = DATA.profile.summary;
  if (profilePositioning) profilePositioning.textContent = DATA.profile.positioning;
  const heroTreemap = $("#heroIndustryTreemap");
  if (heroTreemap) {
    const heroLabels = {
      "Consumer Goods / Supply Chain": "Supply Chain",
      "Finance / Collections": "Finance",
      "Mining & Resources": "Mining",
      "BPO Operations": "BPO Ops",
      "Entertainment / CXM": "Entertainment",
    };
    heroTreemap.innerHTML = DATA.profile.industries
      .map(
        (item, index) => `
        <div class="hero-treemap-cell hero-treemap-cell-${index + 1}" style="--share:${item.value}" title="${item.label}: ${item.value}%">
          <span>${heroLabels[item.label] || item.label}</span>
        </div>`
      )
      .join("");
  }
  const treemap = $("#industryTreemap");
  if (treemap) {
    treemap.innerHTML = DATA.profile.industries
      .map(
        (item, index) => `
        <div class="treemap-cell treemap-cell-${index + 1}" data-share="${item.value}%" title="${item.label}: ${item.value}%">
          <span>${item.label}</span>
        </div>`
      )
      .join("");
  }
}

function renderFit() {
  const wrap = $("#fitGrid");
  DATA.fit.forEach((f, i) => {
    const card = el("div", "fit-card reveal");
    card.style.transitionDelay = `${i * 60}ms`;
    card.innerHTML = `
      <div class="fit-index">0${i + 1}</div>
      <h3>${f.title}</h3>
      <p>${f.proof}</p>`;
    wrap.appendChild(card);
  });
}

function renderSkills() {
  const bars = $("#skillBars");
  DATA.skills.bars.forEach((s) => {
    const row = el("div", "skill-row reveal");
    row.innerHTML = `
      <div class="skill-meta"><span>${s.name}</span><span class="skill-pct">${s.level}%</span></div>
      <div class="skill-track"><div class="skill-fill" data-level="${s.level}"></div></div>`;
    bars.appendChild(row);
  });

  const tools = $("#toolGrid");
  DATA.skills.tools.forEach((tool) => {
    const variantClass = tool.variant ? ` tool-card-${tool.variant}` : "";
    const card = el("article", `tool-card${variantClass} reveal`);
    card.title = `${tool.name}${tool.category ? ` · ${tool.category}` : ""}`;
    card.innerHTML = `
      <span class="tool-logo${variantClass}">
        <img src="${tool.logo}" alt="${tool.name} logo" loading="lazy" onerror="this.closest('.tool-logo').classList.add('tool-logo-fallback'); this.remove();" />
        <span class="tool-fallback">${tool.fallback || tool.name.slice(0, 2)}</span>
      </span>
      <strong class="tool-name">${tool.name}</strong>`;
    tools.appendChild(card);
  });

  const additionalSkillsWrap = $("#additionalSkills");
  if (additionalSkillsWrap) {
    additionalSkillsWrap.innerHTML = `
      <div class="additional-skills-head">
        <h2>Additional skills</h2>
      </div>
      <div class="additional-skills-grid">
        ${DATA.skills.additionalSkills.map((skill) => `<span>${skill}</span>`).join("")}
      </div>`;
  }
}

function renderExperience() {
  const wrap = $("#timeline");
  wrap.appendChild(el("span", "timeline-progress-dot"));
  DATA.experience.forEach((job, i) => {
    const isEducation = job.sectionHeading === "Education";
    if (job.sectionHeading) {
      const heading = el("h3", "timeline-section-heading reveal");
      heading.textContent = job.sectionHeading;
      wrap.appendChild(heading);
    }
    const item = el("div", `timeline-item reveal${!isEducation ? " timeline-item-analytics" : ""}`);
    const bullets = job.bullets
      .map(
        (b) => `
        <li>
          <strong>${b.keyword}.</strong> ${b.text}
        </li>`
      )
      .join("");
    const mobileDetailsMarkup = `<details class="mobile-career-details">
        <summary>Read more</summary>
        <ul class="resume-bullets">${bullets}</ul>
      </details>`;
    const impacts = job.impacts
      .map(
        (m) => {
          const valueMarkup = m.display
            ? `<span class="impact-display">${m.display}</span>`
            : `<span class="impact-prefix">${m.prefix || ""}</span><span class="count" data-target="${m.value}" data-decimals="0">0</span>${m.suffix || ""}`;
          return `
        <div class="impact-pill">
          <span class="impact-num">${valueMarkup}</span>
          <span class="impact-lbl">${m.label}</span>
        </div>`;
        }
      )
      .join("");
    const visualMarkup = job.visuals && job.visuals.length
      ? `<div class="experience-visual-grid">
          ${job.visuals
            .map(
              (visual, visualIndex) => {
                let visualBody = `<div class="experience-mini-chart"><canvas data-chart="exp-${i}-${visualIndex}"></canvas></div>`;
                if (visual.revenueTrend) {
                  const collectionPoints = visual.revenueTrend.collection
                    .map((value, idx, arr) => {
                      const x = (idx / (arr.length - 1)) * 100;
                      const y = 100 - value;
                      return `${x},${y}`;
                    })
                    .join(" ");
                  const deductionPoints = visual.revenueTrend.deductions
                    .map((value, idx, arr) => {
                      const x = (idx / (arr.length - 1)) * 100;
                      const y = 100 - value;
                      return `${x},${y}`;
                    })
                    .join(" ");
                  const collectionDots = visual.revenueTrend.collection
                    .map((value, idx, arr) => {
                      const x = (idx / (arr.length - 1)) * 100;
                      const y = 100 - value;
                      return `<span class="trend-dot trend-dot-collection" style="left:${x}%; top:${y}%"></span>`;
                    })
                    .join("");
                  const deductionDots = visual.revenueTrend.deductions
                    .map((value, idx, arr) => {
                      const x = (idx / (arr.length - 1)) * 100;
                      const y = 100 - value;
                      return `<span class="trend-dot trend-dot-deduction" style="left:${x}%; top:${y}%"></span>`;
                    })
                    .join("");
                  visualBody = `
                    <div class="financial-trend">
                      <div class="trend-legend">
                        <span><i class="legend-collection"></i> Collection Rate (%)</span>
                        <span><i class="legend-deduction"></i> Revenue Deductions (%)</span>
                      </div>
                      <div class="trend-plot">
                        <div class="trend-y-axis">
                          <span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span>
                        </div>
                        <div class="trend-canvas">
                          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polyline class="trend-line trend-line-collection" points="${collectionPoints}" />
                            <polyline class="trend-line trend-line-deduction" points="${deductionPoints}" />
                          </svg>
                          ${collectionDots}
                          ${deductionDots}
                          <span class="trend-start trend-start-collection">60%</span>
                          <span class="trend-start trend-start-deduction">20%</span>
                          <span class="trend-callout trend-callout-collection">${visual.revenueTrend.collectionCallout}</span>
                          <span class="trend-callout trend-callout-deduction">${visual.revenueTrend.deductionsCallout}</span>
                        </div>
                      </div>
                    </div>`;
                } else if (visual.revenueMovement) {
                  visualBody = `
                    <div class="revenue-movement">
                      <div class="revenue-axis revenue-axis-left">
                        <span>${visual.revenueMovement.left.label}</span>
                        <strong>${visual.revenueMovement.left.value}</strong>
                      </div>
                      <div class="revenue-lines" aria-hidden="true">
                        <span class="revenue-line revenue-line-up">↗</span>
                        <span class="revenue-line revenue-line-down">↘</span>
                      </div>
                      <div class="revenue-axis revenue-axis-right">
                        <span>${visual.revenueMovement.right.label}</span>
                        <strong>${visual.revenueMovement.right.value}</strong>
                      </div>
                    </div>`;
                } else if (visual.waterfall) {
                  visualBody = `
                    <div class="waterfall-steps">
                      ${visual.waterfall
                        .map(
                          (step, stepIndex) => `
                          <div class="waterfall-step waterfall-${step.type}" style="--step:${stepIndex}">
                            <span>${step.label}</span>
                          </div>`
                        )
                        .join("")}
                    </div>`;
                } else if (visual.type === "sankey") {
                  const nodes = visual.nodes
                    .map(
                      (node, nodeIndex) => `
                      <div class="sankey-node sankey-node-${nodeIndex + 1}" tabindex="0">
                        <span class="sankey-icon">${node.icon}</span>
                        <strong>${node.title}</strong>
                        <small>${node.desc}</small>
                        <span class="sankey-tooltip">${node.desc}</span>
                      </div>`
                    )
                    .join("");
                  const kpis = (visual.kpis || [])
                    .map(
                      (kpi) => `
                      <div class="sankey-kpi sankey-kpi-${kpi.tone}">
                        <span class="sankey-kpi-icon">${kpi.icon}</span>
                        <span>${kpi.title}</span>
                        <strong>${kpi.value}</strong>
                      </div>`
                    )
                    .join("");
                  visualBody = `
                    <div class="sankey-platform">
                      <div class="sankey-stage">
                        <svg class="sankey-svg" viewBox="0 0 1000 230" preserveAspectRatio="none" aria-hidden="true">
                          <defs>
                            <linearGradient id="sankeyFlowA" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.34" />
                              <stop offset="50%" stop-color="#f59e0b" stop-opacity="0.58" />
                              <stop offset="100%" stop-color="#10b981" stop-opacity="0.74" />
                            </linearGradient>
                            <linearGradient id="sankeyFlowB" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.28" />
                              <stop offset="100%" stop-color="#f97316" stop-opacity="0.64" />
                            </linearGradient>
                          </defs>
                          <path class="sankey-link sankey-link-1" d="M105 112 C205 62, 255 62, 355 112" />
                          <path class="sankey-link sankey-link-2" d="M340 112 C450 52, 510 52, 620 112" />
                          <path class="sankey-link sankey-link-3" d="M600 112 C705 55, 755 55, 860 112" />
                          <path class="sankey-link sankey-link-4" d="M850 112 C910 88, 940 88, 990 112" />
                        </svg>
                        <div class="sankey-nodes">${nodes}</div>
                      </div>
                      ${kpis ? `<div class="sankey-kpis">${kpis}</div>` : ""}
                    </div>`;
                } else if (visual.flow) {
                  visualBody = `<div class="impact-flow">
                      ${visual.flow
                        .map((step) => `<div class="impact-flow-step">${step}</div>`)
                        .join("")}
                    </div>`;
                }
                const visualClass = visual.title === "Analytics capacity radar" ? " experience-visual-radar" : "";
                return `
              <div class="experience-visual-card${visualClass}">
                <h4>${visual.title}</h4>
                ${visual.note ? `<p>${visual.note}</p>` : ""}
                ${visualBody}
              </div>`;
              }
            )
            .join("")}
        </div>`
      : job.chartSpec
        ? `<div class="panel-chart"><canvas data-chart="exp-${i}"></canvas></div>`
        : "";
    const analyticsButton = !isEducation && (job.impacts?.length || job.visuals?.length || job.chartSpec)
      ? `<button class="experience-analytics-btn" type="button" data-experience-analytics="${i}">
          <span class="experience-analytics-btn-label">View analytics</span> <span class="experience-analytics-btn-icon" aria-hidden="true">→</span>
        </button>`
      : "";
    const inlineImpactMarkup = isEducation ? `<div class="impact-row">${impacts}</div>` : "";
    const inlineVisualMarkup = isEducation ? visualMarkup : "";
    const schoolCardsMarkup = isEducation && job.schoolCards?.length
      ? `<div class="school-card-grid">
          ${job.schoolCards
            .map(
              (school) => `
              <article class="school-card">
                <div class="school-card-head">
                  <span>${school.title}</span>
                  <strong>${school.period}</strong>
                </div>
                <h4>${school.school}</h4>
                <div class="school-card-meta">
                  ${school.stream ? `<span>Stream: <strong>${school.stream}</strong></span>` : ""}
                  <span>City: <strong>${school.city}</strong></span>
                </div>
                <p><strong>${school.grade}</strong></p>
              </article>`
            )
            .join("")}
        </div>`
      : "";
    const analyticsPanelMarkup = !isEducation
      ? `<aside class="experience-analytics-panel" aria-live="polite">
          <div class="experience-analytics-inner">
            <button class="experience-analytics-close" type="button" aria-label="Close experience analytics">×</button>
            <span class="venture-case-label">Analytics Dashboard</span>
            <h3>${job.company}</h3>
            <p>${job.role} · ${job.period}</p>
            <div class="impact-row">${impacts}</div>
            ${visualMarkup}
          </div>
        </aside>`
      : "";

    item.innerHTML = `
      <div class="timeline-marker"></div>
      <div class="panel">
        <div class="panel-head">
          <div>
            <h3 class="panel-company">${job.company}</h3>
            <p class="panel-role">${job.role}</p>
            <p class="panel-location">${job.location}</p>
            <p class="panel-sub">${job.sub}</p>
          </div>
          <span class="panel-period">${job.period}</span>
        </div>
        ${mobileDetailsMarkup}
        <ul class="resume-bullets desktop-career-bullets">${bullets}</ul>
        ${analyticsButton}
        ${inlineImpactMarkup}
        ${inlineVisualMarkup}
      </div>
      ${schoolCardsMarkup}
      ${analyticsPanelMarkup}`;
    wrap.appendChild(item);
    if (job.visuals && job.visuals.length) {
      job.visuals.forEach((visual, visualIndex) => {
        if (visual.chartSpec) registerChart(`exp-${i}-${visualIndex}`, visual.chartSpec);
      });
    } else if (job.chartSpec) {
      registerChart(`exp-${i}`, job.chartSpec);
    }
  });

  const closeAnalytics = () => {
    $$(".timeline-item-analytics.is-analytics-open", wrap).forEach((item) => {
      item.classList.remove("is-analytics-open");
      const button = item.querySelector(".experience-analytics-btn");
      const label = item.querySelector(".experience-analytics-btn-label");
      const icon = item.querySelector(".experience-analytics-btn-icon");
      if (button) button.setAttribute("aria-expanded", "false");
      if (label) label.textContent = "View analytics";
      if (icon) icon.textContent = "→";
    });
  };

  const buildPanelVisuals = (panel) => {
    $$(".count", panel).forEach((node) => {
      if (!node.dataset.done) {
        node.dataset.done = "1";
        animateCount(node);
      }
    });
    $$("canvas[data-chart]", panel).forEach((canvas) => {
      if (canvas.dataset.built) return;
      const reg = chartRegistry.find((r) => r.id === canvas.dataset.chart);
      if (reg) {
        canvas.dataset.built = "1";
        buildChart(canvas, reg.spec);
      }
    });
  };

  wrap.addEventListener("click", (event) => {
    const closeButton = event.target.closest(".experience-analytics-close");
    if (closeButton) {
      closeAnalytics();
      return;
    }

    const trigger = event.target.closest("[data-experience-analytics]");
    if (!trigger) return;
    const item = trigger.closest(".timeline-item-analytics");
    const panel = item?.querySelector(".experience-analytics-panel");
    if (!item || !panel) return;

    const wasOpen = item.classList.contains("is-analytics-open");
    closeAnalytics();
    if (!wasOpen) {
      item.classList.add("is-analytics-open");
      trigger.setAttribute("aria-expanded", "true");
      const label = trigger.querySelector(".experience-analytics-btn-label");
      const icon = trigger.querySelector(".experience-analytics-btn-icon");
      if (label) label.textContent = "Close analytics";
      if (icon) icon.textContent = "×";
      requestAnimationFrame(() => buildPanelVisuals(panel));
    }
  });

  document.addEventListener("click", (event) => {
    if (!wrap.querySelector(".timeline-item-analytics.is-analytics-open")) return;
    if (event.target.closest(".experience-analytics-inner")) return;
    if (event.target.closest("[data-experience-analytics]")) return;
    closeAnalytics();
  });
}

function renderCaseStudies() {
  const wrap = $("#caseGrid");
  DATA.caseStudies.forEach((c, i) => {
    const card = el("article", "case-card project-card reveal");
    card.style.transitionDelay = `${i * 60}ms`;
    const tools = c.tools.map((tool) => `<span class="project-tool">${tool}</span>`).join("");
    const metrics = c.metrics
      .map(
        (m) => `
        <div class="project-metric project-metric-${m.type}">
          <span class="metric-note">${m.note}</span>
          <strong>${m.value}</strong>
          <span>${m.label}</span>
        </div>`
      )
      .join("");
    card.innerHTML = `
      <div class="case-head">
        <h3>${c.title}</h3>
        <p class="case-client">${c.context}</p>
      </div>
      <div class="project-brief">
        <div>
          <span class="project-kicker">Problem</span>
          <p>${c.problem}</p>
        </div>
        <div>
          <span class="project-kicker">Implemented solution</span>
          <p>${c.solution}</p>
        </div>
      </div>
      <div class="project-tools" aria-label="Tools used">${tools}</div>
      <div class="project-metrics">${metrics}</div>
      <p class="project-meaning"><strong>Business meaning.</strong> ${c.businessMeaning}</p>`;
    wrap.appendChild(card);
  });
}

function renderDashboardGallery() {
  const wrap = $("#dashboardGallery");
  if (!wrap || !DATA.dashboardGallery?.length) return;
  const slides = DATA.dashboardGallery
    .map(
      (item, i) => `
      <article class="gallery-slide" style="--slide:${i}">
        <img src="${item.image}" alt="${item.alt || item.title}" loading="lazy" />
        <div class="gallery-slide-meta">
          <span>0${i + 1}</span>
          <strong>${item.title}</strong>
        </div>
      </article>`
    )
    .join("");

  wrap.innerHTML = `
    <div class="gallery-head">
      <span class="project-kicker">Explore Dashboard Gallery</span>
      <p>swipe or horizontally scroll to explore dashboards</p>
    </div>
    <div class="gallery-rail" aria-label="Dashboard snippet carousel">
      ${slides}
    </div>`;
}

function renderVentures() {
  const wrap = $("#ventureGrid");
  if (wrap) {
    // Old side-hustle card layout is preserved but hidden by commenting out
    // the #ventureGrid container in index.html.
    DATA.ventures.forEach((v, i) => {
      const card = el("article", "venture-case-card reveal");
      const bullets = v.bullets
        .map(
          (b) => `
          <li>
            <strong>${b.keyword}.</strong> ${b.text}
          </li>`
        )
        .join("");
      const tags = v.skills.map((s) => `<span class="venture-tag">${s}</span>`).join("");
      card.innerHTML = `
        <div class="venture-case-top">
          <div>
            <span class="venture-case-label">Case Study ${String(i + 1).padStart(2, "0")}</span>
            <h3>${v.title}</h3>
            <p class="venture-role-line">${v.role}</p>
            <p class="venture-subline">${v.sub}</p>
          </div>
          <span class="venture-period-pill">${v.period}</span>
        </div>
        <p class="venture-thesis">${v.thesis}</p>
        <div class="venture-body-grid">
          <ul class="resume-bullets venture-bullets">${bullets}</ul>
          <div class="venture-side">
            <div class="venture-proof">
              <strong>Proof of learning:</strong> ${v.proof}
            </div>
            <div class="venture-skills-box">
              <strong>Skills Acquired:</strong>
              <div class="venture-tags">${tags}</div>
            </div>
          </div>
        </div>`;
      wrap.appendChild(card);
    });
  }

  const compactLayout = $("#ventureCompactLayout");
  const compactGrid = $("#ventureCompactGrid");
  const readMorePanel = $("#ventureReadMorePanel");
  if (compactLayout && compactGrid && readMorePanel) {
    compactGrid.innerHTML = DATA.ventures
      .map((v, i) => {
        const slides = (v.gallery || [])
          .map(
            (src, imageIndex) => `
              <img
                src="${src}.jpg"
                data-src-base="${src}"
                data-ext-index="0"
                alt="${v.title} gallery image ${imageIndex + 1}"
                loading="lazy"
              />`
          )
          .join("");
        const skillTags = v.skills.map((s) => `<span class="venture-mini-tag">${s}</span>`).join("");

        return `
          <article class="venture-compact-card" data-venture-index="${i}">
            <div class="venture-mini-meta">
              <span>Case Study ${i + 1}</span>
              <span>${v.period}</span>
            </div>
            <div class="venture-gallery" data-gallery-index="0">
              <div class="venture-gallery-track">${slides}</div>
              <button class="venture-gallery-btn venture-gallery-btn-prev" type="button" data-gallery-dir="-1" aria-label="Previous ${v.title} image">‹</button>
              <button class="venture-gallery-btn venture-gallery-btn-next" type="button" data-gallery-dir="1" aria-label="Next ${v.title} image">›</button>
            </div>
            <h3>${v.title}</h3>
            <p class="venture-mini-role">${v.role}</p>
            <p class="venture-mini-sub">${v.sub}</p>
            <p class="venture-mini-detail">${v.thesis}</p>
            <div class="venture-mini-skills">${skillTags}</div>
            <div class="venture-mini-actions">
              <button class="venture-readmore-btn" type="button" data-venture-readmore="${i}">
                Read more <span aria-hidden="true">→</span>
              </button>
              <a class="venture-linkedin-btn" href="${v.linkedin || DATA.contact.linkedin}" target="_blank" rel="noopener">
                Read on LinkedIn
              </a>
            </div>
          </article>`;
      })
      .join("");

    const imageExtensions = [".jpg", ".jpeg", ".png", ".webp"];
    $$("img[data-src-base]", compactGrid).forEach((image) => {
      image.addEventListener("error", () => {
        const nextIndex = Number(image.dataset.extIndex || 0) + 1;
        if (nextIndex >= imageExtensions.length) {
          image.remove();
          return;
        }
        image.dataset.extIndex = String(nextIndex);
        image.src = `${image.dataset.srcBase}${imageExtensions[nextIndex]}`;
      });
    });

    const renderReadMore = (index) => {
      const venture = DATA.ventures[index];
      if (!venture) return;
      const details = venture.bullets
        .map((b) => `<li><strong>${b.keyword}.</strong> ${b.text}</li>`)
        .join("");

      compactLayout.classList.add("is-expanded");
      $$(".venture-compact-card", compactGrid).forEach((card) => {
        card.classList.toggle("is-active", Number(card.dataset.ventureIndex) === index);
      });
      readMorePanel.innerHTML = `
        <div class="venture-readmore-inner">
          <button class="venture-readmore-close" type="button" aria-label="Close side hustle details">×</button>
          <span class="venture-case-label">Case Study ${index + 1}</span>
          <h3>${venture.title}</h3>
          <div class="venture-readmore-proof">
            <strong>Proof of learning:</strong> ${venture.proof}
          </div>
          <ul class="resume-bullets venture-readmore-list">${details}</ul>
        </div>`;
    };

    const closeReadMore = () => {
      compactLayout.classList.remove("is-expanded");
      $$(".venture-compact-card", compactGrid).forEach((card) => card.classList.remove("is-active"));
      readMorePanel.innerHTML = "";
    };

    compactGrid.addEventListener("click", (event) => {
      const button = event.target.closest("[data-venture-readmore]");
      if (!button) return;
      renderReadMore(Number(button.dataset.ventureReadmore));
    });

    readMorePanel.addEventListener("click", (event) => {
      if (!event.target.closest(".venture-readmore-close")) return;
      closeReadMore();
    });

    document.addEventListener("click", (event) => {
      if (!compactLayout.classList.contains("is-expanded")) return;
      if (readMorePanel.contains(event.target)) return;
      if (event.target.closest("[data-venture-readmore]")) return;
      closeReadMore();
    });

    const moveGallery = (gallery, direction) => {
      const track = $(".venture-gallery-track", gallery);
      if (!track) return;
      const slides = $$("img", track);
      if (slides.length <= 1) return;
      const current = Number(gallery.dataset.galleryIndex || 0);
      const next = (current + direction + slides.length) % slides.length;
      gallery.dataset.galleryIndex = String(next);
      track.style.transform = `translateX(-${next * 100}%)`;
    };

    $$(".venture-gallery", compactGrid).forEach((gallery) => {
      let touchStartX = 0;

      gallery.addEventListener("click", (event) => {
        const button = event.target.closest("[data-gallery-dir]");
        if (!button) return;
        event.stopPropagation();
        moveGallery(gallery, Number(button.dataset.galleryDir));
      });

      gallery.addEventListener(
        "touchstart",
        (event) => {
          touchStartX = event.touches[0]?.clientX || 0;
        },
        { passive: true }
      );

      gallery.addEventListener(
        "touchend",
        (event) => {
          const touchEndX = event.changedTouches[0]?.clientX || 0;
          const deltaX = touchEndX - touchStartX;
          if (Math.abs(deltaX) < 40) return;
          moveGallery(gallery, deltaX < 0 ? 1 : -1);
        },
        { passive: true }
      );
    });

    setInterval(() => {
      $$(".venture-gallery", compactGrid).forEach((gallery) => moveGallery(gallery, 1));
    }, 2000);
  }

  const tr = $("#transferList");
  DATA.venturesTransferable.forEach((t) => tr.appendChild(el("span", "transfer-chip", t)));
}

function renderCertifications() {
  const wrap = $("#certGrid");
  if (!wrap || !DATA.certifications?.length) return;
  wrap.innerHTML = DATA.certifications
    .map(
      (cert, index) => `
      <button class="cert-card reveal" type="button" data-cert-index="${index}">
        <span class="cert-thumb">
          <img src="${cert.thumbnail || cert.image}" alt="${cert.title} certificate thumbnail" loading="lazy" />
        </span>
        <strong>${cert.title}</strong>
      </button>`
    )
    .join("");
}

function renderImpact() {
  const wrap = $("#impactBand");
  if (!wrap) return;
  DATA.impact.forEach((m, i) => {
    const tile = el("div", "impact-tile reveal");
    tile.style.transitionDelay = `${i * 60}ms`;
    tile.innerHTML = `
      <div class="impact-tile-num">${m.prefix || ""}<span class="count" data-target="${m.value}" data-decimals="0">0</span>${m.suffix || ""}</div>
      <div class="impact-tile-lbl">${m.label}</div>`;
    wrap.appendChild(tile);
  });
}

function renderContact() {
  const c = DATA.contact;
  $("#contactGrid").innerHTML = `
    <a class="contact-card" href="mailto:${c.email}">
      <span class="contact-logo"><img src="assets/logos/gmail.svg" alt="Gmail logo" loading="lazy" /></span>
      <span class="contact-k">Gmail</span><span class="contact-v">${c.email}</span></a>
    <a class="contact-card" href="${c.linkedin}" target="_blank" rel="noopener">
      <span class="contact-logo"><img src="assets/logos/linkedin.svg" alt="LinkedIn logo" loading="lazy" /></span>
      <span class="contact-k">LinkedIn</span><span class="contact-v">Visit profile</span></a>
    <a class="contact-card" href="${c.leetcode}" target="_blank" rel="noopener">
      <span class="contact-logo"><img src="assets/logos/leetcode.svg" alt="LeetCode logo" loading="lazy" /></span>
      <span class="contact-k">LeetCode</span><span class="contact-v">Visit profile</span></a>`;
  $("#footerName").textContent = DATA.name;
  $("#footerYear").textContent = new Date().getFullYear();
}


/* ============================================================================
   4. CHARTS  —  lazy-rendered with Chart.js when scrolled into view
============================================================================ */
const chartRegistry = []; // { id, spec }
const chartInstances = []; // live Chart objects (for re-theming)
function registerChart(id, spec) {
  chartRegistry.push({ id, spec });
}

function themeColors() {
  const cs = getComputedStyle(document.documentElement);
  const v = (n) => cs.getPropertyValue(n).trim();
  return {
    accent: v("--accent"),
    accent2: v("--accent-2"),
    text: v("--text-dim"),
    grid: v("--grid-line"),
    surface: v("--surface-2"),
  };
}

function buildChart(canvas, spec) {
  if (typeof Chart === "undefined") {
    const holder = canvas.parentElement;
    if (holder && !holder.querySelector(".chart-fallback")) {
      const fallback = el(
        "div",
        "chart-fallback",
        "Chart preview unavailable. Connect to the internet or serve the page so Chart.js can load."
      );
      holder.appendChild(fallback);
    }
    return null;
  }

  const c = themeColors();
  const ctx = canvas.getContext("2d");

  const grad = (color) => {
    const g = ctx.createLinearGradient(0, 0, 0, canvas.height || 180);
    g.addColorStop(0, color + "cc");
    g.addColorStop(1, color + "10");
    return g;
  };

  const baseScales = {
    x: { grid: { color: c.grid }, ticks: { color: c.text, font: { size: 10 } } },
    y: {
      grid: { color: c.grid },
      ticks: { color: c.text, font: { size: 10 } },
      beginAtZero: true,
    },
  };
  const palette = [c.accent, c.accent2, "#f97316", "#14b8a6", "#84cc16", "#eab308"];

  let config;
  if (spec.type === "line") {
    const lineScales = spec.dualAxis
      ? {
          x: baseScales.x,
          y: {
            ...baseScales.y,
            title: { display: true, text: spec.series[0]?.label || "", color: c.text },
          },
          y1: {
            ...baseScales.y,
            position: "right",
            grid: { drawOnChartArea: false, color: c.grid },
            title: { display: true, text: spec.series[1]?.label || "", color: c.text },
          },
        }
      : baseScales;
    config = {
      type: "line",
      data: {
        labels: spec.labels,
        datasets: spec.series.map((s, i) => ({
          label: s.label,
          data: s.data,
          yAxisID: s.axis || "y",
          borderColor: palette[i % palette.length],
          backgroundColor: grad(palette[i % palette.length]),
          fill: !spec.dualAxis,
          tension: 0.4,
          borderWidth: 2,
          pointRadius: 2,
          pointBackgroundColor: palette[i % palette.length],
        })),
      },
      options: { scales: lineScales },
    };
  } else if (spec.type === "bar") {
    config = {
      type: "bar",
      data: {
        labels: spec.labels,
        datasets: spec.series.map((s, i) => ({
          label: s.label,
          data: s.data,
          backgroundColor: spec.labels.map(
            (_, j) => palette[(i + j) % palette.length] + "cc"
          ),
          borderRadius: 6,
          borderSkipped: false,
        })),
      },
      options: { scales: baseScales },
    };
  } else if (spec.type === "doughnut" || spec.type === "pie") {
    const dColors = [c.accent, c.accent2, "#f97316", "#14b8a6", "#84cc16", "#eab308"];
    config = {
      type: spec.type,
      data: {
        labels: spec.labels,
        datasets: [
          {
            data: spec.series[0].data,
            backgroundColor: spec.series[0].data.map(
              (_, i) => dColors[i % dColors.length]
            ),
            borderColor: c.surface,
            borderWidth: 2,
          },
        ],
      },
      options: {
        ...(spec.type === "doughnut" ? { cutout: "68%" } : {}),
        ...(spec.rotation != null ? { rotation: spec.rotation } : {}),
      },
    };
  } else if (spec.type === "radar") {
    config = {
      type: "radar",
      data: {
        labels: spec.labels,
        datasets: [
          {
            label: spec.label || "Proficiency",
            data: spec.values,
            borderColor: c.accent,
            backgroundColor: c.accent + "33",
            borderWidth: 2,
            pointBackgroundColor: c.accent2,
          },
        ],
      },
      options: {
        scales: {
          r: {
            angleLines: { color: c.grid },
            grid: { color: c.grid },
            pointLabels: { color: c.text, font: { size: 11 } },
            ticks: { display: false, backdropColor: "transparent" },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      },
    };
  }

  config.options = Object.assign(
    {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1100, easing: "easeOutQuart" },
      plugins: {
        legend: {
          display: spec.type !== "bar",
          position:
            spec.legendPosition ||
            (spec.type === "doughnut" || spec.type === "pie" ? "bottom" : "top"),
          labels: { color: c.text, font: { size: 10 }, boxWidth: 10 },
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: (context) => {
              if (context.chart.config.type !== "pie" && context.chart.config.type !== "doughnut") {
                return `${context.dataset.label || context.label}: ${context.formattedValue}`;
              }
              const label = context.label || "";
              const value = context.parsed;
              return `${label}: ${value}%`;
            },
          },
        },
      },
    },
    config.options
  );

  const instance = new Chart(ctx, config);
  chartInstances.push(instance);
  return instance;
}

/* Static charts that live in fixed canvases */
function buildStaticCharts() {
  const radarCanvas = $('[data-chart="skills-radar"]');
  if (radarCanvas)
    buildChart(radarCanvas, {
      type: "radar",
      labels: DATA.skills.radar.labels,
      values: DATA.skills.radar.values,
    });

  const careerCanvas = $('[data-chart="career-trend"]');
  if (careerCanvas)
    buildChart(careerCanvas, {
      type: "line",
      labels: DATA.careerTrend.labels,
      series: [
        {
          label: "Active professional experience (years)",
          data: careerTrendValues(),
        },
      ],
    });
}


/* ============================================================================
   5. INTERACTIONS
============================================================================ */
function initThemeToggle() {
  const root = document.documentElement;
  const toggle = $("#themeToggle");
  if (!toggle) return;
  const saved = localStorage.getItem("theme");
  if (saved) root.setAttribute("data-theme", saved);
  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    retheme();
  });
}

function retheme() {
  // Re-color live charts to match the new theme
  const c = themeColors();
  chartInstances.forEach((inst) => {
    const s = inst.options.scales || {};
    if (s.x) {
      s.x.grid.color = c.grid;
      s.x.ticks.color = c.text;
    }
    if (s.y) {
      s.y.grid.color = c.grid;
      s.y.ticks.color = c.text;
    }
    if (s.r) {
      s.r.grid.color = c.grid;
      s.r.angleLines.color = c.grid;
      s.r.pointLabels.color = c.text;
    }
    if (inst.options.plugins?.legend?.labels)
      inst.options.plugins.legend.labels.color = c.text;
    inst.update("none");
  });
}

function initNav() {
  const nav = $("#nav");
  const links = $$(".nav-link");
  const scrollLinks = [...links, ...$$(".hero-action-row a[href^='#']")];
  // Sticky shadow on scroll
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  });
  // Smooth scroll
  scrollLinks.forEach((a) =>
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id && id.startsWith("#")) {
        e.preventDefault();
        $(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        const navToggle = $("#navToggle");
        if (navToggle) navToggle.checked = false;
      }
    })
  );
  // Scroll-spy
  const sections = $$("section[id]");
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          links.forEach((l) =>
            l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id)
          );
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

function initTimelineProgress() {
  const timeline = $("#timeline");
  const dot = $(".timeline-progress-dot");
  if (!timeline || !dot) return;

  let ticking = false;
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const update = () => {
    const rect = timeline.getBoundingClientRect();
    const lineStart = 6;
    const lineHeight = Math.max(timeline.offsetHeight - 12, 1);
    const start = window.innerHeight * 0.7;
    const end = window.innerHeight * 0.3 - rect.height;
    const progress = clamp((start - rect.top) / (start - end), 0, 1);
    const dotY = lineStart + progress * lineHeight;

    timeline.style.setProperty("--timeline-progress", `${progress * lineHeight}px`);
    timeline.style.setProperty("--timeline-dot-y", `${dotY}px`);
    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

function initMobileCarousels() {
  $$("[data-carousel-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = $(button.dataset.carouselTarget);
      if (!target) return;
      const firstCard = target.firstElementChild;
      const gap = parseFloat(getComputedStyle(target).columnGap || "0");
      const distance = firstCard ? firstCard.getBoundingClientRect().width + gap : target.clientWidth;
      target.scrollBy({
        left: Number(button.dataset.carouselDir || 1) * distance,
        behavior: "smooth",
      });
    });
  });
}

function initCertificateModal() {
  const modal = $("#certModal");
  const image = $("#certModalImage");
  const title = $("#certModalTitle");
  if (!modal || !image || !title) return;

  const close = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    image.src = "";
    image.alt = "";
  };

  $$(".cert-card").forEach((card) => {
    card.addEventListener("click", () => {
      const cert = DATA.certifications[Number(card.dataset.certIndex)];
      if (!cert) return;
      title.textContent = cert.title;
      image.src = cert.image;
      image.alt = `${cert.title} certificate`;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    });
  });

  $$("[data-cert-close]", modal).forEach((node) => node.addEventListener("click", close));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) close();
  });
}

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function animateCount(node) {
  const target = parseFloat(node.dataset.target);
  const decimals = parseInt(node.dataset.decimals || "0", 10);
  if (prefersReduced) {
    node.textContent = target.toFixed(decimals);
    return;
  }
  const dur = 1400;
  const start = performance.now();
  function step(now) {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    node.textContent = (target * eased).toFixed(decimals);
    if (p < 1) requestAnimationFrame(step);
    else node.textContent = target.toFixed(decimals);
  }
  requestAnimationFrame(step);
}

function initReveal() {
  // Reveal panels + trigger count-ups, skill bars, and lazy charts
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const node = en.target;
        node.classList.add("in");

        $$(".count", node).forEach((n) => {
          if (n.closest(".experience-analytics-panel")) return;
          if (!n.dataset.done) {
            n.dataset.done = "1";
            animateCount(n);
          }
        });
        $$(".skill-fill", node).forEach((f) => {
          f.style.width = f.dataset.level + "%";
        });
        $$("canvas[data-chart]", node).forEach((cv) => {
          if (cv.closest(".experience-analytics-panel")) return;
          if (cv.dataset.built) return;
          const reg = chartRegistry.find((r) => r.id === cv.dataset.chart);
          if (reg) {
            cv.dataset.built = "1";
            buildChart(cv, reg.spec);
          }
        });
        obs.unobserve(node);
      });
    },
    { threshold: 0.18 }
  );
  $$(".reveal").forEach((n) => observer.observe(n));

  // Hero KPIs are above the fold — count them up immediately
  setTimeout(() => {
    $$("#heroKpis .count").forEach((n) => {
      if (!n.dataset.done) {
        n.dataset.done = "1";
        animateCount(n);
      }
    });
  }, 250);
}

/* Lightweight falling data animation */
function initBackground() {
  const canvas = $("#bg");
  if (!canvas || prefersReduced) return;
  const ctx = canvas.getContext("2d");
  const glyphs = [
    "SQL",
    "KPI",
    "BI",
    "ROI",
    "ETL",
    "AVG",
    "SUM",
    "Δ",
    "%",
    "P&L",
    "CAC",
    "CXM",
    "0",
    "1",
  ];
  let w, h, streams;
  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.min(130, Math.max(56, Math.floor(w / 13)));
    streams = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      speed: 0.55 + Math.random() * 1.35,
      size: 11 + Math.random() * 10,
      alpha: 0.18 + Math.random() * 0.38,
      glyph: glyphs[Math.floor(Math.random() * glyphs.length)],
    }));
  }
  resize();
  window.addEventListener("resize", resize);

  let raf;
  function draw() {
    const c = themeColors();
    ctx.clearRect(0, 0, w, h);
    ctx.font = "12px JetBrains Mono, monospace";
    for (const s of streams) {
      ctx.globalAlpha = s.alpha;
      ctx.fillStyle = Math.random() > 0.78 ? c.accent2 : c.accent;
      ctx.font = `${s.size}px JetBrains Mono, monospace`;
      ctx.fillText(s.glyph, s.x, s.y);
      s.y += s.speed;
      if (s.y > h + 30) {
        s.y = -30;
        s.x = Math.random() * w;
        s.glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
      }
    }
    ctx.globalAlpha = 1;
    raf = requestAnimationFrame(draw);
  }
  // Pause when tab hidden
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else raf = requestAnimationFrame(draw);
  });
  draw();
}


/* ============================================================================
   6. INIT
============================================================================ */
function init() {
  const steps = [
    renderIdentity,
    renderHeroKpis,
    renderProfile,
    renderFit,
    renderSkills,
    renderExperience,
    renderCaseStudies,
    renderDashboardGallery,
    renderVentures,
    renderCertifications,
    renderImpact,
    renderContact,
    initThemeToggle,
    initNav,
    initTimelineProgress,
    initMobileCarousels,
    initCertificateModal,
    initBackground,
    buildStaticCharts,
    initReveal,
  ];

  steps.forEach((step) => {
    try {
      step();
    } catch (error) {
      console.error(`Portfolio init step failed: ${step.name}`, error);
    }
  });

  $("#year") && ($("#year").textContent = new Date().getFullYear());
}

function hideLoader() {
  const loader = $("#loaderScreen");
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add("is-hidden");
    setTimeout(() => loader.remove(), 500);
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  init();
  hideLoader();
});
