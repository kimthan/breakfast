import React from "react";
import "./Modal.css";
export const Modal = ({ isOpen, modalItem, handleModalEvent }) => {
   

    const handleClick = (e, id, remove) => {
        console.log(remove);
        
        handleModalEvent(e, id, remove);
    };

    if (modalItem.name && isOpen) {
        if (modalItem.tobuy) {
            return (
                <div className="modal">
                    <div>
                        <h2>Remove {modalItem.name}?</h2>
                    </div>
                    <img src={modalItem.src} alt={modalItem.name} />
                    <div
                        className="modal__yes"
                        onClick={() => handleClick(true, modalItem.id, 'remove')}
                    >
                        Remove
                    </div>
                    <div
                        className="modal__no"
                        onClick={() => handleClick(false)}
                    >
                        No
                    </div>
                </div>
            )
        }
        if(modalItem.tobuy === false){
            return (
                <div className="modal">
                    <div>
                        <h2>Buy {modalItem.name}?</h2>
                    </div>
                    <img src={modalItem.src} alt={modalItem.name} />
                    <div
                        className="modal__yes"
                        onClick={() => handleClick(true, modalItem.id, 'buy')}
                    >
                        Buy
                    </div>
                    <div
                        className="modal__no"
                        onClick={() => handleClick(false)}
                    >
                        No
                    </div>
                </div>
            )
        }
    } else {
        return <div></div>;
    }
};
