import { MdDelete, MdEditSquare } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import type { Contact } from "../App";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import useDisclouse from "../hooks/useDisclouse";
import { AddContact } from "./AddContact";
import { toast } from "react-toastify";

type ContactCardProps = {
  contact: Contact;
};

const ContactCard = ({ contact }: ContactCardProps) => {
  const { isOpen, onOpen, isClosed } = useDisclouse();

  const deleteContact = async (id: string) => {
    try {
      await deleteDoc(doc(db, "contact", id));
      toast.success("conatct deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-between items-center gap-2 bg-yellow rounded-md p-1 mt-4">
      <div className="flex gap-1">
        <IoIosContact className="text-orange text-5xl " />
        <div>
          <h1>{contact.name}</h1>
          <p>{contact.email}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <MdEditSquare
          className="text-color-orange text-3xl cursor-pointer"
          onClick={isOpen}
        />
        <MdDelete
          className="text-amber-600 text-3xl cursor-pointer"
          onClick={() => deleteContact(contact.id)}
        />
      </div>
      {/* update contact */}
      {onOpen && <AddContact contact={contact} isUpdate isClosed={isClosed} />}
    </div>
  );
};

export default ContactCard;
