import { RxCross2 } from "react-icons/rx";
import { Formik, Form, Field } from "formik";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

type AddContactProps = {
  isClosed: () => void;
  // isOpen: () => void;
};
type Contact = {
  name: string;
  email: string;
};

export const AddContact = ({ isClosed }: AddContactProps) => {
  const addContact = async (contact: Contact) => {
    try {
      const contactRef = collection(db, "contact");
      await addDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blur overlay */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={isClosed}
      />
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={isClosed}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <RxCross2 className="w-6 h-6 text-gray-600" />
        </button>

        {/* Modal Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Add New Contact
          </h2>
          <p className="text-gray-600 mb-6">Enter the contact details below</p>

          <Formik
            initialValues={{ name: "", email: "" }}
            onSubmit={(values) => {
              console.log("data", values);
              addContact(values);
              isClosed();
            }}
          >
            {() => (
              <Form className="space-y-5">
                {/* Name Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <Field
                      type="text"
                      name="name"
                      required
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Enter full name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <Field
                      type="email"
                      name="email"
                      required
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={isClosed}
                    className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg shadow-sm transition-colors focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                  >
                    Add Contact
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
