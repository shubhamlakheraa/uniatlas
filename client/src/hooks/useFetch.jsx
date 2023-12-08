import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error");
        }
        const data = await response.json();
        setMyData(data);
      } catch (error) {
        console.log("err");
      }
    };
    getData();
  }, [url]);

  return myData;
};

export default useFetch;
