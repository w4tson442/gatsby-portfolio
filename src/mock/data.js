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
  name: 'Justin Toyomitsu',
  subtitle: 'I am a software developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 
    'Born and raised in Sothern California, I safely graduted ' +
    'the University of California Santa Cruz in 2019 with a B.S' +
    ' in Computer Science. Since then, the passion for programming' +
    ' grew and gained skills in Full Stack Development!',
  paragraphTwo: 
    'Skills include understanding languages and frameworks like' +
    ' Python/Django, PHP/Yii, Javascript/Node.js(This website), CSS/HTML5.',
  paragraphThree: 
    'Fun Fact! As a side hobby I love golf, photography and traveling. I also ' +
    ' posess skills in both piano and kendo(1st dan); 10 years each.',
  resume: 'https://docs.google.com/document/d/1yBuAce0x4sWR5DXQWvxuXhG3buxFwcBvc1U4mNwMV3c/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lamp.jpg',
    title: 'AMU Virtual Machine',
    info: 'Personal Virtual Machine use for large scale web development!',
    info2: 'Shell Script, Vagrant, Virtual Box',
    url: '',
    repo: 'https://github.com/w4tson442/AMU-virtualmachine', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'googlio.png',
    title: 'Googlio',
    info: 'Google Information Dashboard of Google Doc, Google Calendar and Gmail!',
    info2: 'Python, Django, Google API',
    url: '',
    repo: 'https://github.com/w4tson442/Googlio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gatsby.png',
    title: 'Gatsby Portfolio',
    info: 'Making a Website Portfolio!',
    info2: 'Gatsby, Netlify, Javascript/Node.js, React',
    url: 'https://justintoyo.com/',
    repo: 'https://github.com/w4tson442/gatsby-portfolio', // if no repo, the button will not show up
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
