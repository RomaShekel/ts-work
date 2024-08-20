import Modal from 'react-modal'
import './App.css'
import { useState } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    backgroundColor: 'gray',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function App() {
const [isOpen, setIsOpen] = useState(false)
  return (
    <>
     <div>
      <button type="button" onClick={() => setIsOpen(!isOpen)} >Toggle Modal</button>
      <Modal
        isOpen={isOpen}
        style={customStyles}
        contentLabel="Example Modal">
        <h2>Welcome to Modal</h2>
        <button type='button' onClick={() => setIsOpen(false)}>Close</button>
        <button type='button'>Close</button>
      </Modal>
     </div>
    </>
  )
}

export default App
