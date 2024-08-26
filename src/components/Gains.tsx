
const Gains = () => {
  return (
    <div className="h-full odd-bg flex flex-col lg:flex-row md:flex-col sm:flex-col items-center justify-between p-9 lg:px-24 lg:py-32">
      <div className="w-full lg:w-3/5 lg:mb-0 mb-8">
        <h1 className="h text-4xl lg:text-6xl font-normal text-center w-full lg:w-3/4">
          What Users Gain Using Find Fuel
        </h1>
      </div>
      <div className="w-full flex flex-col lg:flex-col gap-12 lg:w-2/5 items-end justify-center py-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full lg:gap-0 gap-5">
          <div className="">
            <div className="main rounded-3xl flex justify-center items-center w-20 h-20">
              <h1 className="font-normal text-4xl hw text-white">1</h1>
            </div>
          </div>
          <div className="flex flex-col pl-3">
            <h1 className="h text-3xl font-normal w-fit">
              Cost and Time Savings
            </h1>
            <p className="p text-base font-normal w-full lg:w-3/5">
              Quickly locate cost-effective fuel stations, saving money on each
              refueling while minimizing time spent searching.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full lg:gap-0 gap-5">
          <div className="">
            <div className="secondary rounded-3xl flex justify-center items-center w-20 h-20">
              <h1 className="font-normal text-4xl h text-white">2</h1>
            </div>
          </div>
          <div className="flex flex-col pl-3">
            <h1 className="h text-3xl font-normal w-fit">Convenience</h1>
            <p className="p text-base font-normal w-full lg:w-3/5">
              Easily customize searches and find nearby stations meeting
              specific preferences, making refueling effortless, especially
              during travel.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full lg:gap-0 gap-5">
          <div className="">
            <div className="main rounded-3xl flex justify-center items-center w-20 h-20">
              <h1 className="font-normal text-4xl hw text-white">3</h1>
            </div>
          </div>
          <div className="flex flex-col pl-3">
            <h1 className="h text-3xl font-normal w-fit">
              Informed Decision-Making
            </h1>
            <p className="p text-base font-normal w-full lg:w-3/5">
              Access detailed information and color-coded pricing to make
              informed choices, ensuring the best value for each refueling.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full lg:gap-0 gap-5">
          <div className="">
            <div className="secondary rounded-3xl flex justify-center items-center w-20 h-20">
              <h1 className="font-normal text-4xl h text-white">4</h1>
            </div>
          </div>
          <div className="flex flex-col pl-3">
            <h1 className="h text-3xl font-normal w-fit">Expense Management</h1>
            <p className="p text-base font-normal w-full lg:w-3/5">
              By maintaining a detailed expense record, users gain financial
              awareness and accountability, empowering them to make informed
              decisions about vehicle expenses and budget effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gains;
