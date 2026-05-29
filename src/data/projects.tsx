import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

/* ---------------- LINKS ---------------- */
const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 my-3 mb-8">
      <Link href={live} target="_blank">
        <Button>
          Visit Website <ArrowUpRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>

      {repo && (
        <Link href={repo} target="_blank">
          <Button variant="outline">
            Github <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      )}
    </div>
  );
};

/* ---------------- SKILLS ---------------- */
export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
  node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  prisma: { title: "Prisma", bg: "black", fg: "white", icon: <SiPrisma /> },
  postgres: { title: "PostgreSQL", bg: "black", fg: "white", icon: <SiPostgresql /> },
  express: { title: "Express", bg: "black", fg: "white", icon: <SiExpress /> },
  reactQuery: { title: "React Query", bg: "black", fg: "white", icon: <SiReactquery /> },
  chakra: { title: "Chakra UI", bg: "black", fg: "white", icon: <SiChakraui /> },
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  firebase: { title: "Firebase", bg: "black", fg: "white", icon: <SiFirebase /> },
  socketio: { title: "Socket.io", bg: "black", fg: "white", icon: <SiSocketdotio /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  react: { title: "React.js", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  sanity: { title: "Sanity", bg: "black", fg: "white", icon: <SiSanity /> },
  spline: { title: "Spline", bg: "black", fg: "white", icon: <SiThreedotjs /> },
  docker: { title: "Docker", bg: "black", fg: "white", icon: <SiDocker /> },
  supabase: { title: "Supabase", bg: "black", fg: "white", icon: <SiSupabase /> },
  vue: { title: "Vue.js", bg: "black", fg: "white", icon: <SiVuedotjs /> },
  framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: <TbBrandFramerMotion /> },
  aceternity: { title: "Aceternity", bg: "black", fg: "white", icon: <AceTernityLogo /> },
  mongodb: {
  title: "MongoDB",
  bg: "black",
  fg: "white",
  icon: <SiMongodb />,
},
  shadcn: { title: "Shadcn UI", bg: "black", fg: "white", icon: <SiShadcnui /> },
};
/* ---------------- PROJECT TYPE ---------------- */
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode;
  github?: string;
  live: string;
};

/* ---------------- PROJECTS ---------------- */
const projects: Project[] = [

  /* ================= BEARWAREE ================= */
  {
    id: "bearwaree",

    category: "AI-Powered Event & SaaS Platform",

    title: "BearWaree",

    src: "/assets/projects-screenshots/bearwaree/landing.png",

    screenshots: [
      "landing.png",
      "dashboard.png",
      "events.png",
      "analytics.png",
      "payments.png",
      "auth.png",
    ],

    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.react,
      ],

      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.firebase,
      ],
    },

    live: "https://bear-waree-msbb.vercel.app/",

    github: "https://github.com/Manvi0408/BearWaree",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            BearWaree = Modern AI-powered event management + SaaS platform
          </TypographyP>

          <TypographyP className="font-mono mt-4">
            BearWaree is a full-stack SaaS platform designed to manage events,
            users, analytics, and payments in a scalable and secure
            environment. It provides a modern dashboard experience with
            authentication, real-time workflows, and production-ready
            architecture.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          {/* FEATURES */}
          <TypographyH3 className="my-4 mt-8">
            ✨ Key Features
          </TypographyH3>

          <p className="font-mono mb-2">
            A production-ready event management system with authentication,
            analytics, payments, and modular architecture.
          </p>

          <ul className="font-mono list-disc ml-6 space-y-1">
            <li>🗂️ Event categorization and filtering system</li>
            <li>📅 Admin dashboard for events, users & analytics</li>
            <li>🔑 Secure authentication and session management</li>
            <li>💳 Stripe payment integration</li>
            <li>🛠️ API key generation support</li>
            <li>🔔 Real-time notifications system</li>
            <li>🎨 Fully responsive modern UI</li>
            <li>🧩 Modular scalable architecture</li>
          </ul>

          {/* LANDING */}
          <TypographyH3 className="my-4 mt-8">
            🚀 Landing Page
          </TypographyH3>

          <p className="font-mono mb-2">
            Clean modern SaaS landing page designed for scalable event
            workflows.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/bearwaree/landing.png`,
            ]}
          />

          {/* DASHBOARD */}
          <TypographyH3 className="my-4 mt-8">
            📊 Dashboard & Analytics
          </TypographyH3>

          <p className="font-mono mb-2">
            Powerful admin dashboard with analytics, event tracking, and user
            insights.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/bearwaree/dashboard.png`,
              `${BASE_PATH}/bearwaree/analytics.png`,
            ]}
          />

          {/* EVENTS */}
          <TypographyH3 className="my-4 mt-8">
            📅 Event Management
          </TypographyH3>

          <p className="font-mono mb-2">
            Create, organize, categorize, and monitor events through a modern
            management workflow.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/bearwaree/events.png`,
            ]}
          />

          {/* AUTH */}
          <TypographyH3 className="my-4 mt-8">
            🔐 Authentication
          </TypographyH3>

          <p className="font-mono mb-2">
            Secure authentication system with protected routes and session
            management.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/bearwaree/auth.png`,
            ]}
          />

          {/* PAYMENTS */}
          <TypographyH3 className="my-4 mt-8">
            💳 Payments
          </TypographyH3>

          <p className="font-mono mb-2">
            Stripe-powered billing and payment workflows for SaaS monetization.
          </p>

          <SlideShow
            images={[
              `${BASE_PATH}/bearwaree/payments.png`,
            ]}
          />

          {/* TECH STACK */}
          <TypographyH3 className="my-4 mt-8">
            ⚙️ Tech Stack
          </TypographyH3>

          <ul className="font-mono list-disc ml-6 space-y-1">
            <li>
              <b>Frontend:</b> Next.js 14, React 18, Tailwind CSS
            </li>

            <li>
              <b>Backend:</b> Node.js, Express.js, Prisma ORM
            </li>

            <li>
              <b>Database:</b> PostgreSQL
            </li>

            <li>
              <b>Payments:</b> Stripe
            </li>

            <li>
              <b>Authentication:</b> Clerk / Secure Auth System
            </li>

            <li>
              <b>Dev Tools:</b> TypeScript, PNPM, ESLint, Prettier
            </li>
          </ul>
        </div>
      );
    },
  },

  /* ================= KRISHICONNECT ================= */
  {
    id: "krishiconnect",

    category: "AI / Smart Agriculture Platform",

    title: "KrishiConnect",

    src: "/assets/projects-screenshots/krishiconnect/landing.png",

    screenshots: [
      "landing.png",
      "dashboard.png",
      "disease.png",
      "weather.png",
      "feedback.png",
    ],

    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.react,
      ],

      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.postgres,
      ],
    },

    live: "https://krishi-connect-ecru.vercel.app/",

    github: "https://github.com/Manvi0408/Krishi-connect",

    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            KrishiConnect — AI-powered Smart Agriculture Platform 🌾
          </TypographyP>

          <TypographyP className="font-mono mt-2">
            KrishiConnect is a modern agriculture platform designed to help
            farmers make smarter decisions using AI-driven disease detection,
            weather forecasting, crop insights, and interactive dashboards.
            The platform improves productivity and provides real-world digital
            solutions for modern farming.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            ✨ Key Features
          </TypographyH3>

          <ul className="font-mono list-disc ml-6 space-y-1">
            <li>🌱 AI-powered crop disease detection system</li>
            <li>📊 Smart dashboard with analytics & monitoring</li>
            <li>🌦️ Real-time weather forecasting integration</li>
            <li>🧠 AI-based farming recommendations</li>
            <li>📱 Fully responsive modern UI</li>
            <li>🔔 Farmer feedback & interaction system</li>
            <li>⚡ Fast and scalable architecture</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">
            📸 Project Preview
          </TypographyH3>

          <SlideShow
            images={[
              `${BASE_PATH}/krishiconnect/landing.png`,
              `${BASE_PATH}/krishiconnect/dashboard.png`,
              `${BASE_PATH}/krishiconnect/disease.png`,
              `${BASE_PATH}/krishiconnect/weather.png`,
              `${BASE_PATH}/krishiconnect/feedback.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            ⚙️ Tech Stack
          </TypographyH3>

          <ul className="font-mono list-disc ml-6 space-y-1">
            <li>
              <b>Frontend:</b> Next.js, React, Tailwind CSS
            </li>

            <li>
              <b>Backend:</b> Node.js, Firebase
            </li>

            <li>
              <b>Database:</b> PostgreSQL
            </li>

            <li>
              <b>AI Features:</b> Disease Detection & Smart Recommendations
            </li>

            <li>
              <b>Deployment:</b> Vercel
            </li>

            <li>
              <b>Dev Tools:</b> TypeScript, PNPM, ESLint
            </li>
          </ul>
        </div>
      );
    },
  },
  {
  id: "rakshaalert",

  category: "Women Safety / Emergency Response Platform",

  title: "RakshaAlert",

  src: "/assets/projects-screenshots/rakshaalert/landing.png",

  screenshots: [
    "landing.png",
    "login.png",
    "sosbutton.png",
  ],

  skills: {
    frontend: [
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.next,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.shadcn,
    ],

    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.mongodb,
      PROJECT_SKILLS.firebase,
      PROJECT_SKILLS.socketio,
    ],
  },

  live: "https://raksha-alert-five.vercel.app/",

  github: "https://github.com/Manvi0408/RakshaAlert",

  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          RakshaAlert — AI-powered Women Safety Platform 🚨
        </TypographyP>

        <TypographyP className="font-mono mt-4">
          RakshaAlert is a comprehensive women safety platform designed
          to provide instant emergency assistance, live location sharing,
          SOS alerts, and emergency communication features.
        </TypographyP>

        <ProjectsLinks live={this.live} repo={this.github} />

        <TypographyH3 className="my-4 mt-8">
          ✨ Key Features
        </TypographyH3>

        <ul className="font-mono list-disc ml-6 space-y-1">
          <li>🚨 One-click SOS emergency alert system</li>
          <li>📍 Real-time GPS location sharing</li>
          <li>👥 Emergency contact management system</li>
          <li>🔔 SMS notifications using Twilio integration</li>
          <li>🔐 Secure JWT authentication system</li>
          <li>📱 Responsive safety-focused UI</li>
          <li>⚡ Fast emergency response workflow</li>
        </ul>

        {/* LANDING */}
        <TypographyH3 className="my-4 mt-8">
          🚀 Landing Page
        </TypographyH3>

        <SlideShow
          images={[
            `${BASE_PATH}/rakshaalert/landing.png`,
          ]}
        />

        {/* LOGIN */}
        <TypographyH3 className="my-4 mt-8">
          🔐 Authentication System
        </TypographyH3>

        <SlideShow
          images={[
            `${BASE_PATH}/rakshaalert/login.png`,
          ]}
        />

        {/* SOS */}
        <TypographyH3 className="my-4 mt-8">
          🚨 SOS Emergency Alert
        </TypographyH3>

        <SlideShow
          images={[
            `${BASE_PATH}/rakshaalert/sosbutton.png`,
          ]}
        />

        {/* TECH STACK */}
        <TypographyH3 className="my-4 mt-8">
          ⚙️ Tech Stack
        </TypographyH3>

        <ul className="font-mono list-disc ml-6 space-y-1">
          <li>
            <b>Frontend:</b> Next.js 13, React, Tailwind CSS, Shadcn UI
          </li>

          <li>
            <b>Backend:</b> Next.js API Routes, Node.js
          </li>

          <li>
            <b>Database:</b> MongoDB with Mongoose ODM
          </li>

          <li>
            <b>Authentication:</b> JWT & bcryptjs
          </li>

          <li>
            <b>Notifications:</b> Twilio SMS Integration
          </li>

          <li>
            <b>Deployment:</b> Vercel
          </li>

          <li>
            <b>Dev Tools:</b> TypeScript, PNPM, ESLint
          </li>
        </ul>
      </div>
    );
  },
},

];

export default projects;