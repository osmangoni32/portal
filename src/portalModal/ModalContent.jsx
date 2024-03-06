import React from "react";

export default function ModalContent({ onclose }) {
  return (
    <div role="dialoge" aria-modal="true">
      <div>ModalContent</div>
      <button onClick={onclose}>close</button>
    </div>
  );
}
