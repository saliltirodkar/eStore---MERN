import React from "react";
import { useSelector } from "react-redux";
import "./_side-nav.scss";
import accordinSlice from "../../reduxx/Accordion/accordionCatSlice";

const SideNav = () => {
  const accordinData = useSelector(accordinSlice.getInitialState);
  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>

      <div className="accordion">
        {accordinData.map((accordionCategory, key) => {
          return (
            <div className="accordion-item individual-category">
              <div className="accordion-header">
                <button
                  className="accordion-button"
                  data-bs-target={"#collapse" + key}
                  data-bs-toggle="collapse"
                >
                  <div className="category-title">
                    <a href="#">{accordionCategory.category}</a>
                  </div>
                </button>
              </div>
              <div
                className="accordion-collapse collapse show"
                id={"collapse" + key}
              >
                <div className="accordion-body">
                  <ul>
                    {accordionCategory.items.map((item) => {
                      return (
                        <li className="sub-items">
                          <a href="#">{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
