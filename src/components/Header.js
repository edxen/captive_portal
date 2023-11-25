const Header = ({ state }) => {
  const { text } = state;

  return (
    <div className='flex-col-center'>
      <div className="flex-center rounded-tl-md w-full mb-4 bg-black select-none">
        <img draggable='false' src="./logo.png" width='200px' alt='site-logo'></img>
      </div>
      <div className='text-center text-3xl md:text-5xl text-orange-300 p-4'>
        {text.welcome}
      </div>
    </div >
  );
};

export default Header;
