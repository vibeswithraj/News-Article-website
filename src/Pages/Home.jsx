import React, { useContext, useState } from "react";
import "../App.css";
import articleContext from "../Contexts/ArticleProvider";
import { Skeleton } from "@mui/material";
import img from "../assets/image 43.svg";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Pagination from "../Components/Pagination";

const Home = () => {
  const { allData } = useContext(articleContext);
  const loading = useSelector((state) => state.loading);
  const loadinIndex = useSelector((state) => state.loadinIndex);
  const [currentPage, setCurrentPage] = useState(1);
  const articlePerPage = useSelector((state) => state.articlePerPage);
  const theme = useSelector((state) => state.theme);

  const lastArticleIndex = currentPage * articlePerPage;
  const firstArticleIndex = lastArticleIndex - articlePerPage;
  const currentArticle = allData?.slice(firstArticleIndex, lastArticleIndex);

  return (
    <div
      className={
        theme
          ? "w-full h-auto flex flex-col items-center justify-center bg-[#0F0F0F] text-white pt-5 pb-10 px-2 sm:px-5 md:px-10"
          : "w-full h-auto flex flex-col items-center justify-center bg-white text-black pt-5 pb-10 px-2 sm:px-5 md:px-10"
      }
    >
      <div className="w-fit h-auto flex flex-wrap items-center justify-center gap-6">
        {loading &&
          loadinIndex?.map((index) => (
            <div
              className="w-full md:w-[330px] lg:w-[438px] h-[450px] flex flex-col justify-between items-center"
              key={index}
            >
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={438}
                height={210}
                className="mb-3 w-[330px] lg:w-[438px] h-[210px]"
              />
              <Skeleton
                variant="text"
                animation="wave"
                width={438}
                height={25}
                className="w-full h-5 px-2 mb-2"
              />
              <Skeleton
                variant="text"
                animation="wave"
                width={438}
                height={25}
                className="w-full h-5 px-2 mb-2"
              />
              <Skeleton
                variant="text"
                animation="wave"
                width={438}
                height={25}
                className="w-full h-5 px-2 mb-2"
              />
              <Skeleton
                variant="text"
                animation="wave"
                width={438}
                height={25}
                className="w-full h-5 px-2"
              />
              <div className="w-full h-auto flex items-center justify-between mt-3 mb-3">
                <Skeleton
                  variant="text"
                  animation="wave"
                  width={100}
                  height={20}
                  className="px-2"
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  width={100}
                  height={20}
                  className="px-2"
                />
              </div>
            </div>
          ))}
        {!loading &&
          currentArticle
            .filter((item) =>
              !item.title ||
              !item.author ||
              !item.description ||
              !item.publishedAt ||
              !item.urlToImage
                ? !item
                : item
            )
            ?.map((item, index) => (
              <Link
                to={`/articledetail/${
                  item?.source.id ? item?.source.id : item?.source.name
                }`}
                className={`w-full md:w-[330px] lg:w-[438px] min-h-[450px] h-auto shadow ${
                  theme
                    ? `shadow-gray-600 hover:shadow-md hover:shadow-gray-600`
                    : "shadow hover:shadow-xl"
                } flex flex-col justify-between pb-2`}
                key={index}
              >
                {item.urlToImage ? (
                  <img
                    src={item?.urlToImage === null ? img : item?.urlToImage}
                    alt="img"
                    className={
                      item?.urlToImage
                        ? "w-full h-[210px] object-cover"
                        : "w-full h-[201px] object-fill"
                    }
                  />
                ) : (
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width={438}
                    height={210}
                    className="w-[330px] lg:w-[438px] h-[210px]"
                  />
                )}
                <h1
                  className={`text-lg xl:text-xl ${
                    theme ? "text-white" : "text-black"
                  } font-bold mb-2 px-1 font-sans`}
                >
                  {item?.title}
                </h1>
                <p
                  className={`text-sm xl:text-base ${
                    theme ? "text-gray-400" : "text-black"
                  }  px-1 mb-2`}
                >
                  {item?.description}
                </p>
                <div className="w-full h-fit text-xs font-meduim flex items-center justify-between px-1">
                  <span className="text-xs xl:text-sm h-auto">
                    {"By " + item?.author}
                  </span>
                  <span>{item?.publishedAt.split("T")[0]}</span>
                </div>
              </Link>
            ))}
      </div>
      <Pagination
        totalArticle={allData?.length}
        articlePerPage={articlePerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Home;
