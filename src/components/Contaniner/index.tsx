import type React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="min-h-screen bg-[#FFFCFB] w-full flex flex-col items-center justify-center">
      <div className="min-h-screen w-full max-w-7xl">{children}</div>
    </div>
  );
};

export default Container;
