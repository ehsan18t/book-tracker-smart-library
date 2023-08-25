"use client";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import Navbar from "./Navbar";
import { NavItem } from "./NavItem";

const ReadyNavBar = () => {
  return (
    <Navbar>
      <NavItem to="/" name="Home" icon={AiOutlineHome} />
      <NavItem
        to="/l/admin/site/dashboard"
        name="Admin Dashboard"
        icon={RiAdminLine}
      />
      <NavItem
        to="/l/admin/site/pending-university"
        name="Pending University"
        icon={RiAdminLine}
      />
    </Navbar>
  );
};

export default ReadyNavBar;
