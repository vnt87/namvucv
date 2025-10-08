import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Nam",
  lastName: "Vu",
  name: "Nam Vu",
  role: "Product Designer",
  avatar: "/images/avatar.jpg",
  email: "contact@namvu.net",
  location: "Asia/Saigon",
  languages: ["English", "Vietnamese"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vnt87",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vunam/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Principal UI Designer & Design Leader</>,
  featured: {
    display: false,
    title: "",
    href: "",
  },
  subline: (
    <>
      I'm Nam, a Hanoi based Product Designer with over a decade of experience crafting intuitive
      <br /> user experiences and interfaces.
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
    display: false,
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
        company: "Sun* Global",
        timeframe: "2025 - Present",
        role: "Lead UI Designer",
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
        company: "NashTech Global",
        timeframe: "2018 - 2025",
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
        title: "UI Design",
        description: <>Extensive experience in UI design for web, mobile, and game interfaces with focus on user experience and accessibility.</>,
        images: [],
        tags: [],
      },
      {
        title: "Design Leadership",
        description: <>Leading design teams and establishing design systems and standards across multiple projects.</>,
        images: [],
        tags: [],
      },
      {
        title: "Game UI",
        description: <>Expert in creating engaging and intuitive game interfaces with experience at DeNA Co., Ltd.</>,
        images: [],
        tags: [],
      },
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
