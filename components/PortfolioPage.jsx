"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import {
  ArrowRight,
  Briefcase,
  Code2,
  Database,
  Github,
  Globe,
  Linkedin,
  Lock,
  Menu,
  Network,
  Shield,
  Smartphone,
  Sparkles,
  X
} from "lucide-react";

function WhatsAppIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "value", label: "Value" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" }
];

const skills = [
  {
    category: "Networking",
    icon: Network,
    items: [
      { name: "Enterprise Networking", level: 92 },
      { name: "Infrastructure Design", level: 88 },
      { name: "Troubleshooting", level: 90 }
    ]
  },
  {
    category: "Development",
    icon: Code2,
    items: [
      { name: "Web Development", level: 87 },
      { name: "Flutter Mobile Apps", level: 83 },
      { name: "System Integrations", level: 81 }
    ],
    extendedStack: [
      "Next.js",
      "Tailwind CSS",
      "React",
      "Framer Motion",
      "Node API",
      "PostgreSQL",
      "REST API",
      "CMS",
      "SEO"
    ]
  },
  {
    category: "Cybersecurity",
    icon: Shield,
    items: [
      { name: "Network Security", level: 86 },
      { name: "Risk Awareness", level: 84 },
      { name: "Hardening & Monitoring", level: 80 }
    ]
  },
  {
    category: "Databases",
    icon: Database,
    items: [
      { name: "SQL & Data Modeling", level: 88 },
      { name: "Optimization", level: 82 },
      { name: "Data Integrity", level: 86 }
    ]
  }
];

const projects = [
  {
    title: "Swati Travel and Tours",
    domain: "swatitravelandtours",
    description:
      "Experience-centric travel website with destination storytelling, booking inquiries, and conversion-first UX.",
    stack: ["Framer Motion", "CMS", "Email Integration"],
    websiteUrl: "https://swatitravelandtours.com",
    demoUrl: "https://swatitravelandtours.com",
    previewImage: "/images/project-swatitravelandtours.png",
    demoType: "image"
  },
  {
    title: "Umsebenti",
    domain: "umsebenti",
    description:
      "Job and opportunity-focused platform built to simplify discovery, engagement, and user actions at scale.",
    stack: ["Next.js", "PostgreSQL", "REST API", "Cloud Deployment"],
    websiteUrl: "https://umsebenti.com",
    demoUrl: "https://umsebenti.com",
    previewImage: "/images/project-umsebenti.png",
    demoType: "image"
  },
  {
    title: "Bentoks Investment",
    domain: "bentoks",
    description:
      "Promotional and branding website for promotional large format printing service offering",
    stack: ["HTML", "CSS5", "JAVASCRIPT", "REST API", "Cloud Deployment"],
    websiteUrl: "https://bentoks.vercel.app",
    demoUrl: "https://bentoks.vercel.app",
    previewImage: "/images/project-bentoks.png",
    demoType: "image"
  }
];

const services = [
  {
    title: "Web Development",
    icon: Globe,
    description:
      "Premium, conversion-focused websites and web apps engineered for performance, trust, and growth."
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description:
      "Cross-platform Flutter apps designed for intuitive UX, fast delivery, and business outcomes."
  },
  {
    title: "Network Setup & Security",
    icon: Lock,
    description:
      "Secure, reliable network architecture with proactive protection and resilient configurations."
  },
  {
    title: "Database Optimization",
    icon: Database,
    description:
      "Data architecture, tuning, and query optimization for speed, consistency, and scalability."
  }
];

const valueProps = [
  "Build scalable web and mobile applications",
  "Secure systems and business-critical networks",
  "Optimize databases for performance and reliability",
  "Automate repetitive workflows and processes"
];

const whyHire = [
  "Fast learner with modern tooling adaptability",
  "Multi-disciplinary technical skillset",
  "Strong business + technical perspective",
  "Results-driven delivery mindset"
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-1 text-xs uppercase tracking-[0.22em] text-cream/70">
        <Sparkles size={14} /> {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight text-cream md:text-4xl">{title}</h2>
      <p className="mt-4 text-sm text-cream/70 md:text-base">{description}</p>
    </motion.div>
  );
}

function SkillCard({ skill, delay }) {
  const Icon = skill.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay }}
      className="glass rounded-2xl p-6 shadow-card"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-xl border border-cream/20 bg-cream/5 p-2 text-cream">
          <Icon size={18} />
        </div>
        <h3 className="text-lg font-semibold text-cream">{skill.category}</h3>
      </div>
      <div className="space-y-4">
        {skill.items.map((item) => (
          <div key={item.name}>
            <div className="mb-2 flex items-center justify-between text-sm text-cream/80">
              <span>{item.name}</span>
              <span>{item.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-cream/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="h-full rounded-full bg-gradient-to-r from-[#8AB4FF] via-[#5e93ff] to-cream"
              />
            </div>
          </div>
        ))}
      </div>

      {skill.extendedStack?.length ? (
        <details className="mt-5 rounded-xl border border-cream/15 bg-[#10233f]/55 p-3">
          <summary className="cursor-pointer list-none text-sm font-medium text-cream/85">
            Expand Development Stack
          </summary>
          <div className="mt-3 flex flex-wrap gap-2">
            {skill.extendedStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cream/20 bg-cream/5 px-3 py-1 text-xs text-cream/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </details>
      ) : null}
    </motion.article>
  );
}

function ProjectCard({ project, onDemoOpen, delay }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay }}
      className="group relative overflow-hidden rounded-2xl border border-cream/15 bg-[#0c213f]/70 p-5 shadow-card"
    >
      <div className="relative mb-5 h-40 overflow-hidden rounded-xl border border-cream/15 bg-gradient-to-br from-[#173968] to-[#0c1f39]">
        <img
          src={project.previewImage}
          alt={`${project.title} homepage preview`}
          className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.04]"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071225]/65 via-transparent to-transparent" />
        <div className="absolute bottom-2 left-2 rounded-md border border-cream/25 bg-[#08162b]/80 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-cream/75">
          Live Homepage Preview
        </div>
      </div>

      <p className="mb-2 text-xs uppercase tracking-[0.24em] text-cream/60">{project.domain}</p>
      <h3 className="text-xl font-semibold text-cream">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-cream/75">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full border border-cream/20 px-3 py-1 text-xs text-cream/80">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onDemoOpen(project)}
          className="inline-flex items-center gap-2 rounded-lg bg-cream px-4 py-2 text-sm font-semibold text-[#0A192F] transition hover:opacity-90"
        >
          View Demo <ArrowRight size={14} />
        </button>
        <a
          href={project.websiteUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-cream/25 px-4 py-2 text-sm text-cream transition hover:border-cream/50 hover:bg-cream/5"
        >
          Visit Website <Globe size={14} />
        </a>
      </div>
    </motion.article>
  );
}

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "", service: "" });
  const [submitState, setSubmitState] = useState({ loading: false, message: "", error: false });

  const heroWords = useMemo(
    () => [
      "I build scalable digital solutions",
      "I engineer secure modern systems",
      "I turn business needs into impact"
    ],
    []
  );

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % heroWords.length);
    }, 2600);

    return () => clearInterval(timer);
  }, [heroWords.length]);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitState({ loading: true, message: "", error: false });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setSubmitState({ loading: false, message: data.message, error: false });
      setFormState({ name: "", email: "", message: "", service: "" });
    } catch (error) {
      setSubmitState({ loading: false, message: error.message, error: true });
    }
  }

  return (
    <main className="min-h-screen text-cream">
      <header className="sticky top-0 z-40 border-b border-cream/10 bg-[#060b14]/85 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#home" className="text-sm font-semibold uppercase tracking-[0.22em] text-cream">
            KWANELE
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm text-cream/75 transition hover:text-cream">
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-md border border-cream/20 p-2 text-cream md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="border-t border-cream/10 bg-[#091223] px-4 py-3 md:hidden"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-cream/80"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section id="home" className="relative overflow-hidden px-4 pb-16 pt-24 md:px-8 md:pb-20 md:pt-28">
        <div className="absolute inset-0 -z-10 bg-radial-tech" />
        <div className="absolute -left-20 top-12 h-52 w-52 rounded-full bg-[#4c84ff]/20 blur-3xl" />
        <div className="absolute -right-8 bottom-10 h-60 w-60 rounded-full bg-cream/10 blur-3xl" />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-1 text-xs uppercase tracking-[0.2em] text-cream/75">
              <Briefcase size={14} /> Business IT Specialist | Software Developer
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Hi, I&apos;m <span className="text-gradient">Kwanele Simelane</span>
            </h1>
            <div className="mt-5 min-h-12 text-xl font-medium text-cream/85 md:text-2xl">
              <AnimatePresence mode="wait">
                <motion.span
                  key={heroWords[wordIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="block"
                >
                  {heroWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cream/75 md:text-base">
              I help businesses and teams launch secure, scalable, and conversion-ready digital products through the perfect blend of software engineering, networking, and cybersecurity expertise.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-cream px-6 py-3 text-sm font-semibold text-[#0A192F] shadow-glow transition hover:-translate-y-0.5"
              >
                Hire Me <ArrowRight size={14} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg border border-cream/25 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream/5"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="flex items-center justify-center"
          >
            <Image
              src="/kwanele-simelane.png"
              alt="Kwanele Simelane"
              className="w-full max-w-xs rounded-2xl object-cover shadow-lg md:max-w-sm lg:max-w-md"
              priority
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-4 py-16 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow="About Me"
            title="A strategic tech partner for modern businesses"
            description="Passionate IT professional with strong expertise in networking, software development, and cybersecurity."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold">Professional Summary</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/75">
                I solve real-world business challenges through practical technology solutions — from resilient infrastructure and secure networks to high-performing web and mobile applications.
              </p>
            </motion.article>

            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              transition={{ delay: 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold">Core Soft Skills</h3>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-cream/80">
                {["Problem-solving", "Adaptability", "Team collaboration", "Analytical thinking"].map((item) => (
                  <li key={item} className="rounded-lg border border-cream/15 bg-[#10233f]/65 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </div>
      </section>

      <section id="skills" className="px-4 py-16 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow="Skills"
            title="Technical depth across critical domains"
            description="From development and mobile systems to networking, security, and data infrastructure."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((skill, index) => (
              <SkillCard key={skill.category} skill={skill} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-16 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow="Projects"
            title="Proof through execution"
            description="Selected projects built to convert users, support business goals, and deliver measurable outcomes."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                delay={index * 0.08}
                onDemoOpen={setActiveDemo}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="value" className="px-4 py-16 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-5 md:grid-cols-2">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-2xl font-semibold">What I Can Do for Your Business</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              {valueProps.map((item) => (
                <li key={item} className="rounded-lg border border-cream/15 bg-[#0f2341]/70 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            transition={{ delay: 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-2xl font-semibold">Why Hire Me?</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              {whyHire.map((item) => (
                <li key={item} className="rounded-lg border border-cream/15 bg-[#0f2341]/70 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </section>

      <section id="services" className="px-4 py-16 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow="Services"
            title="Freelance services tailored for growth"
            description="Flexible engagement options designed to ship quality outcomes quickly."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group glass rounded-2xl p-6"
                >
                  <div className="mb-4 inline-flex rounded-xl border border-cream/20 bg-cream/5 p-2 text-cream">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/75">{service.description}</p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormState((prev) => ({ ...prev, service: service.title }));
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cream transition group-hover:translate-x-1"
                  >
                    Get this service <ArrowRight size={14} />
                  </button>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-16 pt-10 md:px-8 md:pb-24">
        <div className="mx-auto grid w-full max-w-6xl gap-5 lg:grid-cols-[1fr_1.2fr]">
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-2xl font-semibold">Let&apos;s build something great together</h3>
            <p className="mt-4 text-sm text-cream/75">
              Open to freelance collaborations, contract work, and full-time opportunities where technology can drive clear business value.
            </p>

            <div className="mt-6 space-y-3 text-sm text-cream/80">
              <a href="mailto:kwanele.simelane10536@gmail.com" className="block rounded-lg border border-cream/15 px-4 py-3">
                kwanele.simelane10536@gmail.com
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/kwanele-simelane-88746727b/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-cream/15 px-4 py-2"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href="https://github.com/Simelane-tech"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-cream/15 px-4 py-2"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </motion.article>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6"
          >
            <div className="grid gap-4">
              {formState.service && (
                <div className="flex items-center justify-between rounded-lg border border-cream/20 bg-[#0d1f38]/70 px-4 py-3 text-sm text-cream">
                  <span className="text-cream/60">Service:</span>
                  <span className="font-semibold text-cream">{formState.service}</span>
                  <button
                    type="button"
                    onClick={() => setFormState((prev) => ({ ...prev, service: "" }))}
                    className="ml-3 rounded-full p-1 text-cream/50 transition hover:bg-cream/10 hover:text-cream"
                    aria-label="Remove selected service"
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
              <label className="text-sm text-cream/80">
                Name
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                  className="mt-2 w-full rounded-lg border border-cream/20 bg-[#0d1f38]/70 px-4 py-3 text-sm text-cream outline-none ring-glow/40 transition focus:ring-2"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm text-cream/80">
                Email
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                  className="mt-2 w-full rounded-lg border border-cream/20 bg-[#0d1f38]/70 px-4 py-3 text-sm text-cream outline-none ring-glow/40 transition focus:ring-2"
                  placeholder="your@email.com"
                />
              </label>
              <label className="text-sm text-cream/80">
                Message
                <textarea
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                  className="mt-2 w-full resize-none rounded-lg border border-cream/20 bg-[#0d1f38]/70 px-4 py-3 text-sm text-cream outline-none ring-glow/40 transition focus:ring-2"
                  placeholder="Tell me about your project..."
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={submitState.loading}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-cream px-6 py-3 text-sm font-semibold text-[#0A192F] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitState.loading ? "Sending..." : "Send Message"}
              <ArrowRight size={14} />
            </button>

            {submitState.message ? (
              <p
                className={`mt-4 text-sm ${
                  submitState.error ? "text-red-300" : "text-emerald-300"
                }`}
              >
                {submitState.message}
              </p>
            ) : null}
          </motion.form>
        </div>
      </section>

      <footer className="border-t border-cream/10 px-4 py-7 text-sm text-cream/65 md:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Kwanele Simelane. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {activeDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 p-4 backdrop-blur-sm md:p-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="mx-auto flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-cream/20 bg-[#071225]"
            >
              <div className="flex items-center justify-between border-b border-cream/10 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold">{activeDemo.title} Demo</p>
                  <p className="text-xs text-cream/65">Embedded live preview</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveDemo(null)}
                  className="rounded-md border border-cream/20 p-2 text-cream"
                >
                  <X size={16} />
                </button>
              </div>
              {activeDemo.demoType === "image" && (
                <div className="flex h-full w-full flex-col bg-[#0a1322]">
                  <div className="flex-1 p-3 md:p-5">
                    <div className="h-full overflow-hidden rounded-xl border border-cream/15 bg-[#0d1f38]">
                      <img
                        src={activeDemo.previewImage}
                        alt={`${activeDemo.title} preview image`}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-cream/10 px-4 py-3 text-xs text-cream/75 md:text-sm">
                    <p>
                      Live embed is restricted by the target site. Preview is shown here to keep demo in-page.
                    </p>
                    <a
                      href={activeDemo.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-cream/25 px-3 py-1.5 text-cream hover:bg-cream/10"
                    >
                      Open Live Site <Globe size={14} />
                    </a>
                  </div>
                </div>
              )}

              {activeDemo.demoType !== "image" && (
                <iframe
                  src={activeDemo.demoUrl}
                  title={`${activeDemo.title} demo`}
                  className="h-full w-full bg-white"
                  loading="lazy"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/26876931403"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-lg transition hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]"
      >
        <WhatsAppIcon size={24} />
      </a>
    </main>
  );
}
