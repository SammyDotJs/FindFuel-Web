import Slider from "react-slick";

const PriceUpdates = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging: () => {
      return (
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "#C8E0CA",
            borderRadius: "99px",
            margin: "10px",
          }}
        ></div>
      );
    },
  };
  return (
    <div className="flex flex-col p-9 lg:px-24 lg:py-32">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="h text-4xl lg:text-6xl font-normal text-center">
          Get Live Price Updates on Fuel Stations
        </h1>
        <p className="p text-lg text-center">
          Whether you're planning a trip or just running errands, our app keeps
          you updated on fuel prices, helping you save time and optimize your
          budget.
        </p>
      </div>

      <div className="slider-container lg:block hidden">
        <Slider {...settings}>
          <div className="flex items-center p-3 lg:p-12">
            <img src="src/assets/hero-4-1.png" className=" h-1/2 bg-contain" />
          </div>
          <div className="flex items-center p-3 lg:p-12">
            <img src="src/assets/hero-4-2.png" className=" h-1/2 bg-contain" />
          </div>
          <div className="flex items-center p-3 lg:p-12">
            <img src="src/assets/hero-4-3.png" className=" h-1/2 bg-contain" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default PriceUpdates;
