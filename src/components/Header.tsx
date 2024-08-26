const Header = () => {
  return (
    <div className="flex items-center justify-between p-9 lg:py-10 lg:px-24">
      <h1 className="h text-2xl font-normal">Find Fuel</h1>
      <a href="http://localhost:5174/#join-waitlist">
        <button className="btn py-3 px-7 rounded-lg text-white text-base w-fit">
          Join waitlist
        </button>
      </a>
    </div>
  );
};

export default Header;
