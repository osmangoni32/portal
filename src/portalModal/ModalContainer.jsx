import React, { useState } from "react";
import Portal from "../Portal";
import ModalContent from "./ModalContent";

export default function ModalContainer() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <h1>here is a modal</h1>
      <button onClick={() => setShowModal(true)}>show modal</button>
      {showModal && (
        <Portal>
          <ModalContent onclose={() => setShowModal(false)} />
        </Portal>
      )}
    </>
  );
}
