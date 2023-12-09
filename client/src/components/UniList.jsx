import React, { useState, useEffect } from "react";
import usaflag from "../assets/united-states.png";
import abflag from "../assets/antigua-and-barbuda.png";
import useFetch from "../hooks/useFetch";

const UniversityList = () => {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [country, setCountry] = useState("");
  const [totalUniversities, setTotalUniversities] = useState(0);
  const [maxUniversities, setMaxUniversities] = useState({});
  const [minUniversities, setMinUniversities] = useState({});
  const [toggleButton, setToggleButton] = useState(false);
  const [toggleButton2, setToggleButton2] = useState(false);
  const [secondMinUniversities, setSecondMinUniversities] = useState({});

  const data = useFetch("https://universities.hipolabs.com/search");

  useEffect(() => {
    if(data){
      setUniversities(data);
      setFilteredUniversities(data);
    }
   
  }, [data]);

  const handleSearch = (e) => {
    const searchCountry = e.target.value.toLowerCase();
    setCountry(searchCountry);

    const filtered = universities.filter((uni) =>
      uni.country.toLowerCase().includes(searchCountry)
    );
    setFilteredUniversities(filtered);
    setTotalUniversities(filtered.length);
  };

  const handleHighest = () => {
    const countries = universities.reduce((acc, uni) => {
      acc[uni.country] = (acc[uni.country] || 0) + 1;
      return acc;
    }, {});

    const highest = Object.entries(countries).reduce((a, b) =>
      a[1] > b[1] ? a : b
    );
    setMaxUniversities({ country: highest[0], count: highest[1] });
    setToggleButton(true);
  };

  const handleLowest = () => {
    const countries = universities.reduce((acc, uni) => {
      acc[uni.country] = (acc[uni.country] || 0) + 1;
      return acc;
    }, {});

    const lowest = Object.entries(countries).reduce((a, b) =>
      a[1] < b[1] ? a : b
    );
    let secondLowest = { country: "", count: Infinity };

    Object.entries(countries).forEach(([country, count]) => {
      if (count < secondLowest.count && count !== lowest[1]) {
        secondLowest = { country, count };
      }
    });

    setSecondMinUniversities(secondLowest);
    setMinUniversities({ country: lowest[0], count: lowest[1] });

    setToggleButton2(true);
  };


  let myList = null

  if(data){
    myList = filteredUniversities.map((uni, index) => (
      <div
        key={index}
        className="flex items-center pl-[2rem] my-[2rem] "
      >
        <div className=" mr-5">
          <span>{index + 1}.</span>
          <p className="w-[25rem] inline p-2">{uni.name}</p>
          <p className=" w-[25rem]  text-gray-300 cursor-pointer hover:underline  ">
            {uni.web_pages}
          </p>
        </div>

        <p className="text- text-gray-500">{uni.country}</p>
      </div>
    ))
  }
  else{
    myList = <h1 className="ml-4 mt-5">Loading...</h1>
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <h1
          className="text-5xl font-outfit font-bold text-center mt-[3rem] mb-3 bg-2  inline-block bg-gradient-45 bg-clip-text text-transparent  
            animate-[gradientPan_linear_infinite_2s] 
                bg-repeat-x "
        >
          UniAtlas
        </h1>
      </div>

      <p className="text-center font-outfit text-gray-300 ">
        Your Global University Navigator - Explore universities <br />
        worldwide at your fingertips.
      </p>

      <div className="flex items-center justify-center">
        <div className="w-[35%] mt-[2rem] pl-[2rem] mb-5">
          <p className="font-outfit text-gray-300 ">
            Do you know which country has Most number of Universities ?
          </p>
          <div className="flex items-center justify-center mt-3">
            {toggleButton ? (
              <>
                <img src={usaflag} width={20} className="mr-2" />
                <p className="font-outfit font-medium">
                  {maxUniversities.country}{" "}
                </p>
                <p className="font-outfit font-medium ml-2 text-gray-400 ">
                  ({maxUniversities.count})
                </p>
              </>
            ) : (
              <button
                onClick={handleHighest}
                className="font-outfit px-[2rem] py-[0.5rem] rounded-xl bg-blue-600"
              >
                Click to Know
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-[35%] mt-[2rem] pl-[2rem] mb-5 ">
          <p className="font-outfit text-gray-300 ">
            Do you which know country has Least number of Universities ?
          </p>
          <div className="flex items-center justify-center mt-3">
            {toggleButton2 ? (
              <>
                <img src={abflag} width={20} className="mr-2" />
                <p className="font-outfit font-medium">Antigua and Barbuda</p>
                <p className="font-outfit font-medium ml-2 text-gray-400 ">
                  (2)
                </p>
              </>
            ) : (
              <button
                onClick={handleLowest}
                className="font-outfit px-[2rem] py-[0.5rem] rounded-xl bg-blue-600"
              >
                Click to Know
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="font-outfit ">
        <p className="ml-4 text-gray-300">
          Total Universities {country ? "in " + country.toUpperCase() : ""} :{" "}
          {totalUniversities ? totalUniversities : 9949}
        </p>

        <div className="ml-2 mt-5">
          <input
            className="h-[40px] rounded-xl placeholder:text-center bg-gray-500 p-5  placeholder:text-white"
            type="text"
            placeholder="Search by country"
            onChange={handleSearch}
            value={country}
          />
        </div>
        <div>
          {/* {filteredUniversities
            ? filteredUniversities.map((uni, index) => (
                <div
                  key={index}
                  className="flex items-center pl-[2rem] my-[2rem] "
                >
                  <div className=" mr-5">
                    <span>{index + 1}.</span>
                    <p className="w-[25rem] inline p-2">{uni.name}</p>
                    <p className=" w-[25rem]  text-gray-300 cursor-pointer hover:underline  ">
                      {uni.web_pages}
                    </p>
                  </div>

                  <p className="text- text-gray-500">{uni.country}</p>
                </div>
              ))
            : "Loading..."} */}
            {myList}
        </div>
      </div>
    </>
  );
};

export default UniversityList;
