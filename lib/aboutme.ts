import { faFacebook, faLinkedin, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

export const social = {
    facebook: {
        href: "https://facebook.com/ductai199x",
        icon: faFacebook,
    },
    linkedin: {
        href: "https://linkedin.com/in/tai-duc-nguyen",
        icon: faLinkedin,
    },
    github: {
        href: "https://github.com/ductai199x",
        icon: faGithub,
    },
    gmail: {
        href: "mailto:taiducnguyen.drexel@gmail.com",
        icon: faGoogle,
    },
};

const curYear = new Date().getFullYear();
export const descriptionList = [curYear - 1998 + " years old", "PhD student", "Drexel University"];

export const shortPara =
    "Compassionate, humble, responsible, persistent and knowledgeable are the words \
people use to describe me because I have always “stayed hungry and stayed foolish”";

const python = "Python";
const c = "C";
const cpp = "C++";
const tf = "Tensorflow";
const pyt = "Pytorch";
const react = "ReactJS";
const node = "NodeJS";
const csshtml = "CSS, HTML";
const mysql = "MySql";
const java = "Java";
const js = "Javascript";
const ts = "Typescript";
const ml = "Machine Learning";
const lnx = "Linux";
const ans = "Ansible";
const bash = "Bash";

export const expList = [
    {
        role: "AI Researcher",
        where: "MISL Lab @ Drexel University",
        date: "03/20 - Present",
        tech: [python, cpp, tf, pyt],
        desc: [
            {
                task_desc: "Improved camera model source identification by designing and implementing a Constrained Convolutional Neural Network specifically tailored for extracting generic forensic traces in images.",
                type: "Publication",
                link: "https://ieeexplore.ieee.org/document/8335799",
            },
            {
                task_desc: "Researched and developed VideoFACT, the first deep learning algorithm for detecting and localizing generic content forgeries in modern videos using self-attention, forensic traces, and context.",
                type: "Publication",
                link: "https://arxiv.org/abs/2211.15775",
            },
            {
                task_desc: "Devised an algorithm to defend against puppeteering attacks on low-bandwidth AI-based videoconferencing systems.",
                type: "Publication",
                link: "Publishing soon in CVPR Workshop on Multimedia Forensics",
            },
            {
                task_desc: "Developed a novel deep learning algorithm for open-set synthetic image source attribution and detection, utilizing metric learning via ProxyNCA++ combined with information retrieval/ranking through clustering.",
                type: "Publication",
                link: "Publishing soon",
            },
            {
                task_desc: "Led and collaborated on the development and open-sourcing of a comprehensive suite of forensic tools in Python and PyTorch, designed for a wide range of tasks in both image and video forensics.",
                type: "Project",
                link: "Publishing soon on github",
            },
        ],
    },
    {
        role: "AI Researcher",
        where: "DISCO Lab @ Drexel University",
        date: "09/19 - 09/20",
        tech: [c, cpp, "CARLSim"],
        desc: [
            {
                task_desc: "Explored the inner workings of Spiking Neural Networks (SNN). Architected and demoed a gender classification machine (with SNN) using audio data. The machine’s accuracy is higher than ConvNet, while consuming 35 times less energy. Future developments are to achieve the accuracy & efficiency of the human brain.",
                type: "Project",
                link: "https://github.com/ductai199x/CARLsim4",
            },
        ],
    },
    {
        role: "DevOps Engineer",
        where: "Dell Boomi",
        date: "04/19 - 10/19",
        tech: [lnx, ans, python, bash, "Splunk", "AWS RDS, EC2, Route53"],
        desc: [
            {
                task_desc: "Automated and maintained the creation/retirement of complex cloud platforms with 75 of components in AWS.",
                type: "Project",
                link: "",
            },
            {
                task_desc: "Led the effort to built a stable, cloud-distributed monitoring security/logging solution using Splunk Enterprise.",
                type: "Project",
                link: "",
            },
            {
                task_desc: "Achieved the “Frontier Award” for creating “Smart Garage” to manage future autonomous taxies during company's annual Green Day.",
                type: "Project",
                link: "",
            },
        ],
    },
    {
        role: "AI Researcher",
        where: "Vertically Integrated Program @ Drexel University",
        tech: [python, cpp],
        date: "04/18 - 07/19",
        desc: [
            {
                task_desc: "Researched and developed intelligent communication protocols at the transport/networking layer that can tackle the “Spectrum Scarcity” problem in the field of Cognitive Radios. Introduced machine learning and optimization in the Intelligent Queueing System, Adaptive Modulation Control System, and Automative Repeat Request System.",
                type: "Project",
                link: "",
            },
        ]
    },
    {
        role: "Co-Founder and Tech Lead",
        where: "Seeds Vietnam",
        date: "01/18 - 03/19",
        tech: [python, react, node, csshtml, "Firebase"],
        desc: [
            {
                task_desc: "Created a serverless web-application for blogging on studying abroad and new technologies with subscription, authentication, email notification and real-time like/comment system using ReactJS, NodeJS and Google Firebase. Working on implementing machine learning for content recommendation and hackathon demos.",
                type: "Project",
                link: "https://github.com/ductai199x/SeedsVietnam",
            },
        ]
    },
    {
        role: "Software Engineer",
        where: "Bristol-Myers Squibb",
        date: "04/18 - 10/18",
        tech: [java, js, csshtml, bash, "JDBC", mysql],
        desc: [
            {
                task_desc: "Developed and deployed real-time global provisioning applications with AWS EC2, S3, MySql RDS, Route53, Lambda and a web-client that uses Java Spring MVC framework. The applications are used by 1000+ employees worldwide.",
                type: "Project",
                link: "",
            },
            {
                task_desc: "Supervised and assisted in patching the company’s provisioning database with dozens of connected tables and tens of millions of rows. ",
                type: "Project",
                link: "",
            },
        ]
    },
];
