import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="max-w-xl text-gray-500 mx-auto mt-4 flex flex-col gap-4 ">
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non, iusto necessitatibus eaque dolorum, iste rem modi corporis, veniam ut numquam iure repudiandae architecto magni repellendus totam aperiam quas cum!</p>
          <p>Placeat, dolorem reprehenderit corrupti quasi, aut eveniet corporis ex, ullam nulla soluta fuga dolores neque repudiandae repellat aperiam nam ipsam quae magni.</p>
          <p>Lorem ipsum Itaque maxime accusantium et repellendus illum porro unde molestias, minus cum. Asperiores!</p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader={"Don\'t hesitate"} mainHeader={"Contact us"} />
        <div className="mt-8">
          <a href="tel:+46738123123" className="text-4xl text-gray-500">+46 738 123 123</a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        Copyright &copy; 2024 All rights Reserved
      </footer>
    </>
  );
};
