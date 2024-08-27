import hero1 from "../assets/hero-1.png";

const Hero = () => {
  return (
    <div className="h-full flex-wrap flex flex-row justify-center items-center p-9 lg:pl-24 lg:pr-0 pb-20">
      <div className="w-full lg:w-3/5 flex flex-col justify-center gap-6">
        <h1 className="h text-4xl lg:text-6xl font-normal">
          Locate Fuel Stations Anywhere, Anytime
        </h1>
        <p className="p text-lg">
          Stay fueled and worry-free with our app and easily locate nearby fuel
          stations ensuring you are prepared for the road ahead.
        </p>
        <a href="https://findfuel-waitlist.vercel.app/#join-waitlist">
          <button className="btn py-3 px-7 rounded-lg text-white text-base w-fit">
            Join waitlist
          </button>
        </a>
      </div>
      <div className="w-full lg:w-2/5 hidden lg:block">
        <img src={hero1} className="w-full h-full bg-contain" />
      </div>
    </div>
  );
};

export default Hero;
