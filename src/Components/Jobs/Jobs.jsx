import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import Logo1 from "../../assets/BrandLogos/Google.png";
import Logo2 from "../../assets/BrandLogos/GitHub.png";
import Logo3 from "../../assets/BrandLogos/Line.png";
import Logo4 from "../../assets/BrandLogos/Microsoft.png";
import Logo5 from "../../assets/BrandLogos/Shopify.png";
import Logo6 from "../../assets/BrandLogos/Spotify.png";
import Logo7 from "../../assets/BrandLogos/Telegram.png";
import Logo8 from "../../assets/BrandLogos/Twitter.png";
import Logo9 from "../../assets/BrandLogos/Dribbble.png";
import Logo10 from "../../assets/BrandLogos/Linkedin.png";

const Data = [
  {
    id: 1,
    image: Logo1,
    title: "Artificial Intelligence (AI) Engineer",
    time: "Now",
    location: "Tbilisi",
    desc: "Develop and implement AI algorithms and models to create intelligent systems that can analyze and process large amounts of data to make predictions and automate tasks.",
    company: "Google Inc",
  },
  {
    id: 2,
    image: Logo8,
    title: "Cybersecurity Analyst",
    time: "Now",
    location: "Tbilisi",
    desc: "Protect computer networks and systems from cyber threats by monitoring, detecting, and responding to security incidents. Conduct vulnerability assessments and implement security measures to safeguard sensitive information.",
    company: "Twitter",
  },
  {
    id: 3,
    image: Logo3,
    title: "Data Scientist",
    time: "Now",
    location: "Tbilisi",
    desc: "Analyze complex datasets to extract insights and patterns that can drive business decisions. Utilize statistical techniques, machine learning algorithms, and data visualization tools to solve real-world problems.",
    company: "Line",
  },
  {
    id: 4,
    image: Logo4,
    title: "Cloud Architect",
    time: "Now",
    location: "Tbilisi",
    desc: "Design and manage cloud-based infrastructure and services, ensuring scalability, security, and reliability. Develop cloud migration strategies and optimize cloud environments for businesses.",
    company: "Microsoft",
  },
  {
    id: 5,
    image: Logo2,
    title: "DevOps Engineer",
    time: "Now",
    location: "Tbilisi",
    desc: "Streamline software development processes by implementing continuous integration and deployment strategies. Automate infrastructure provisioning, monitor system performance, and ensure smooth collaboration between development and operations teams.",
    company: "GitHub",
  },
  {
    id: 6,
    image: Logo7,
    title: "Mobile App Developer",
    time: "Now",
    location: "Tbilisi",
    desc: "Create mobile applications for iOS or Android platforms using programming languages like Swift or Java. Design intuitive interfaces, integrate APIs and libraries, and ensure cross-device compatibility.",
    company: "Telegram",
  },
  {
    id: 7,
    image: Logo6,
    title: "Machine Learning Engineer",
    time: "Now",
    location: "Tbilisi",
    desc: "Build and deploy machine learning models and systems that can learn from data and make predictions or decisions. Develop algorithms, preprocess and analyze data, and optimize model performance for specific applications.",
    company: "Spotify",
  },
  {
    id: 8,
    image: Logo5,
    title: "UX/UI Designer",
    time: "Now",
    location: "Tbilisi",
    desc: "Design user interfaces and experiences that are visually appealing, intuitive, and user-friendly. Conduct user research, create wireframes, and collaborate with developers to deliver compelling digital products.",
    company: "Shopify",
  },
  {
    id: 9,
    image: Logo9,
    title: "Front-end Developer",
    time: "Now",
    location: "Tbilisi",
    desc: "Focus on building the user-facing components of websites and applications. Use HTML, CSS, and JavaScript to create visually appealing and interactive interfaces that enhance user experience.",
    company: "Dribbble",
  },
  {
    id: 10,
    image: Logo10,
    title: "IT Project Manager",
    time: "Now",
    location: "Tbilisi",
    desc: "Oversee and manage technology projects within an organization. Coordinate project teams, define project goals and timelines, and ensure successful implementation and delivery of technology solutions.",
    company: "Linkedin",
  },
];

const Job = () => {
  return (
    <div>
      <div className="jobsContainer flex flex-wrap justify-center gap-10 py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group item singleJob w-full md:w-[300px] p-[20px] bg-white rounded-[10px] hover:bg-secondaryOrange shadow-lg shadow-mainGrey-400/700 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-mainBlack group-hover:text-white">
                    {title}
                  </h1>
                  <span className="flex items-center text-[#ccc] gap-1">
                    <AiOutlineClockCircle /> {time}
                  </span>
                </span>
                <h6 className="text-[#ccc]">{location}</h6>

                <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                  {desc}
                </p>
                <div className="company flex items-center gap-2">
                  <img src={image} alt="Company Logo" className="w-[10%]" />
                  <span className="text-[14px] py-[1rem] block group-hover:text-white">
                    {company}
                  </span>
                </div>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-mainBlack hover:bg-white group-hover/item:text-mainBlack group-hover:text-white">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Job;
