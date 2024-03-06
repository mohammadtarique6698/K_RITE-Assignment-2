import SideBar from "./Components/Sidebar";
import Content from "./Components/Main Section/Content";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("productdetail.json");
    const data = await response.json();
    //console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="mx-2 md:mx-4 my-2 md:my-4">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3 h-full">
            <SideBar />
          </div>
          <div className="col-span-9 h-full">
            <Content data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

/* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import SideBar from "./Components/Sidebar";
// import Content from "./Components/Main Section/Content";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoClose } from "react-icons/io5";

// const App = () => {
//   const [data, setData] = useState([]);
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const fetchData = async () => {
//     const response = await fetch("productdetail.json");
//     const data = await response.json();
//     setData(data);
//   };

//   useEffect(() => {
//     fetchData();

//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };

//   return (
//     <div className="w-full h-full">
//       <div className="mx-2 my-2">
//         {windowWidth < 1615 ? (
//           <div className="grid grid-cols-12">
//             {/* Hamburger menu button */}
//             <div className="col-span-1">
//               <button className="top-2 left-2" onClick={toggleSidebar}>
//                 {showSidebar ? <IoClose /> : <GiHamburgerMenu />}
//               </button>
//             </div>

//             {/* Content */}
//             <div className="col-span-11 relative">
//               <Content data={data} />
//               {/* Sidebar overlay */}
//               {showSidebar && (
//                 <div className="fixed top-0 left-0 w-1/3 h-full bg-white z-50 overflow-y-auto">
//                   <SideBar />
//                   {/* Close button */}
//                   <button
//                     className="absolute top-1 right-0"
//                     onClick={toggleSidebar}
//                   >
//                     <IoClose />
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         ) : (
//           <div className="mx-2 my-2 grid grid-cols-12 gap-5">
//             <div className="col-span-3">
//               {/* Sidebar */}
//               <SideBar />
//             </div>
//             <div className="col-span-9">
//               {/* Content */}
//               <Content data={data} />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;
