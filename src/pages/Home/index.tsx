import Button from "../../components/Button";
import Container from "../../components/Contaniner";

const Home = () => {
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
            <Button href="/products" title="Get Started" color="dark" />
            <Button href="/services" title="View Service" color="light" />
          </div>
        </div>
      </div>
      <div className="w-full flex items-start justify-center gap-4 py-20">
        <div className="w-[70%] grid grid-cols-2 gap-4">
          <div className="w-full  border-gray-800 border p-6 rounded-md flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">Profesional Service</h1>
            <p className="text-gray-500">
              Layanan pembuatan website dan aplikasi yang dirancang khusus
              sesuai kebutuhanmu. Dibangun dengan teknologi modern untuk hasil
              cepat, stabil, dan siap dipakai jangka panjang.
            </p>
          </div>
          <div className="w-full  border-gray-800 border p-6 rounded-md flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">E-Commerce</h1>
            <p className="text-gray-500">
              Tempat kamu menemukan produk digital buatan kami. Semua dirancang
              dengan kualitas tinggi, praktis digunakan, dan siap membantu
              pekerjaan atau proyekmu. Tinggal pilih, bayar, pakai.
            </p>
          </div>
          <div className="w-full  border-gray-800 border p-6 rounded-md flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">Free Course </h1>
            <p className="text-gray-500">
              Belajar ngoding tanpa bayar. Materi ringan, runtut, dan langsung
              bisa dipraktikkan. Dirancang untuk pemula yang ingin mulai masuk
              dunia web development.
            </p>
          </div>
          <div className="w-full  border-gray-800 border p-6 rounded-md flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">Open Discusion </h1>
            <p className="text-gray-500">
              Forum terbuka untuk tanya jawab seputar coding, proyek web, dan
              teknologi terbaru. Tempat santai buat berbagi insight dan mencari
              solusi bareng.
            </p>
          </div>
        </div>
        <div className="w-[40%] h-full overflow-x-scroll">
          <div className="pb-6 flex flex-col gap-4">
            <ul className="flex w-[550px] gap-4 overflow-x-scroll">
              <li className="bg-gray-200 p-2 rounded-md">
                <h4 className="font-medium">Profesional Services</h4>
              </li>
              <li className="bg-gray-200 p-2 rounded-md">
                <h4 className="font-medium">E-Commerce</h4>
              </li>
              <li className="bg-gray-200 p-2 rounded-md">
                <h4 className="font-medium">Free Courses</h4>
              </li>
              <li className="bg-gray-200 p-2 rounded-md">
                <h4 className="font-medium">Open Discussion</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
