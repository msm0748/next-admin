import { useState } from "react";
import { BsArrowLeftShort, BsSearch, BsPerson, BsFillCartFill, BsChatLeftDotsFill, BsGraphUp } from "react-icons/bs";
import Menu from "./Menu";

const Menus = [
  { title: "Dashboard", link: "/" },
  { title: "고객관리", icon: <BsPerson />, link: "/" },
  {
    title: "상품관리",
    icon: <BsFillCartFill />,
    subMenuItems: [
      { title: "상품 조회/수정", link: "/" },
      { title: "상품 등록", link: "/ProductRegister" },
      { title: "미결제 확인", link: "/" },
      { title: "배송 관리", link: "/" },
      { title: "반품 관리", link: "/" },
      { title: "교환 관리", link: "/" },
    ],
  },
  {
    title: "문의/리뷰관리",
    icon: <BsChatLeftDotsFill />,
    subMenuItems: [
      { title: "문의 관리", link: "/" },
      { title: "리뷰 관리", link: "/" },
    ],
  },
  {
    title: "통계분석",
    icon: <BsGraphUp />,
    subMenuItems: [
      { title: "매출 분석", link: "/" },
      { title: "상품 분석", link: "/" },
      { title: "접속통계", link: "/" },
    ],
  },
];

export default function Snb() {
  const [open, setOpen] = useState(true);

  return (
    <aside className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} relative duration-300`}>
      <BsArrowLeftShort
        className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen((current) => !current)}
      />
      <div className="inline-flex">
        <div className={`flex items-center rounded-md bg-light-white mt-6 px-4 ${!open ? "px-2.5" : "px-4"} py-2`}>
          <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`} />
          <input
            type="search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`}
          />
        </div>
      </div>
      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <Menu key={index} menu={menu} open={open}></Menu>
        ))}
      </ul>
    </aside>
  );
}
