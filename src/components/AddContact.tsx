import { RxCross2 } from "react-icons/rx";

type AddContactProps = {
  isClosed: () => void;
  // isOpen: () => void;
};

export const AddContact = ({ isClosed }: AddContactProps) => {
  return (
    <div className="">
      <div className="bg-white flex p-2 flex-col gap-4">
        <RxCross2 className="" onClick={isClosed} />
        <form action="" className="flex grow flex-col gap-5">
          <div className="flex grow flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name=""
              id=""
              className=" grow border border-black h-8  pl-8 text-white"
              placeholder="Search Contact"
            />
          </div>
          {/* email */}
          <div className="flex grow flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name=""
              id=""
              className=" grow border border-black h-8  pl-8 text-white"
              placeholder="Search Contact"
            />
          </div>
          <button
            type="submit"
            className="bg-dark-yellow p-1 border rounded-sm self-end cursor-pointer"
          >
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
};
