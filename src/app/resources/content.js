import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Nam',
    lastName:  'Vu',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Principal UI Designer',
    avatar:    '/images/avatar.jpeg',
    languages: ['English', 'Vietnamese']
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I share insights on UI/UX design, generative AI, and creating innovative digital experiences that drive results.</>
}

const social = [
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/vunam',
    },
    {
        name: 'Website',
        icon: 'globe',
        link: 'https://www.namvu.net',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:contact@namvu.net',
    }
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>UI/UX Designer and Creative Technologist</>,
    subline: <>I'm Nam, a Principal UI Designer at <InlineCode>NashTech Global</InlineCode>, specializing in creating user-centric solutions for enterprise applications and digital experiences.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Nam is a Hanoi-based UI/UX designer with a passion for crafting intuitive and engaging digital experiences. With expertise in design principles, generative AI, and creative technologies, I specialize in creating innovative solutions that enhance user satisfaction and drive results.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'NashTech Global',
                timeframe: '2018 - Present',
                role: 'Principal UI Designer',
                achievements: [
                    <>Design and optimize user interfaces for enterprise applications, improving usability and user satisfaction.</>,
                    <>Lead UI design initiatives for complex software solutions, collaborating with cross-functional teams.</>
                ],
                images: []
            },
            {
                company: 'DeNA Co. Ltd.',
                timeframe: '2014 - 2018',
                role: 'Lead Game UI Artist',
                achievements: [
                    <>Developed and maintained design systems for enterprise applications.</>,
                    <>Collaborated with development teams to ensure design implementation quality.</>
                ],
                images: []
            },
            {
                company: 'Fifth iMedia',
                timeframe: '2012 - 2014',
                role: 'Creative Graphic Designer',
                achievements: [
                    <>Created and maintained graphic assets for mobile game projects.</>,
                    <>Managed and scheduled tasks for UI team members.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Studies',
        institutions: [
            {
                name: 'School of Visual Arts',
                description: <>Studied Visual Narratives (2009-2011)</>,
            },
            {
                name: 'La Trobe University',
                description: <>Bachelor of Business Administration (2005-2008)</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical skills',
        skills: [
            {
                title: 'UI/UX Design',
                description: <>Specializing in creating user-centric solutions for apps and interfaces.</>,
                images: []
            },
            {
                title: 'Generative AI',
                description: <>Expertise in self-hosted LLMs, image creation, and creative technologies.</>,
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
