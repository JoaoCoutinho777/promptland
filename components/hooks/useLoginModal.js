import {useState} from 'react';

const useLoginModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const onOpen = () => {
        setIsOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
    }
 
    return {
        isOpen,
        onOpen,
        onClose
    }
}

export default useLoginModal;