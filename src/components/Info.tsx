
const Info = () => {
  return (
    <div className="h-full flex flex-col items-center px-24 py-32">
      <h1 className="h text-4xl lg:text-6xl font-normal text-center">
        How Find Fuel Works
      </h1>
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-28 mt-16">
        <div className="flex flex-col gap-2 items-center">
          <img src="src/assets/hero-2-1.png" alt="" className="" />
          <h3 className="h text-3xl font-normal">Search</h3>
          <p className="p text-lg text-center max-w-xs">
            Enter your current location or allow the app to access your GPS to
            find nearby fuel stations.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src="src/assets/hero-2-2.png" alt="" className="" />
          <h3 className="h text-3xl font-normal">Filter</h3>
          <p className="p text-lg text-center max-w-xs">
            Customize your search by filtering options such as fuel type, price
            range, brand preference, and amenities.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img src="src/assets/hero-2-3.png" alt="" className="" />
          <h3 className="h text-3xl font-normal">Navigate</h3>
          <p className="p text-lg text-center max-w-xs">
            Select a station from the results, view detailed information
            including prices, amenities, and reviews, then navigate to the
            chosen station using integrated maps for a seamless refueling
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
