import { useState } from "react";
import { RiDashboardFill } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu({ menu, open }) {
  const router = useRouter();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <li
        className={`text-gray-300 text-sm flex flex-items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2
                `}
        onClick={() => {
          setSubMenuOpen((current) => !current);
        }}
      >
        <span className="text-2xl block float-left">{menu.icon ? menu.icon : <RiDashboardFill />}</span>
        <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
        {menu.subMenuItems && open && <BsChevronDown className={`${subMenuOpen && "rotate-180"} self-center`} />}
      </li>
      {menu.subMenuItems && subMenuOpen && open && (
        <ul>
          {menu.subMenuItems.map((subMenuItem, index) => (
            <li
              key={index}
              className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md"
              onClick={() => router.push(subMenuItem.link)}
            >
              {subMenuItem.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
