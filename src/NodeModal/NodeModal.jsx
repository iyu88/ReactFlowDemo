import "./NodeModal.css";
import { useRef } from "react";

export default function NodeModal({ setModal, textTest, setTextTest }) {
  const modalText = useRef();
  const onSaveHandler = (e) => {
    e.preventDefault();
    setTextTest(modalText.current.value);
    setModal(false);
  };

  return (
    <>
      <div className="NodeModalWrapper">
        <form className="NodeModalForm" onSubmit={onSaveHandler}>
          <div className="NodeModalTitle">Temp Title</div>
          <input
            className="NodeModalText"
            type="text"
            defaultValue={textTest}
            ref={modalText}
          />
          <button className="NodeModalBtn" type="submit">
            Save
          </button>
        </form>
      </div>
    </>
  );
}
