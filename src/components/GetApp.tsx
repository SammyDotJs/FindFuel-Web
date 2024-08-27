import apple from "../assets/apple.png"
import googlePlay from "../assets/play.png"

const GetApp = () => {
  return (
    <div className="flex flex-col items-start h-full odd-bg p-9 lg:px-24 lg:py-32 gap-32">
      <div className="flex flex-col gap-10">
        <h1 className="h text-4xl lg:text-6xl font-normal lg:text-start text-center">Get the Find Fuel app</h1>
        <p className="p text-lg lg:text-start text-center">
          Download now and never miss out on the latest deals at the pump!
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-center gap-10">
        <img src={googlePlay} className="max-w-60 bg-contain" />
        <img src={apple} className="max-w-60 bg-contain" />
      </div>
    </div>
  );
};

export default GetApp;
