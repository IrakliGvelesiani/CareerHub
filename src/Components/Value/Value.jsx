import React from "react";

import Logo1 from "../../assets/BrandLogos/Google.png";

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-mainBlack text-[25px] py-[2rem] pb-[3rem] font-bold w-full md:w-[600px] block">
        The Value That Holds Us True And Accountable
      </h1>
      <div className="grid gap-10 sm:gap-[10rem] md:grid-cols-3 items-center mt-[3rem]">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <span>🔍</span>
            </div>
            <span className="font-semibold text-mainBlack text-[18px]">
              Job Search and Filtering
            </span>
          </div>
          <p className="text-[13px] text-mainBlack opacity-[.7] py-[1rem] font-semibold">
            This feature allows users to search for jobs based on various
            criteria such as location, industry, job title, experience level,
            and salary range. It enables job seekers to narrow down their
            options and find relevant job listings that match their preferences.
            Advanced filtering options may include specific skills,
            qualifications, company size, and employment type (full-time,
            part-time, contract, etc.).
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#def3f8] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <span>📄</span>
            </div>
            <span className="font-semibold text-mainBlack text-[18px]">
              Resume/CV Creation and Submission
            </span>
          </div>
          <p className="text-[13px] text-mainBlack opacity-[.7] py-[1rem] font-semibold">
            A job finder portal often provides tools and templates for creating
            professional resumes or curriculum vitae (CVs). Users can input
            their educational background, work experience, skills, and other
            relevant information to generate a well-formatted resume. Once
            created, the portal allows job seekers to submit their resumes
            directly to potential employers or attach them when applying for
            specific job listings.
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-creamy p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <span>🔔</span>
            </div>
            <span className="font-semibold text-mainBlack text-[18px]">
              Alerts and Notifications
            </span>
          </div>
          <p className="text-[13px] text-mainBlack opacity-[.7] py-[1rem] font-semibold">
            This feature keeps job seekers informed about new job openings that
            match their interests and qualifications. Users can set up job
            alerts based on their preferred criteria, such as location,
            industry, or job title. The portal then sends notifications or
            emails when relevant positions become available. This ensures that
            job seekers stay updated on the latest job opportunities and can
            apply promptly
          </p>
        </div>
      </div>
      <div className="card mt-8 md:mt-10 flex flex-col md:flex-row justify-between bg-secondaryOrange p-8 md:p-10 rounded-[10px]">
        <div className="mb-4 md:mb-0">
          <h1 className="text-secondaryOrange text-3xl md:text-4xl font-bold">
            Ready to switch a career
          </h1>
          <h2 className="text-mainBlack text-2xl md:text-3xl font-bold">
            Let's Get Started!
          </h2>
        </div>
        <button className="border-2 rounded-[10px] py-2 md:py-4 px-8 md:px-10 text-lg md:text-xl font-semibold text-secondaryOrange hover:bg-creamy border-secondaryOrange">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Value;
