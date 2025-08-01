const ErrorMessage = ({ message }) => (
  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
    <p>{message || "Something went wrong. Please try again."}</p>
  </div>
);

export default ErrorMessage;
