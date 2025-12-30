import { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Container from "../../components/Contaniner";
import ProfesionalService from "./profesional-serivice";
import ECommerce from "./e-commerce";
import Footer from "../../components/Footer";

const Home = () => {
  const [id, setId] = useState("#e-commerce");
  const handleClick = (idset: string) => {
    setId(idset);
  };

  return (
    <Container>
      <div className="bg-[#FFFCFB] pt-20 w-full min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="w-full max-w-2xl">
            <h1 className="font-bold text-center text-6xl">
              Ayo Menormalisasikan Website Agar Terlihat Profesional
            </h1>
          </div>
          <div className="text-xl text-gray-500 font-medium">
            <p>Solusi Website Anda, Tunjukkan produk anda ke internet</p>
          </div>
          <div className="flex gap-5">
            <Button
              href="/products"
              title="Get Started"
              color="dark"
              className="py-2 px-4"
            />
            <Button
              href="/services"
              title="View Service"
              color="light"
              className="py-2 px-4"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex items-start justify-center gap-4 py-20">
        <div className="w-[70%] grid grid-cols-2 gap-4">
          <Card
            type="with-text"
            title="Profesional Service"
            description="  Layanan pembuatan website dan aplikasi yang dirancang khusus
                sesuai kebutuhanmu. Dibangun dengan teknologi modern untuk hasil
                cepat, stabil, dan siap dipakai jangka panjang."
          />
          <Card
            type="with-text"
            title="E-Commerce"
            description="   Tempat kamu menemukan produk digital buatan kami. Semua dirancang
              dengan kualitas tinggi, praktis digunakan, dan siap membantu
              pekerjaan atau proyekmu. Tinggal pilih, bayar, pakai."
          />
          <Card
            type="with-text"
            title="Free Course "
            description="Belajar ngoding tanpa bayar. Materi ringan, runtut, dan langsung
              bisa dipraktikkan. Dirancang untuk pemula yang ingin mulai masuk
              dunia web development."
          />
          <Card
            type="with-text"
            title="Blog"
            description="Berisi artikel tentang pengembangan website, teknologi, dan tips praktis yang dapat membantu pengguna memahami dan mempelajari dasar hingga penerapan nyata di dunia digital."
          />
        </div>
        <div className="w-[40%] h-full ">
          <div className="pb-6 flex flex-col gap-4 overflow-x-scroll">
            <ul className="flex w-[500px] gap-4 overflow-x-scroll">
              <li className=" ">
                <Button
                  type="button"
                  onClick={() => handleClick("#profesional-services")}
                  title="Profesional Services"
                  color="light"
                  className={`py-2 px-2  hover:text-white hover:bg-gray-900 transition-all duration-200 ${
                    id === "#profesional-services"
                      ? "bg-gray-900 text-white"
                      : ""
                  } `}
                />
              </li>
              <li className="">
                <Button
                  type="submit"
                  title="E-Commerce"
                  onClick={() => handleClick("#e-commerce")}
                  color="light"
                  className={`py-2 px-2  hover:text-white hover:bg-gray-900 transition-all duration-200 ${
                    id === "#e-commerce" ? "bg-gray-900 text-white" : ""
                  } `}
                />
              </li>
              <li className="">
                <Button
                  type="submit"
                  onClick={() => handleClick("#free-courses")}
                  title="Free Courses"
                  color="light"
                  className={`py-2 px-2  hover:text-white hover:bg-gray-900 transition-all duration-200 ${
                    id === "#free-courses" ? "bg-gray-900 text-white" : ""
                  } `}
                />
              </li>
              <li className="">
                <Button
                  type="submit"
                  onClick={() => handleClick("#blog")}
                  title="Blog"
                  color="light"
                  className={`py-2 px-2  hover:text-white hover:bg-gray-900 transition-all duration-200 ${
                    id === "#blog" ? "bg-gray-900 text-white" : ""
                  } `}
                />
              </li>
            </ul>
          </div>
          <div className={id === "#profesional-services" ? "flex" : "hidden"}>
            <ProfesionalService />
          </div>
          <div className={id === "#e-commerce" ? "flex" : "hidden"}>
            <ECommerce />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl text-center font-bold">
            Siap Memulai Project Anda ?
          </h1>
          <div className="text-xl text-center w-3/4 mt-4 text-gray-500 font-medium">
            <p>
              Mari wujudkan visi Anda menjadi kenyataan. Hubungi tim kami hari
              ini dan temukan bagaimana kami dapat membantu mengembangkan bisnis
              Anda.
            </p>
          </div>
          <div className="flex gap-5 mt-4">
            <Button
              href="/products"
              title="Contact Us"
              color="dark"
              className="py-2 px-4"
            />
            <Button
              href="/services"
              title="Try Other Service"
              color="light"
              className="py-2 px-4"
            />
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
