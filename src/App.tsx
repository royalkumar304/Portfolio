/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  Award, 
  GraduationCap, 
  Plus,
  ChevronRight,
  Terminal,
  Layers,
  Phone,
  FileText,
  Download,
  User,
  Send,
  CheckCircle2,
  AlertCircle,
  Moon,
  Sun,
  Sparkles,
  Search,
  Menu,
  X
} from "lucide-react";
import React, { useState, useEffect, FormEvent } from "react";

const projects = [
  {
    title: "Legal LM - AI-powered legal assistant",
    description: "An intelligent document analysis pipeline achieving 80%+ accuracy with integrated risk assessment features to help users make informed legal and financial decisions.",
    tech: ["React JS", "TypeScript", "Tailwind CSS", "Google Cloud GenAI", "NLP", "Vercel"],
    link: "https://github.com/royalkumar304/LegalLm",
    date: "Aug '25 - Present",
    category: "AI"
  },
  {
    title: "RAG - Based Document Processing System",
    description: "Developed ETL data pipeline to extract and load unstructured PDF Data. Achieved retrieval accuracy and data integrity by more than 95% by building scalable data integration system.",
    tech: ["Python", "FastAPI", "FAISS", "NLTK", "PostgreSQL", "Pinecone", "Groq API", "Vector Embeddings"],
    link: "https://github.com/royalkumar304/hackrx",
    date: "Aug '25",
    category: "NLP"
  },
  {
    title: "Fit- Pathway BodyBoost Trainer",
    description: "Engineered a scalable fitness web application showcasing multiple exercises with step-by-step guidance and categories. Structured using modular components for scalability.",
    tech: ["React JS", "Modular Architecture", "State Management", "Asset Optimization"],
    link: "https://github.com/royalkumar304/myfitness",
    date: "Feb '25",
    category: "Full-stack"
  }
];

const projectCategories = ["All", "AI", "Full-stack", "NLP"];

const skills = [
  {
    category: "Cloud & Databases",
    icon: <Cloud className="w-5 h-5" />,
    items: ["AWS", "FastAPI", "Rest APIs", "MySQL", "PostgreSQL", "NLP", "Docker"]
  },
  {
    category: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    items: ["Java", "C++", "Python", "JavaScript", "TypeScript"]
  },
  {
    category: "Frameworks & Tools",
    icon: <Layers className="w-5 h-5" />,
    items: ["Git", "GitHub", "Google Cloud", "React JS", "Node JS", "TensorFlow", "Tailwind CSS"]
  },
  {
    category: "CS Fundamentals",
    icon: <Cpu className="w-5 h-5" />,
    items: ["Operating Systems", "DSA", "Computer Networks"]
  }
];

const initialCertifications = [
  { title: "Build Generative AI Apps", issuer: "Udemy", date: "Aug '25", link: "/udemy.pdf", image: "udemy.jpg", pdf: "#" },
  { title: "Fundamentals of Data Structures Using C++", issuer: "Lovely Professional University", date: "Jul '25", link: "/training.pdf", image: "tra.png", pdf: "#" },
  { title: "Fundamentals of Network Communication", issuer: "Coursera", date: "Oct '24", link: "/Fundamentals.pdf", image: "nc.png", pdf: "#" },
  { title: "The Bits and Bytes of Computer Networking", issuer: "Google (Coursera)", date: "Sep '24", link: "/Bits.pdf", image: "bits.png", pdf: "#" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp", date: "Oct '23", link: "/web.pdf", image: "res.png", pdf: "#" }
];

const achievements = [
  "Led end-to-end development of an AI legal assistant.",
  "Built a skin-disease detection system (May '25).",
  "Optimized a PDF data-processing pipeline (Jun '25).",
  "Consistently recognized for strong performance in  hackathons.",
  "Collaborated on scalable backend systems."
];

const trainings = [
  { 
    title: "Full Stack Web Development", 
    organization: "Lovely Professional University", 
    date: "Jan '24 - Jun '24", 
    description: "Intensive training on MERN stack, focusing on scalable architecture and modern frontend practices." 
  },
  { 
    title: "Generative AI & LLMs", 
    organization: "Google Cloud Training", 
    date: "May '25 - Jul '25", 
    description: "Specialized training in building RAG systems, fine-tuning models, and deploying AI agents." 
  }
];

const techDescriptions: Record<string, string> = {
  "React JS": "A JavaScript library for building user interfaces.",
  "TypeScript": "A typed superset of JavaScript that scales.",
  "Tailwind CSS": "A utility-first CSS framework for rapid UI development.",
  "Google Cloud GenAI": "Google's generative AI platform for building intelligent apps.",
  "NLP": "Natural Language Processing for human-computer interaction.",
  "Vercel": "A cloud platform for static sites and Serverless Functions.",
  "Python": "A high-level, interpreted programming language.",
  "TensorFlow": "An end-to-end open source platform for machine learning.",
  "OpenCV": "A library of programming functions for real-time computer vision.",
  "FastAPI": "A modern, fast web framework for building APIs with Python.",
  "AWS": "Amazon Web Services, a comprehensive cloud computing platform.",
  "Docker": "A platform for developing, shipping, and running applications.",
  "Modular Architecture": "Designing systems with independent, interchangeable parts.",
  "State Management": "Managing the state of an application efficiently.",
  "Asset Optimization": "Improving performance by reducing asset size.",
  "JavaScript": "The programming language of the web.",
  "Node JS": "A JavaScript runtime built on Chrome's V8 engine.",
  "MySQL": "An open-source relational database management system.",
  "PostgreSQL": "A powerful, open source object-relational database system.",
  "Java": "A high-level, class-based, object-oriented programming language.",
  "C++": "A general-purpose programming language.",
  "Git": "A distributed version control system.",
  "GitHub": "A platform for hosting and collaborating on Git repositories.",
  "Google Cloud": "A suite of cloud computing services by Google.",
  "Operating Systems": "Software that manages computer hardware and software resources.",
  "DSA": "Data Structures and Algorithms, the core of computer science.",
  "Computer Networks": "Systems that connect computers to share resources.",
};

const TechBadge: React.FC<{ tech: string; variant?: "pill" | "square" }> = ({ tech, variant = "pill" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const description = techDescriptions[tech] || "Technology used in this project.";

  const baseClasses = variant === "pill" 
    ? "text-[9px] md:text-[10px] uppercase tracking-wider font-bold px-2 md:px-3 py-1 rounded-full bg-slate-100 dark:bg-[#0f172a] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5 cursor-help transition-colors hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400"
    : "text-[10px] md:text-xs font-mono px-2 py-1 rounded bg-slate-100 dark:bg-[#0f172a]/50 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5 cursor-help transition-colors hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400";

  return (
    <div className="relative">
      <motion.span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        className={baseClasses}
      >
        {tech}
      </motion.span>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 rounded-lg bg-slate-900 dark:bg-[#0f172a] text-white text-[10px] leading-tight shadow-xl border border-slate-700 dark:border-white/10 z-50 pointer-events-none text-center"
          >
            {description}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900 dark:border-t-[#0f172a]"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [certs, setCerts] = useState(initialCertifications);
  const [newCert, setNewCert] = useState({ title: "", issuer: "", date: "", link: "", image: "", pdf: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddCert = (e: FormEvent) => {
    e.preventDefault();
    if (newCert.title && newCert.issuer) {
      setCerts([newCert, ...certs]);
      setNewCert({ title: "", issuer: "", date: "", link: "", image: "", pdf: "" });
      setIsCertModalOpen(false);
    }
  };

  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState<{ name?: string, email?: string, subject?: string, message?: string }>({});
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const validateForm = () => {
    const errors: { name?: string, email?: string, subject?: string, message?: string } = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "education", "certificates", "training", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -150 && rect.top <= 250;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadResume = () => {
    // To use your actual CV:
    // 1. Upload your CV file (e.g., 'cv.pdf') to the 'public' folder or root.
    // 2. Change the link below to point to your file.
    const cvUrl = '/royalcv.pdf'; // Path to your uploaded CV
    
    const a = document.createElement('a');
    a.href = cvUrl;
    a.download = 'Royal_Kumar_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1121] text-slate-900 dark:text-slate-200 selection:bg-blue-500/30 font-sans overflow-x-hidden transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0b1121]/80 backdrop-blur-lg border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 font-bold text-lg md:text-xl tracking-tighter"
          >
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
            <span>ROYAL</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-[#0f172a]/50 p-1 rounded-full border border-slate-200 dark:border-white/5">
            {["home", "about", "skills", "projects", "education", "certificates", "training", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeSection === item 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full glass hover:text-blue-500 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full glass text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-[#0b1121] border-b border-slate-200 dark:border-white/5 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-2">
                {["home", "about", "skills", "projects", "education", "certificates", "training", "contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all ${
                      activeSection === item 
                      ? "bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/20" 
                      : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#0f172a]"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20 grayscale dark:opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 dark:from-[#0b1121] dark:to-[#0b1121]"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl"
          >
            <h2 className="text-blue-600 dark:text-blue-500 font-mono text-[10px] md:text-sm mb-4 tracking-[0.3em] uppercase font-bold">Software Developer</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-none text-slate-900 dark:text-white">
              Building the <span className="text-gradient">Future</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-base md:text-xl mb-8 md:mb-12 leading-relaxed font-light px-4">
              I'm Royal Kumar, architecting intelligent assistants and processing complex data with cutting-edge AI technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              <a href="#about" className="group flex items-center gap-2 px-5 md:px-8 py-3 md:py-4 rounded-2xl glass hover:bg-slate-100 dark:hover:bg-[#0f172a] transition-all border-slate-200 dark:border-white/10">
                <User className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-xs md:text-base">About Me</span>
              </a>
              <button 
                onClick={handleDownloadResume}
                className="group flex items-center gap-2 px-5 md:px-8 py-3 md:py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-xl shadow-blue-600/30"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" />
                <span className="font-bold text-xs md:text-base">Download CV</span>
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500"
          >
            <ChevronRight className="w-6 h-6 rotate-90" />
          </motion.div>
        </section>

        {/* About Me Section - Centered Card Style */}
        <section id="about" className="relative py-20 md:py-32 px-4 md:px-6 flex justify-center items-center min-h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070" 
              alt="About Background" 
              className="w-full h-full object-cover opacity-5 dark:opacity-10"
              referrerPolicy="no-referrer"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-3xl w-full p-6 md:p-16 rounded-[32px] md:rounded-[40px] glass bg-white/60 dark:bg-[#0b1121]/60 border-slate-200 dark:border-white/10 text-center shadow-2xl"
          >
            {/* Circular Photo */}
            <div className="flex justify-center mb-8 md:mb-12">
              <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-500 shadow-2xl shadow-blue-500/30 animate-pulse-slow">
                <div className="w-32 h-32 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white dark:border-[#0b1121] shadow-inner">
                  <img 
                    src="/pf.jpeg" 
                    alt="Royal Kumar" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4 tracking-tighter text-slate-900 dark:text-white">I'm <span className="text-blue-600 dark:text-blue-500">Royal Kumar</span></h2>
            <h3 className="text-base md:text-2xl font-bold text-slate-600 dark:text-slate-300 mb-6 md:mb-8 uppercase tracking-widest">Full Stack Developer</h3>
            
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-xl leading-relaxed mb-8 md:mb-10 font-light">
              I am a passionate and dedicated Full Stack Developer who loves creating modern, responsive, and dynamic web applications. I enjoy working with both frontend and backend technologies to build complete solutions. I continuously explore new tools and frameworks to enhance my development skills. My focus is on writing clean, efficient, and scalable code. I aim to create user-friendly digital experiences that solve real-world problems.
            </p>

            <div className="flex justify-center">
              <a 
                href="#projects" 
                className="flex items-center gap-2 px-6 md:px-8 py-3 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all font-bold text-xs md:text-base"
              >
                <Code2 className="w-4 h-4 md:w-5 md:h-5" />
                <span>View My Work</span>
              </a>
            </div>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Skills Section */}
          <section id="skills" className="mb-20 md:mb-32">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Technical Arsenal</h2>
              <div className="h-px flex-1 bg-slate-200 dark:bg-white/5"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.03,
                    transition: { type: "spring", stiffness: 400, damping: 15 }
                  }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 md:p-6 rounded-2xl glass group hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-500 mb-4 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="font-bold mb-4 text-slate-800 dark:text-slate-100 text-sm md:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{skill.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map(item => (
                        <TechBadge key={item} tech={item} variant="square" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-20 md:mb-32">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 md:mb-12">
              <div className="flex items-center gap-4 flex-1">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Featured Projects</h2>
                <div className="h-px flex-1 bg-slate-200 dark:bg-white/5"></div>
              </div>
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 focus:border-blue-500 outline-none transition-all text-sm text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "bg-slate-100 dark:bg-[#0f172a] text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-[#1e293b]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {filteredProjects.map((project, idx) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ 
                        y: -15, 
                        scale: 1.03,
                        transition: { type: "spring", stiffness: 400, damping: 15 }
                      }}
                      viewport={{ once: true }}
                      className="group relative p-6 md:p-8 rounded-3xl glass overflow-hidden hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] dark:hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:border-blue-500/50 transition-all duration-500"
                    >
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                      
                      <div className="absolute top-0 right-0 p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20">
                          <Github className="w-3 h-3 md:w-4 md:h-4" />
                        </a>
                      </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono text-blue-600 dark:text-blue-500 uppercase tracking-widest">{project.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{project.category}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <TechBadge key={t} tech={t} />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 rounded-3xl glass border-dashed border-2 border-slate-200 dark:border-white/10"
              >
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-[#0f172a] flex items-center justify-center mx-auto mb-4 text-slate-400">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No projects found</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Try adjusting your search terms.</p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="mt-6 px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all"
                >
                  Clear Search
                </button>
              </motion.div>
            )}
          </section>

          {/* Education & Achievements */}
          <section id="education" className="mb-20 md:mb-32">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Education</h2>
              <div className="h-px flex-1 bg-slate-200 dark:bg-white/5"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="relative pl-6 md:pl-8 border-l border-slate-200 dark:border-slate-800 group"
                >
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform"></div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Lovely Professional University</h3>
                  <p className="text-blue-600 dark:text-blue-500 font-medium text-sm md:text-base">B.Tech in Computer Science and Engineering</p>
                  <p className="text-slate-500 text-xs md:text-sm mb-2">Aug '23 - Present | Phagwara, Punjab</p>
                  <div className="inline-block px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 text-xs md:text-sm">
                    CGPA: <span className="text-blue-600 dark:text-blue-400 font-bold">6.54</span>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="relative pl-6 md:pl-8 border-l border-slate-200 dark:border-slate-800 group"
                >
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-white/20 group-hover:scale-125 transition-transform"></div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Tundla Public School</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">Intermediate (Class XII)</p>
                  <p className="text-slate-500 text-xs md:text-sm">Apr '21 - Mar '22 | Percentage: 61.17%</p>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="relative pl-6 md:pl-8 border-l border-slate-200 dark:border-slate-800 group"
                >
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-white/20 group-hover:scale-125 transition-transform"></div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">O.V.M Sec school</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">High School (Class X)</p>
                  <p className="text-slate-500 text-xs md:text-sm">Apr '19 - Mar '20 | Percentile: 65.8%</p>
                </motion.div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Key Achievements</h3>
                <div className="grid grid-cols-1 gap-4">
                  {achievements.map((achievement, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex gap-3 md:gap-4 p-4 rounded-xl glass items-start hover:shadow-lg hover:shadow-emerald-500/5 transition-all"
                    >
                      <div className="mt-1 p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Certificates Section */}
          <section id="certificates" className="mb-20 md:mb-32">
            <div className="flex items-center justify-between mb-8 md:mb-12">
              <div className="flex items-center gap-4 flex-1">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Professional Certificates</h2>
                <div className="h-px flex-1 bg-slate-200 dark:bg-white/5"></div>
              </div>
              <button 
                onClick={() => setIsCertModalOpen(true)}
                className="ml-4 flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-600/20"
              >
                <Plus className="w-3 h-3" />
                <span>Add New</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {certs.map((cert, idx) => (
                <motion.div
                  key={cert.title + idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-2xl glass group hover:bg-slate-100 dark:hover:bg-[#0f172a]/80 transition-all border-slate-200 dark:border-white/5 hover:shadow-xl hover:shadow-blue-500/5 overflow-hidden"
                >
                  {cert.image && (
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">{cert.issuer}</span>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-500">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">{cert.date}</span>
                    </div>
                    <h4 className="font-bold text-sm md:text-base text-slate-800 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h4>
                    <div className="flex justify-between items-end">
                      <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold">{cert.issuer}</p>
                      <div className="flex items-center gap-2">
                        {cert.pdf && (
                          <a 
                            href={cert.pdf} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 hover:bg-emerald-500/20 transition-colors"
                            title="Download PDF"
                          >
                            <FileText className="w-3 h-3" />
                          </a>
                        )}
                        {cert.link && (
                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                          >
                            <span>View</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Add Certificate Modal */}
          <AnimatePresence>
            {isCertModalOpen && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsCertModalOpen(false)}
                  className="absolute inset-0 bg-[#0b1121]/60 backdrop-blur-sm"
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="relative w-full max-w-md p-6 md:p-8 rounded-3xl glass bg-white dark:bg-[#0b1121] border-slate-200 dark:border-white/10 shadow-2xl"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Add Certificate</h3>
                    <button onClick={() => setIsCertModalOpen(false)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-[#0f172a] transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <form onSubmit={handleAddCert} className="space-y-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Certificate Title</label>
                      <input 
                        required
                        type="text" 
                        value={newCert.title}
                        onChange={(e) => setNewCert({...newCert, title: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 focus:border-blue-500 outline-none transition-all text-sm"
                        placeholder="e.g. AWS Solutions Architect"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Issuer</label>
                      <input 
                        required
                        type="text" 
                        value={newCert.issuer}
                        onChange={(e) => setNewCert({...newCert, issuer: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 focus:border-blue-500 outline-none transition-all text-sm"
                        placeholder="e.g. Amazon Web Services"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Date</label>
                        <input 
                          type="text" 
                          value={newCert.date}
                          onChange={(e) => setNewCert({...newCert, date: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 focus:border-blue-500 outline-none transition-all text-sm"
                          placeholder="e.g. Aug '25"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Link (Optional)</label>
                        <input 
                          type="text" 
                          value={newCert.link}
                          onChange={(e) => setNewCert({...newCert, link: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 focus:border-blue-500 outline-none transition-all text-sm"
                          placeholder="https://..."
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">Image URL (Optional)</label>
                      <input 
                        type="text" 
                        value={newCert.image || ""}
                        onChange={(e) => setNewCert({...newCert, image: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 focus:border-blue-500 outline-none transition-all text-sm"
                        placeholder="https://images.unsplash.com/..."
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2">PDF Link (Optional)</label>
                      <input 
                        type="text" 
                        value={newCert.pdf || ""}
                        onChange={(e) => setNewCert({...newCert, pdf: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 focus:border-blue-500 outline-none transition-all text-sm"
                        placeholder="https://.../certificate.pdf"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-xl shadow-blue-600/20 mt-4"
                    >
                      Add Certificate
                    </button>
                  </form>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Training Section */}
          <section id="training" className="mb-20 md:mb-32">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Specialized Training</h2>
              <div className="h-px flex-1 bg-slate-200 dark:bg-white/5"></div>
            </div>
            <div className="space-y-6">
              {trainings.map((training, idx) => (
                <motion.div
                  key={training.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 8, scale: 1.01 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 md:p-8 rounded-3xl glass border-slate-200 dark:border-white/10 group hover:border-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/5"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {training.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-500 font-medium text-sm">{training.organization}</p>
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-[#0f172a] text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/5 w-fit">
                      {training.date}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                    {training.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-20 md:mb-32">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Get In Touch</h2>
              <div className="h-px flex-1 bg-slate-200 dark:bg-white/5"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 md:space-y-8"
              >
                <h3 className="text-2xl md:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white">Let's build something <span className="text-blue-600 dark:text-blue-500">extraordinary</span> together.</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-lg">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out!
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3 md:gap-4 p-4 rounded-2xl glass group hover:border-blue-500/30 transition-all cursor-pointer" onClick={() => copyToClipboard('royalkumar541@gmail.com')}>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-500 shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest">Email</p>
                      <p className="font-bold text-xs md:text-base truncate text-slate-800 dark:text-slate-200">royalkumar541@gmail.com</p>
                    </div>
                    <div className="text-blue-600 dark:text-blue-500">
                      {isCopied ? <CheckCircle2 className="w-4 h-4" /> : <Plus className="w-4 h-4 rotate-45" />}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 p-4 rounded-2xl glass">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-500 shrink-0">
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest">Phone</p>
                      <p className="font-bold text-xs md:text-base text-slate-800 dark:text-slate-200">+91-9389918244</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 rounded-3xl glass relative overflow-hidden"
              >
                <form onSubmit={handleContactSubmit} className="space-y-4 md:space-y-6 relative z-10">
                  <AnimatePresence>
                    {isSubmitting && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-20 bg-white/50 dark:bg-[#0b1121]/50 backdrop-blur-[2px] rounded-3xl flex flex-col items-center justify-center gap-4"
                      >
                        <div className="w-12 h-12 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
                        <p className="text-sm font-bold text-blue-600 dark:text-blue-400 animate-pulse">Sending your message...</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-slate-500">Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                      }}
                      placeholder="Your Name"
                      className={`w-full bg-slate-50 dark:bg-[#0f172a]/50 border rounded-xl px-4 py-2.5 md:py-3 text-sm md:text-base text-slate-900 dark:text-white focus:outline-none transition-colors ${formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-white/5 focus:border-blue-500'}`}
                    />
                    {formErrors.name && <p className="text-red-500 text-[10px] md:text-xs mt-1">{formErrors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-slate-500">Email</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                      }}
                      placeholder="your@email.com"
                      className={`w-full bg-slate-50 dark:bg-[#0f172a]/50 border rounded-xl px-4 py-2.5 md:py-3 text-sm md:text-base text-slate-900 dark:text-white focus:outline-none transition-colors ${formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-white/5 focus:border-blue-500'}`}
                    />
                    {formErrors.email && <p className="text-red-500 text-[10px] md:text-xs mt-1">{formErrors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-slate-500">Subject</label>
                    <input 
                      type="text" 
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (formErrors.subject) setFormErrors({ ...formErrors, subject: undefined });
                      }}
                      placeholder="Project Inquiry / Collaboration"
                      className={`w-full bg-slate-50 dark:bg-[#0f172a]/50 border rounded-xl px-4 py-2.5 md:py-3 text-sm md:text-base text-slate-900 dark:text-white focus:outline-none transition-colors ${formErrors.subject ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-white/5 focus:border-blue-500'}`}
                    />
                    {formErrors.subject && <p className="text-red-500 text-[10px] md:text-xs mt-1">{formErrors.subject}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-slate-500">Message</label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (formErrors.message) setFormErrors({ ...formErrors, message: undefined });
                      }}
                      placeholder="Tell me about your project..."
                      className={`w-full bg-slate-50 dark:bg-[#0f172a]/50 border rounded-xl px-4 py-2.5 md:py-3 text-sm md:text-base text-slate-900 dark:text-white focus:outline-none transition-colors resize-none ${formErrors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-white/5 focus:border-blue-500'}`}
                    />
                    {formErrors.message && <p className="text-red-500 text-[10px] md:text-xs mt-1">{formErrors.message}</p>}
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 md:py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 md:w-5 md:h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`p-3 md:p-4 rounded-xl flex items-center gap-3 ${submitStatus.type === 'success' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-500' : 'bg-red-500/10 text-red-600 dark:text-red-500'}`}
                      >
                        {submitStatus.type === 'success' ? <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" /> : <AlertCircle className="w-4 h-4 md:w-5 md:h-5" />}
                        <p className="text-xs md:text-sm font-medium">{submitStatus.message}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              </motion.div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="pt-16 md:pt-20 pb-10 border-t border-slate-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="font-bold text-lg md:text-xl tracking-tighter text-slate-900 dark:text-white">
              ROYAL<span className="text-blue-600 dark:text-blue-500">.KUMAR</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm font-medium text-slate-500">
              <a href="https://github.com/royalkumar304" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/royal-kumar78/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a>
              <a href="mailto:royalkumar541@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Email</a>
            </div>
            <div className="text-slate-400 dark:text-slate-600 text-[8px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-center">
              &copy; 2026 Royal Kumar. All Rights Reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
