import Button from "../../components/Button";

const Home = () => {
  return (
    <div className="bg-[#FFFCFB] w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="font-bold text-6xl">Welcome to JustNgoding Home Page</h1>
        <div className="text-xl text-gray-500 font-medium">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Home;
