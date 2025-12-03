import { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Container from "../../components/Contaniner";

const Home = () => {
  const [style, setStyle] = useState("hidden");
  const [btnStyle, setBtnStyle] = useState("bg-gray-200");
  const personalService = () => {
    setStyle(style === "hidden" ? "flex" : "hidden");
    setBtnStyle(
      btnStyle === "bg-gray-200" ? "bg-gray-800 text-white" : "bg-gray-200"
    );
  };

  const eCommerce = () => {
    setStyle(style === "hidden" ? "flex" : "hidden");
    setBtnStyle(
      btnStyle === "bg-gray-200" ? "bg-gray-800 text-white" : "bg-gray-200"
    );
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
            title="Open Discussion"
            description="Forum terbuka untuk tanya jawab seputar coding, proyek web, dan
              teknologi terbaru. Tempat santai buat berbagi insight dan mencari
              solusi bareng."
          />
        </div>
        <div className="w-[40%] h-full ">
          <div className="pb-6 flex flex-col gap-4 overflow-x-scroll">
            <ul className="flex w-[600px] gap-4 overflow-x-scroll">
              <li className=" ">
                <Button
                  type="button"
                  onClick={() => personalService()}
                  title="Profesional Services"
                  color="light"
                  className={`py-2 px-2  hover:text-white hover:bg-gray-900 transition-all duration-200 ${btnStyle}`}
                />
              </li>
              <li className="">
                <Button
                  type="submit"
                  title="E-Commerce"
                  onClick={() => eCommerce()}
                  color="light"
                  className={`py-2 px-2  hover:text-white hover:bg-gray-900 transition-all duration-200 ${btnStyle}`}
                />
              </li>
              <li className="">
                <Button
                  type="submit"
                  title="Free Courses"
                  color="light"
                  className="py-2 px-2 hover:text-white hover:bg-gray-900 transition-all duration-200"
                />
              </li>
              <li className="">
                <Button
                  type="submit"
                  title="Open Discussion"
                  color="light"
                  className="py-2 px-2 hover:text-white hover:bg-gray-900 transition-all duration-200"
                />
              </li>
            </ul>
          </div>
          <div>
            <ul className="mt-5 flex flex-col gap-8 overflow-scroll h-[300px]">
              <li className={`flex ${style}`}>
                <Card
                  type="with-image"
                  title="Membangun Website Profesional"
                  description="Layanan pembuatan website dan aplikasi yang dirancang khusus sesuai kebutuhanmu. Dibangun dengan teknologi modern untuk hasil cepat, stabil, dan siap dipakai jangka panjang."
                  imageUrl="https://ardata.co.id/wp-content/uploads/2022/09/image21-e1662350573182.png"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
