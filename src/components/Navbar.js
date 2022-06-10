import "../css/navbar.css";
import LinkCustom from "../Utils/LinkCustom";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
      const wrapper = document.querySelector(".wrapper");;

      window.onscroll = function () {
          scrollCe()
      };

      function scrollCe() {
          if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
              wrapper.classList.add("cek")
          }
          else {
              wrapper.classList.remove("cek")
          }
      }
  }, [])


  return (
    <div className="p-nav">
      <nav className="wrapper">
        <div className="brand">
          <div className="firstname">Kenang </div>
          <div className="lastname">Kenangan</div>
        </div>
        <div className="p-nav-2">
          <ul className="navigation">
            <div id="marker"></div>
            <LinkCustom to="" className="item-nav">Home</LinkCustom>
            <LinkCustom to="/document" className="item-nav">Document</LinkCustom>
            <LinkCustom to="/memory" className="item-nav">Memory</LinkCustom>
            <LinkCustom to="/about" className="item-nav">About</LinkCustom>
          </ul>
        </div>
      </nav>
    </div>
  )
}