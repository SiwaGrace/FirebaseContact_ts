import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { CiSearch, CiCirclePlus } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { AddContact } from "./components/AddContact";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import ContactCard from "./components/ContactCard";

export type Contact = {
  id: string;
  name: string;
  email: string;
  // message: string;
};

const App = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      try {
        setLoading(true);
        const contactsRef = collection(db, "contact");
        const contactsSnapShot = await getDocs(contactsRef);
        const contactLists = contactsSnapShot.docs.map((doc) => {
          const data = doc.data() as Omit<Contact, "id">;
          return {
            id: doc.id,
            ...data,
          };
        });
        setContacts(contactLists);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const isOpen = () => {
    setOpenModal(true);
  };

  const isClosed = () => {
    setOpenModal(false);
  };
  return (
    <div className="mx-auto max-w-92.5 ">
      <Navbar />
      <div className="flex gap-2">
        <div className="flex grow relative">
          <CiSearch className="text-white text-3xl absolute mt-1 ml-1" />
          <input
            type="text"
            name=""
            id=""
            className="rounded-md grow border border-white h-10  pl-8 text-white"
            placeholder="Search Contact"
          />
        </div>
        <CiCirclePlus
          className="text-white text-4xl cursor-pointer "
          onClick={isOpen}
        />
      </div>
      <div>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            //  {/* Contact */}
            <ContactCard key={contact.id} contact={contact} />
          ))
        ) : (
          // {/* No contact */}
          <div className="h-[70vh] flex flex-col justify-center items-center border">
            {loading && (
              <p className="text-white text-center mt-10">loading...</p>
            )}
            <div>
              <div className="flex justify-center items-center gap-2">
                <IoMdContact className="text-white text-4xl " />
                <h1 className="text-2xl font-bold text-white capitalize">
                  no contact found
                </h1>
              </div>
            </div>
          </div>
        )}
      </div>
      {openModal && <AddContact isClosed={isClosed} />}
      {/* <AddContact /> */}
    </div>
  );
};

export default App;
