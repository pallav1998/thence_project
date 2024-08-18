import InsightCard from "./_components/InsightCard/InsightCard";
import Header from "./_components/Header/Header";
import Crousal from "./_components/Crousal/Crousal";
import Footer from "./_components/Footer/Footer";
import Accordian from "./_components/Accordian/Accordian";

export default function Home() {
  return (
    <div className="min-h-[100vh] bg-white p-4 text-black">
      <Header />

      <div className="justify-cente flex flex-col items-center  py-16">
        <p className="text-orange-500 text-3xl font-serif">Success Stones</p>
        <h1 className="text-6xl text-center">
          Every Success journey <br /> we&apos;ve encountered.
        </h1>
      </div>

      <div className="flex mb-16">
        <InsightCard />
        <Crousal />
      </div>

      <Accordian />

      <Footer />
    </div>
  );
}
