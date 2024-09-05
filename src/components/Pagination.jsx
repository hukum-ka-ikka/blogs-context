import React, { useCallback, useContext } from "react";
import { AppContext } from "../context/Appcontext";

const Pagination = () => {
  const { page, totalPages, setPage, handlePageChange } =
    useContext(AppContext);

  const handlePreviousClick = () => {
    handlePageChange(page - 1);
  };

  const handleNextClick = () => {
    console.log(`page ${page}`);
    handlePageChange(page + 1);
  };

  const handleChange = (event) => {
    handlePageChange(event.target.value);
  };

  return (
    <div className="flex sticky z-10 bottom-0 bg-slate-100 justify-center border-t-[1.5px] border-slate-300 h-fit">
      <div className="flex w-[50vw] justify-between items-center">
        <div className="flex gap-6 py-2">
          {(page !== 1 && totalPages !==0) && (
            <button
              onClick={handlePreviousClick}
              className="btn"
            >
              Previous
            </button>
          )}

          {(page !== totalPages && totalPages !==0) && (
            <button
              onClick={handleNextClick}
              className="btn"
            >
              Next
            </button>
          )}
        </div>
        <div className="py-2">
          <p className="font-semibold text-sm">
            Page{" "}
            <input
              value={page}
              onChange={handleChange}
              className="pl-[5px] w-[20px] border border-slate-300 rounded-md"
            />{" "}
            of <span>{totalPages===0 ? 1 : totalPages}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
