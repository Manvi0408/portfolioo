const config = {
  title: "Manvi Yadav | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Manvi, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Manvi, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Manvi",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Manvi Yadav",
  email: "manviitnd0408@gmail.com",
  site: "https://ManviYadav.site",

  // for github stars button
  githubUsername: "Manvi0408",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/manvi-yadav-1168462a9/",
    instagram: "https://www.instagram.com/manvi0408",
    github: "https://github.com/Manvi0408",
  },
};
export { config };
