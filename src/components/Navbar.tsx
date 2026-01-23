const Navbar = () => {
  return (
    <div className="my-4 h-15 bg-white rounded-2xl flex justify-center items-center space-x-2 font-bold text-xl">
      {" "}
      <svg
        width="22"
        height="24"
        viewBox="0 0 22 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.6294 17.9194L18.813 0.573891C18.725 0.0311563 18.167 -0.193374 17.7785 0.195771L0 17.957L9.77256 23.4192C10.0773 23.5894 10.4206 23.6788 10.7697 23.6788C11.1188 23.6789 11.4621 23.5897 11.7669 23.4197L21.6295 17.9193L21.6294 17.9194Z"
          fill="#FCCA3F"
        />
      </svg>
      <h1>Firebase Contact App</h1>
    </div>
  );
};

export default Navbar;
