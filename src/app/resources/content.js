import { InlineCode } from "@/once-ui/components";

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
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
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
    link: "mailto:contact@namvu.net",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Principal UI Designer & Design Leader</>,
  subline: (
    <>
      I'm Nam, a Hanoi based Product Designer with over a decade of experience crafting intuitive
      <br /> user experiences and interfaces.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
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
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
