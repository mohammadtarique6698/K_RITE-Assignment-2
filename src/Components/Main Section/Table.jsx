/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const Table = ({ data }) => {
  //console.log(data);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleBrandSelection = (brand) => {
    // Toggle brand selection
    setSelectedBrands((prevSelectedBrands) => {
      if (prevSelectedBrands.includes(brand)) {
        return prevSelectedBrands.filter(
          (selectedBrand) => selectedBrand !== brand
        );
      } else {
        return [...prevSelectedBrands, brand];
      }
    });
  };

  return (
    <>
      <div className="w-full mt-5 overflow-x-auto">
        <table className="table-auto w-full border-collapse rounded-md">
          <thead>
            <tr className="shadow-md">
              <th className="flex p-2" style={{ Width: "100px" }}>
                <input type="checkbox" className="mr-1" />
                Brand Name
              </th>
              <th className="p-2">Description</th>
              <th className="p-2">Members</th>
              <th className="p-2" style={{ width: "200px" }}>
                Categories
              </th>
              <th className="p-2" style={{ width: "100px" }}>
                Tags
              </th>
              <th className="p-2 text-center">Next Meeting</th>
              <th>+</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className="border-t shadow-md">
                <td className="p-2 flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    onChange={() => handleBrandSelection(item.BrandName)}
                  />
                  {item.BrandName}
                </td>
                <td className="p-2" style={{ width: "150px" }}>
                  {item.Description}
                </td>
                <td className="p-2">
                  <div className="flex">
                    {item.Members.map((member, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center"
                        style={{ marginLeft: index === 0 ? 0 : "-0.5rem" }}
                      >
                        <span className="text-sm font-bold">{member}</span>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="p-2">{item.Categories.join(", ")}</td>
                <td className="p-2">
                  <div
                    className="flex gap-2 overflow-x-hidden"
                    style={{ width: "200px" }}
                  >
                    {item.Tags.map((tag, index) => (
                      <div
                        className="px-2 flex bg-slate-200 rounded-md h-10 shadow-sm"
                        key={index}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="p-2 text-center">{item.NextMeeting}</td>
              </tr>
            ))}
            <tr>
              <td className="text-right py-5 filter drop-shadow-md text-black/50">
                {`${data.length} count`}
              </td>
              <td>
                <span className="flex items-center gap-2 p-2 text-sm justify-end text-black/50 cursor-pointer">
                  <IoAdd /> {` Add Collection`}
                </span>
              </td>
              <td>
                <span className="flex items-center gap-2 p-2 text-sm justify-end text-right text-black/50 cursor-pointer">
                  <IoAdd /> {` Add Collection`}
                </span>
              </td>
              <td>
                <span className="flex items-center gap-2 p-2 text-sm justify-end text-right text-black/50 cursor-pointer">
                  <IoAdd /> {` Add Collection`}
                </span>
              </td>
              <td>
                <span className="flex items-center gap-2 p-2 text-sm justify-end text-right text-black/50 cursor-pointer">
                  <IoAdd /> {` Add Collection`}
                </span>
              </td>
              <td>
                <span className="flex items-center gap-2 p-2 text-sm justify-end text-right text-black/50 cursor-pointer">
                  <IoAdd /> {` Add Collection`}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {selectedBrands && selectedBrands.length > 0 && (
        <div className="fixed bottom-2 w-1/2 flex justify-center">
          <div className="p-2 border rounded-md shadow-md flex items-center justify-between gap-1">
            <p>
              <span className="font-bold rounded-md p-1 bg-black text-white">{`${selectedBrands.length}`}</span>
              {"   "}
              selected
            </p>
            <button
              className="p-2 border bg-black text-white rounded-md shadow-md"
              onClick={() => console.log("Archive")}
            >
              Archive
            </button>
            <button
              className="p-2 border bg-black text-white rounded-md shadow-md"
              onClick={() => console.log("Delete")}
            >
              Delete
            </button>
            <button
              className="p-2 border bg-black text-white rounded-md shadow-md"
              onClick={() => console.log("More")}
            >
              More
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;

// <div className="w-full mt-5">
//   <div className="grid grid-cols-6 border rounded-md shadow-md p-4">
//     <div className="font-bold">Brand Name</div>
//     <div className="font-bold">Description</div>
//     <div className="font-bold">Members</div>
//     <div className="font-bold">Categories</div>
//     <div className="col-span-1 font-bold">Tags</div>
//     <div className="font-bold text-center">Next Meeting</div>
//     {data.map((item, index) => (
//       <React.Fragment key={item.id}>
//         <div className="mt-5">{item.BrandName}</div>
//         <div className="mt-5">{item.Description}</div>
//         <div className="overflow-x-auto mt-6">
//           <div className="flex">
//             <div className="relative whitespace-nowrap">
//               {item.Members.map((member, index) => (
//                 <div
//                   key={index}
//                   className="absolute w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center"
//                   style={{ left: `${index * 30}px`, zIndex: index + 1 }}
//                 >
//                   <span className="text-sm font-bold">{member}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="mt-5">{item.Categories.join(", ")}</div>
//         <div className="mt-5 flex gap-2 overflow-x-hidden">
//           {item.Tags.map((tag, index) => (
//             <div
//               className="px-2 flex bg-slate-200 rounded-md h-10 shadow-sm"
//               key={index}
//             >
//               {tag}
//             </div>
//           ))}
//         </div>
//         <div className="mt-5 text-center">{item.NextMeeting}</div>
//       </React.Fragment>
//     ))}
//   </div>
// </div>
