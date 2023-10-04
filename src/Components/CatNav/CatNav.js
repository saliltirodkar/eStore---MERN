import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./_cat-nav.scss";
import { useEffect } from "react";
import { getCategories } from "../../reduxx/Category/action";

const CatNav = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();
  console.log(categories);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div>
      <div className="cat-nav-container container">
        <ul>
          {categories.map((category) => {
            if (category.parent_category_id === null) {
              return (
                <li className="list-items">
                  <a href="#"> {category.category}</a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default CatNav;
