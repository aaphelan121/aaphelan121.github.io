/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aidan Phelan",
  title: "Hey, I'm Aidan",
  subTitle: emoji(
    "I'm a developer with a passion for data science/ML \n Experience in application development, all kinds of data mining/deep learning/data analytics, and game development."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1Z_R1NDRzsPLZrYvnV7YsLEsC2wwTAT90/edit?usp=sharing&ouid=104576478203282767405&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aaphelan121",
  linkedin: "https://www.linkedin.com/in/phelan-aidan/",
  gmail: "aidanphelan64@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Mobile developer who wants to bring together insights from both the mobile and data science world to bring value ",
  skills: [
    emoji(
      "⚡ Develop interactive front end interfaces to increase user satisfaction"
    ),
    emoji("⚡ Find insights from data using data mining, SQL, and EDA"),
    emoji(
      "⚡ Develop engaging and novel ideas with Unity"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "STATA",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Apache Spark",
      fontAwesomeClassname: "fab fa-npm"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Tennessee",
      logo: require("./assets/images/University_of_Tennessee.png"),
      subHeader: "Master of Science in Business Analytics",
      duration: "June 2021 - May 2022",
      desc: "Learned about data science and analysis and applied them to business settings",
      descBullets: [
        "Coursework includes: Regression, Multivariate Data Mining, Deep Learning, Deep Reinforcement Learning, Data Engineering",
        "In final semester, partnered with a company to help bring analytical insight into their processes"
      ]
    },
    {
      schoolName: "Rhodes College",
      logo: require("./assets/images/Rhodes_College_seal.png"),
      subHeader: "Bachelor of Arts in Economics",
      duration: "August 2017 - May 2021",
      desc: "Graduated Summa Cum Laude, minored in German Studies, focused on analytical Economics",
      descBullets: ["Relevant coursework: Econometrics I & II, Data Management, Data Visualization, Applied Regression",
                    "Wrote a research paper on the effects of sports coaching through econometric models"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science/Analysis", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Front-End/Design",
      progressPercentage: "50%"
    },
    {
      Stack: "Game Design",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Programmer/Developer",
      company: "Capgemini",
      companylogo: require("./assets/images/capgemini_logo.png"),
      date: "August 2022 – Present",
      desc: "Worked as a mobile developer in Capgemini's Digital Customer Experience, Interactive & UI practice.",
      descBullets: [
        "Developed skills in Kotlin and Flutter to create robust, scalable mobile applications",
        "Worked as a game developer in Unity, working on two different projects in an Agile team framework"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "RESEARCH & PROJECTS",
  projects: [
    {
      projectName: "Senior Seminar Research Paper",
      projectDesc: "Spent my senior year of undergrad researching and measuring the effect of Mike D'Antoni on the impact of his players",
      footerLink: [
        {
          name: "View Paper",
          url: "https://drive.google.com/file/d/157cWuv3skSMsqxsNMbG8Au-381DpS0iU/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Data Mining Report: NBA Statistics",
      projectDesc: "Wrote a report on findings from multiple data mining methods with one key question: how would analytics organize an extremely-talented NBA player pool?",
      footerLink: [
        {
          name: "View",
          url: "https://drive.google.com/file/d/17tKUHtat-ey6kFd45kCGh8GPW_g2VcFS/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "IBM Data Science Professional Certification",
      subtitle:
        "Completed a multi-course specialization created by IBM, hosted on Coursera",
      image: require("./assets/images/IBM_DS_Cert.png"),
      imageAlt: "IBM Data Science Professional Certificate Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/afb39d6f-d445-4db3-8611-22e1ccd99186/linked_in_profile"
        }
      ]
    },
    {
      title: "Google Data Analyst Certification",
      subtitle:
        "Completed a multi-course specialization created by Google, hosted on Coursera",
      image: require("./assets/images/Google_DA_Cert.png"),
      imageAlt: "Google Data Analyst Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/5f5ee2fd-8adc-412f-8f8e-205cdd58e80e/linked_in_profile"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (423)-544-5955",
  email_address: "aidanphelan64@gmail.com"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
