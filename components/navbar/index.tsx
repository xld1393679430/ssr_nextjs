import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";
import Sight from "@/public/sight.jpeg";

export interface INavBarProps {}

export const NavBar: FC<INavBarProps> = () => {
  return (
    <div className={styles.navBar}>
      <Link href="/">
        <a>首页</a>
      </Link>
    </div>
  );
};
