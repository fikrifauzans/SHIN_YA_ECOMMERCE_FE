import { memo } from "react";
import styles from "./Header.module.css";

const HeaderMemo = () => {
  return (
    <header className="bg-white py-xl px-3xl">
      <div className="w-full flex justify-between items-center gap-xl">
        <div className="flex gap-xl items-center basis-2/3">
          <h1 className="font-bold text-nowrap">ShinYA Commerce</h1>
          <div className="border py-sm px-lg flex items-center rounded-md w-1/2">
            <i className="bx bx-search text-secondary"></i>
            <input
              className={styles["shin-searchbox"]}
              placeholder="Cari produk disini"
            />
          </div>
        </div>
        <nav className="flex gap-2xl">
          <a className="flex items-center gap-sm" href="">
            <i className="bx bx-home" />
            Home
          </a>
          <a className="flex items-center gap-sm" href="">
            <i className="bx bx-cart-alt" /> Cart
          </a>
          <a className="bg-primary px-lg py-sm text-white rounded" href="">
            Download Aplikasi
          </a>
        </nav>
      </div>
    </header>
  );
};

export const Header = memo(HeaderMemo)
