import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { postAction } from "../Redux/Actions/userAction";
import Spinner from "./Spinner";

const Post = () => {
  const postData = useSelector((state) => state.post);
  const post = postData?.post;
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 12;
  const pageVisited = pageNumber * productPerPage;
  const pageCount = Math.ceil(post?.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  console.log(postData);

  useEffect(() => {
    dispatch(postAction);
  }, []);

  return (
    <>
      {postData?.loading ? (
        <Spinner />
      ) : (
        <div className="post-container">
          <div className="post-card-container">
            {post
              ?.slice(pageVisited, pageVisited + productPerPage)
              ?.map((item) => {
                return (
                  <div className="post" key={item.id}>
                    <div className="post-title">{item.title}</div>
                    <div dangerouslySetInnerHTML={{ __html: item.body }} />
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

export default Post;
