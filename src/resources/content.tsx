import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

<<<<<<< HEAD:src/app/resources/content.js
const person = {
  firstName: "Nam",
  lastName: "Vu",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Product Designer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Saigon",
  languages: ["English", "Vietnamese"],
};

const newsletter = {
  display: false,
=======
const person: Person = {
  firstName: "Selene",
  lastName: "Yu",
  name: `Selene Yu`,
  role: "Design Engineer",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
>>>>>>> upstream/main:src/resources/content.tsx
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

<<<<<<< HEAD:src/app/resources/content.js
const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vnt87",
=======
const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
>>>>>>> upstream/main:src/resources/content.tsx
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
<<<<<<< HEAD:src/app/resources/content.js
    link: "https://www.linkedin.com/in/vunam/",
=======
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
>>>>>>> upstream/main:src/resources/content.tsx
  },
  {
    name: "Email",
    icon: "email",
<<<<<<< HEAD:src/app/resources/content.js
    link: "mailto:contact@namvu.net",
=======
    link: `mailto:${person.email}`,
>>>>>>> upstream/main:src/resources/content.tsx
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
<<<<<<< HEAD:src/app/resources/content.js
  headline: <>Principal UI Designer & Design Leader</>,
  subline: (
    <>
      I'm Nam, a Hanoi based Product Designer with over a decade of experience crafting intuitive
      <br /> user experiences and interfaces.
=======
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
>>>>>>> upstream/main:src/resources/content.tsx
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Nam is a Hanoi-based Product Designer with over a decade of experience in transforming complex challenges
        into simple, elegant design solutions. His work spans digital interfaces, game UI, and graphic design,
        with a strong focus on creating intuitive and engaging user experiences.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "NashTech Global",
        timeframe: "2018 - Present",
        role: "Principal UI Designer",
        achievements: [
          <>
            Leading UI/UX design initiatives and establishing design standards across multiple projects
          </>,
          <>
            Mentoring and guiding design teams to deliver high-quality user experiences
          </>,
        ],
        images: [],
      },
      {
        company: "DeNA Co., Ltd.",
        timeframe: "2014 - 2018",
        role: "Lead Game UI Artist",
        achievements: [
          <>
            Led the UI/UX design for multiple game projects
          </>,
          <>
            Created engaging and intuitive game interfaces that enhanced player experience
          </>,
        ],
        images: [],
      },
      {
        company: "Fifth iMedia",
        timeframe: "2012 - 2014",
        role: "Graphic Designer",
        achievements: [
          <>
            Developed creative visual solutions for various client projects
          </>,
          <>
            Collaborated with teams to deliver compelling design assets
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "School of Visual Arts",
        description: <>Studied Visual Narratives (2011)</>,
      },
      {
        name: "La Trobe University",
        description: <>Bachelor's degree in Business Administration (2008)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
<<<<<<< HEAD:src/app/resources/content.js
        title: "UI Design",
        description: <>Extensive experience in UI design for web, mobile, and game interfaces with focus on user experience and accessibility.</>,
        images: [],
      },
      {
        title: "Design Leadership",
        description: <>Leading design teams and establishing design systems and standards across multiple projects.</>,
        images: [],
      },
      {
        title: "Game UI",
        description: <>Expert in creating engaging and intuitive game interfaces with experience at DeNA Co., Ltd.</>,
        images: [],
      },
=======
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },  
>>>>>>> upstream/main:src/resources/content.tsx
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
