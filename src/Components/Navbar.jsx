import React from "react";
import { Flex } from "@chakra-ui/react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

let links = [
  { path: "/gitstar/", text: "All" },
  { path: "/gitstar/html", text: "HTML" },
  { path: "/gitstar/css", text: "CSS" },
  { path: "/gitstar/javascript", text: "JavaScript" },
];

const Navbar = () => {
  return (
    <Flex justify={"space-around"} p={"10px"} align={"center"} shadow="lg">
      {links.map((link, i) => (
        <NavLink
          key={i}
          to={link.path}
          className={({ isActive }) =>
            isActive ? styles.active : styles.default
          }
        >
          {link.text}
        </NavLink>
      ))}
    </Flex>
  );
};

export default Navbar;
