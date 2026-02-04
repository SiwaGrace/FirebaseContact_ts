import { MdDelete, MdEditSquare } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import type { Contact } from "../App";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

type ContactCardProps = {
  contact: Contact;
};

const ContactCard = ({ contact }: ContactCardProps) => {
  const deleteContact = async (id: string) => {
    try {
      await deleteDoc(doc(db, "contact", id));
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
        <MdEditSquare className="text-color-orange text-3xl cursor-pointer" />
        <MdDelete
          className="text-purple-600 text-3xl cursor-pointer"
          onClick={() => deleteContact(contact.id)}
        />
      </div>
    </div>
  );
};

export default ContactCard;
