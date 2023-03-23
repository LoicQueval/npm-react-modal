import React, {useState} from 'react';
import './modal.css';

export const Modal = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpen() {
        setIsOpen(true);
    }

    function handleClose() {
        setIsOpen(false);
    }

    return (
        <>
            <button onClick={handleOpen}>Open Modal</button>
            {isOpen &&
                <div className="modal-overlay" onClick={handleClose}>
                    <div className="modal">
                        <h1>{title}</h1>
                        <p className="modal-content">{children}</p>
                    </div>
                </div>
            }
        </>
    );
}
