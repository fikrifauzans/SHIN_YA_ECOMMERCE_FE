import { memo, useEffect, useState } from "react";
import LinesEllipsis from 'react-lines-ellipsis'

const LandingPageMemo = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <main className="flex gap-md items-start my-xl mx-3xl">
      <aside className="bg-white basis-2/12">
        <nav className="flex flex-col gap-md py-2xl text-nowrap px-xl">
          <a className="flex gap-md items-center mx-xl my-md">
            <i className="bx bx-tv"></i> Electronics
          </a>
          <a className="flex gap-md items-center mx-xl my-md">
            <i className="bx bx-closet"></i>Fashion
          </a>
          <a className="flex gap-md items-center mx-xl my-md">
            <i className="bx bx-bowl-rice"></i>Home & Kitchen
          </a>
          <a className="flex gap-md items-center mx-xl my-md">
            <i className="bx bx-capsule"></i>Healthy & Beauty
          </a>
          <a className="flex gap-md items-center mx-xl my-md">
            <i className="bx bx-cricket-ball"></i>Sports & Outdoors
          </a>
          <a className="flex gap-md items-center mx-xl my-md">
            <i className="bx bx-dice-3"></i>Toys & Games
          </a>
          <a className="flex gap-md items-center mx-xl my-md">
            <i className="bx bxs-car-mechanic"></i>Automotive
          </a>
          <a className="flex gap-md items-center mx-xl my-md">
            <i className="bx bx-book-bookmark"></i>Book & Stationary
          </a>
        </nav>
      </aside>
      <section className="bg-white grow-0 grid grid-cols-6 gap-md p-xl overflow-auto h-[80vh]">
        {products?.map((q: any) => (
          <div className="flex flex-col gap-xl border shadow rounded-xl py-xl hover:scale-[1.02] hover:cursor-pointer bg-white">
            <img className="h-[100px] m-auto" src={q.image} />
            <div className="flex flex-col text-left px-md">
              <LinesEllipsis
                text={q.title}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
              <span className="truncate text-md font-bold">Rp. {q.price}</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export const LandingPage = memo(LandingPageMemo);
