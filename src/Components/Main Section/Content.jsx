/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TopNavbar from "./TopNavBar";
import MainSectionDropdwonsAndFilters from "./MSDF.jsx";
import ShowData from "./Table.jsx";

const Content = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (searchValue) => {
    const filterData = data.filter((item) =>
      item.BrandName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filterData);
  };
  //console.log(filteredData);

  return (
    <div>
      <TopNavbar onSearch={handleSearch} />
      <MainSectionDropdwonsAndFilters data={data} />
      <ShowData data={filteredData.length > 0 ? filteredData : data} />
    </div>
  );
};

export default Content;
