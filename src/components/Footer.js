const Footer = ({ state }) => {
  const { text } = state;

  return (
    <div className='text-sm text-center text-white p-4'>
      {text.footer}
    </div>
  );
};

export default Footer;
