import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Justin Ichiro Toyomitsu',
  subtitle: 'I am a Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a UC Santa Cruz graduate of 2019 (Go Slugs!), with a B.S in Computer Science!',
  paragraphTwo: 'I have a passion for learning both front end and back end frameworks and new technologies!',
  paragraphThree: 'Fun Fact! I am fluent in Japanese and I play kendo and piano while also shooting photography and playing games as a hobby!',
  resume: 'https://docs.google.com/document/d/1yBuAce0x4sWR5DXQWvxuXhG3buxFwcBvc1U4mNwMV3c/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ichitsurume@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/ichiro.toyomitsu',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/ichigo_tiramu/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jtoyomitichiro',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/w4tson442',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
