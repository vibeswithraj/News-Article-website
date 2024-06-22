import React from "react";
import { MdOutlineChevronLeft } from "react-icons/md";

const Pagination = ({
  totalArticle,
  articlePerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pages = [];
  for (let i = 1; i < Math.ceil(totalArticle / articlePerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="w-full h-fit flex items-center justify-center gap-1 mt-10">
      <button
        className={
          currentPage === 1
            ? "w-fit h-fit p-1 rounded-full opacity-20"
            : "w-fit h-fit p-1 hover:bg-gray-200 rounded-full"
        }
        disabled={currentPage === 1 ? true : false}
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        }}
      >
        <MdOutlineChevronLeft size={25} />
      </button>
      <div className="w-fit h-fit flex items-center gap-2">
        {pages?.map((item) => (
          <span
            className={
              currentPage === item
                ? "w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 cursor-pointer"
                : "w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer"
            }
            key={item}
            onClick={() => setCurrentPage(item)}
          >
            {item}
          </span>
        ))}
      </div>
      <button
        className={
          currentPage === pages.length
            ? "w-fit h-fit p-1 opacity-10 rounded-full"
            : "w-fit h-fit p-1 hover:bg-gray-200 rounded-full"
        }
        disabled={currentPage === pages.length ? true : false}
        onClick={() => {
          if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1);
          }
        }}
      >
        <MdOutlineChevronLeft size={25} className="rotate-180" />
      </button>
    </div>
  );
};

export default Pagination;
