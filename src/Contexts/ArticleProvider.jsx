import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "./articleSlice.js";
import toast from "react-hot-toast";
const articleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [category, setCategory] = useState("business");
  const [country, setCountry] = useState({ param: "in", name: "India" });
  const [articleDetails, setArticleDetails] = useState({});
  const [allData, setAllData] = useState([]);

  const dispatch = useDispatch();
  console.log(JSON.stringify(import.meta.env.VITE_API_KEY));

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country.param.toLowerCase()}&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      if (data.totalResults === 0) {
        console.log("No results found!");
        toast.error("No results found!");
      }
      if (data.totalResults > 0) {
        dispatch(setLoading());
      }
      setAllData(data.articles);
    };
    fetchData();
  }, [category, country]);

  return (
    <articleContext.Provider
      value={{
        allData,
        setAllData,
        category,
        country,
        setCountry,
        setCategory,
        articleDetails,
        setArticleDetails,
      }}
    >
      {children}
    </articleContext.Provider>
  );
};

export default articleContext;
export { ArticleProvider };
