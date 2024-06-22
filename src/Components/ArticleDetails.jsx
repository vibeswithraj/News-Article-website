import { Divider, Skeleton } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import articleContext from "../Contexts/ArticleProvider";
import { GoArrowLeft } from "react-icons/go";

const ArticleDetails = () => {
  const { id } = useParams();
  const { allData, articleDetails, setArticleDetails } =
    useContext(articleContext);

  useEffect(() => {
    const handleOnClick = async () => {
      const articleData = await allData.find((item) =>
        item?.source.id ? item?.source.id === id : item?.source.name === id
      );
      setArticleDetails(articleData);
    };
    handleOnClick();
  }, [id]);

  return (
    <div className="w-full min-h-screen h-auto relative bg-[#E5E5E5] pb-10">
      <Link
        to={`/home`}
        title="back"
        className="w-fit h-fit absolute top-5 flex items-center gap-2 left-5 z-10 text-white"
      >
        <GoArrowLeft size={25} /> <span>back</span>
      </Link>
      <div className="w-full h-[410px] bg-slate-800 absolute top-0 left-0 z-0"></div>
      <div className="w-full h-auto flex justify-center">
        <div className="w-[60%] h-auto mt-[100px] z-10">
          <h1 className="w-fit h-auto text-4xl text-white text-center font-bold mb-7 font-serif px-5 leading-snug">
            {articleDetails?.title}
          </h1>
          <div className="w-full h-auto">
            {articleDetails?.urlToImage ? (
              <img
                src={articleDetails?.urlToImage || ""}
                alt="image"
                width={"100%"}
                height={423}
                className="w-full h-[423px] shrink-0 object-cover"
              />
            ) : (
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={"100%"}
                height={423}
              />
            )}
            <div className="w-full h-auto mt-5 bg-[#E5E5E5]">
              <span className="w-fit h-fit text-gray-800 flex gap-4 text-base">
                <span className="w-fit h-fit text-black">
                  {articleDetails?.publishedAt?.split("T")[0]}
                </span>
                <Divider
                  orientation="vertical"
                  className="bg-gray-600 w-[1.04px]"
                  flexItem
                />
                {"By " + articleDetails?.author}
              </span>
              <p className="w-full h-auto text-black text-lg font-sans leading-9 mt-5 mb-5">
                {articleDetails?.description}
              </p>
              <p className="w-full h-auto text-black text-lg font-sans leading-9 mt-5 mb-5">
                {articleDetails?.content}
              </p>
              <span className="text-base font-medium">
                Link:{" "}
                <Link
                  to={articleDetails?.url}
                  target="_blank"
                  className="text-blue-500 font-normal"
                >
                  {articleDetails?.url}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
