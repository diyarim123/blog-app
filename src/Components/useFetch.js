import React from "react";
import { useEffect, useState } from "react";


function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((response) => {
          if(!response.ok) {
            throw new Error("Failed to get Response")
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          console.log("Failed to Fetch the Data", err);
        });
    }, []);

    return {data ,setData}
}

export default useFetch;



