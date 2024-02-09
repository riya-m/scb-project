import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './InterfaceModal.css';
import { TextField } from '@mui/material';
import { SaveInterfaceRequest, fetchData, saveInterface } from '../../api';

interface Props {
  open: boolean;
  onClose: () => void;
}

const InterfaceModal = ({ open, onClose } : Props) => {
  
  const [name, setName] = useState('');
  const [cpu, setCpu] = useState('');
  const [ram, setRam] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCpuChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpu(event.target.value);
  };

  const handleRamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRam(event.target.value);
  };

  const handleClose = async () => {
    try {
      const formData: SaveInterfaceRequest = {
        name: name,
        ram: ram,
        cpu: cpu,
      };
      await saveInterface(formData);
      fetchData();
    }catch (error) {
      console.error('Error submitting data:', error);
    }
    setName(''); 
    setCpu(''); 
    setRam(''); 
    onClose(); 
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="modalContainer"
    >
      <Box className="modalContent">
        <h2 className="modalHeading">Enter Interface Details</h2>
        <div className="inputContainer">
        <input type="text"
          value={name}
          placeholder="Name"
          onChange={handleNameChange}
          required
          className="modalInput first"
        />
        <input type="text"
          value={cpu}
          placeholder="CPU"
          onChange={handleCpuChange}
          required
          className="modalInput second"
        />
        </div>
        <input type="text"
          value={ram}
          placeholder="RAM"
          onChange={handleRamChange}
          required
          className="modalInput third"
        />
        <Button variant="contained" onClick={handleClose} className="modalButton">Add Interface</Button>
      </Box>
    </Modal>
  );
};

export default InterfaceModal;
