// thoda zada ts ho gya idhar
// thoda zada ts ho gya idhar
export enum SkillNames {
  MACHINE_LEARNING = "machine-learning",
  NLP = "nlp",
  PYTHON = "python",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  TYPESCRIPT = "typescript",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  AWS = "aws",
  VERCEL = "vercel",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 26,
    name: "python",
    label: "Python",
    shortDescription:
      "the backbone of AI, automation, and ML workflows 🐍🤖",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  [SkillNames.AWS]: {
    id: 28,
    name: "aws",
    label: "AWS",
    shortDescription:
      "cloud infrastructure and deployment made scalable ☁️🚀",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },

  [SkillNames.VERCEL]: {
    id: 29,
    name: "vercel",
    label: "Vercel",
    shortDescription: "deploying modern web apps with zero hassle ▲✨",
    color: "#000000",
    icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
  },

  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "the drama queen of front-end frameworks, and we stan! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "utility classes hitting different fr fr 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },

  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  [SkillNames.TYPESCRIPT]: {
    id: 27,
    name: "typescript",
    label: "TypeScript",
    shortDescription:
      "JavaScript with superpowers and type safety ⚡🔷",
    color: "#3178c6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "flexin' with that NoSQL drip, respectfully! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "making your code not a whole mess, thank u next 🧹✨",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },

  [SkillNames.MACHINE_LEARNING]: {
    id: 23,
    name: "machine-learning",
    label: "Machine Learning",
    shortDescription:
      "building intelligent systems with predictive models and data-driven learning 🤖📊",
    color: "#7c3aed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  [SkillNames.NLP]: {
    id: 24,
    name: "nlp",
    label: "NLP",
    shortDescription:
      "processing and understanding human language using AI and deep learning 🧠💬",
    color: "#06b6d4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    title: "AI Intern",
    company: "AICTE",
    startDate: "June 2025",
    endDate: "Aug 2025",
    description: [
      "Worked on real-world Artificial Intelligence and Machine Learning projects focused on predictive analysis and intelligent automation.",
      "Implemented data preprocessing, feature engineering, and model evaluation techniques using Python-based ML libraries.",
      "Developed and tested machine learning models for classification and recommendation-based systems.",
      "Collaborated on AI-driven solutions involving NLP concepts, data analysis, and performance optimization.",
      "Gained hands-on experience with modern AI workflows, model training pipelines, and deployment concepts.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.MACHINE_LEARNING,
      SkillNames.NLP,
      SkillNames.TYPESCRIPT,
      SkillNames.NEXTJS,
      SkillNames.TAILWIND,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};