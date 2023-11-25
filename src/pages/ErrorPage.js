const ErrorPage = ({ state }) => {
  const { text } = state;

  return (
    <div>{text.error.not_available}</div>
  );
};

export default ErrorPage;
