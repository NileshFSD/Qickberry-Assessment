import React, { useEffect, useState } from "react";
import { photosAction } from "../Redux/Actions/userAction";
import ReactPaginate from "react-paginate";
import Spinner from "./Spinner";

import { useDispatch, useSelector } from "react-redux";

const Picture = () => {
  const photosData = useSelector((state) => state.photos);
  const photos = photosData?.photos;
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 12;
  const pageVisited = pageNumber * productPerPage;
  const pageCount = Math.ceil(photos?.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(photosAction);
  }, []);
  return (
    <>
      {photosData?.loading ? (
        <Spinner />
      ) : (
        <div className="photo-container">
          <div className="photo-card-container">
            {photos
              ?.slice(pageVisited, pageVisited + productPerPage)
              .map((item) => {
                return (
                  <div className="photo-card" key={item?.id}>
                    <div className="photo">
                      <img src={item.url} alt="pic" />
                    </div>
                    <div className="photo-title"> {item.title}</div>
                  </div>
                );
              })}
          </div>
          <ReactPaginate
            previousLabel={`Previous`}
            nextLabel={`Next`}
            breakLabel={`...`}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            onPageChange={changePage}
            containerClassName="pagination"
            pageClassName="page-items"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            activeClassName="active"
          />
        </div>
      )}
    </>
  );
};

export default Picture;
