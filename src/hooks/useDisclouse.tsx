import { useState } from "react";

const IsCloseOpenModal = () => {
  const [onOpen, setIsOpen] = useState(false);

  const isOpen = () => {
    setIsOpen(true);
  };

  const isClosed = () => {
    setIsOpen(false);
  };
  return { isOpen, isClosed, onOpen };
};

export default IsCloseOpenModal;
