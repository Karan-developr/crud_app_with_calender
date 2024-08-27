import Image from "next/image"
import Link from "next/link"
import { useContext } from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { SidebarContext } from "./SidebarContext";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";


const sidebarItems = [
    {
      name: "Users",
      href: "/",
      icon: LuUsers2,
    },
    {
      name: "Calender",
      href: "/calender",
      icon: BsCalendar2Date,
    },
  ];

export default function Sidebar(){
    
    const {isCollapsedSidebar,toggleSidebarCollapseHandler } = useContext(SidebarContext)
    return (
    <div className="sidebar__wrapper">
        <button className="btn" onClick={(toggleSidebarCollapseHandler)}>
        <MdOutlineKeyboardArrowLeft />
        </button>
        <aside className="sidebar" data-collapse={isCollapsedSidebar}>
            <div className="sidebar__top">
                <Image 
                src="/logo.jpg"
                width={80}
                height={80}
                className="sidebar__logo"
                alt="logo"
                />  
                <p className="sidebar__logo-name">
                    Asset Manager
                </p>
            </div>
            <ul className="sidebar__list">
                {sidebarItems.map(({name,href,icon:Icon})=>(
                    <li className="sidebar__item" key={name}>
                        <Link href={href} className="sidebar__link">
                            <span className="sidebar__icon">
                                <Icon />
                            </span>
                            <span className="sidebar__name">{name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    </div>
    )
}