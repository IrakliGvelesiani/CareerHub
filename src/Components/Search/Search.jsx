import React, { useState } from "react";

//Imported icons from react icons
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
const Search = () => {
  // State variables for input values
  const [jobSearch, setJobSearch] = useState("");
  const [companySearch, setCompanySearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");

  // Function to clear all search fields
  const clearAllSearchFields = () => {
    setJobSearch("");
    setCompanySearch("");
    setLocationSearch("");
  };

  return (
    <div className="searchDiv grid gap-10 bg-[#fdb581] rounded-[10px] p-[3rem]">
      <form action="">
        <div className="firstDiv flex flex-col sm:flex-row justify-between items-center rounded-[8px] gap-2 bg-white p-5 shadow-lg shadow-mainGrey-700">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-secondaryOrange focus:outline-none w-full sm:w-auto"
              placeholder="Search Job Here...."
              value={jobSearch}
              onChange={(e) => setJobSearch(e.target.value)}
            />

            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-mainBlack icon"
              onClick={() => setJobSearch("")}
            />
          </div>
          <div className="flex gap-2 items-center">
            <AiOutlineHome className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-secondaryOrange focus:outline-none w-full sm:w-auto"
              placeholder="Search By Company...."
              value={companySearch}
              onChange={(e) => setCompanySearch(e.target.value)}
            />

            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-mainBlack icon"
              onClick={() => setCompanySearch("")}
            />
          </div>
          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-secondaryOrange focus:outline-none w-full sm:w-auto"
              placeholder="Search By Location...."
              value={locationSearch}
              onChange={(e) => setLocationSearch(e.target.value)}
            />

            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-mainBlack icon"
              onClick={() => setLocationSearch("")}
            />
          </div>

          <button className="bg-mainBlack h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-[#383838]">
            Search
          </button>
        </div>
      </form>

      <div className="secDiv flex flex-col sm:flex-row items-center gap-2 sm:gap-10 justify-center">
        <div className="singleSearch flex  items-center gap-2">
          <label
            htmlFor="relevance"
            className="text-mainBlack font-semibold w-[4rem]"
          >
            Sort By:
          </label>

          <select
            name=""
            id="relevance"
            className="bg-white rounded-[3px] px-4 py-1 w-[10rem]"
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>
        <div className="singleSearch flex  items-center gap-2">
          <label
            htmlFor="type"
            className="text-mainBlack font-semibold w-[4rem]"
          >
            Type:
          </label>

          <select
            name=""
            id="type"
            className="bg-white rounded-[3px] px-4 py-1 w-[10rem]"
          >
            <option value="">Full-Time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-Time</option>
          </select>
        </div>
        <div className="singleSearch flex  items-center gap-2">
          <label
            htmlFor="level"
            className="text-mainBlack font-semibold w-[4rem]"
          >
            Level:
          </label>

          <select
            name=""
            id="level"
            className="bg-white rounded-[3px] px-4 py-1 w-[10rem]"
          >
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advanced</option>
          </select>
        </div>

        <span
          className="text-mainBlack cursor-pointer"
          onClick={clearAllSearchFields}
        >
          Clear All
        </span>
      </div>
    </div>
  );
};

export default Search;
