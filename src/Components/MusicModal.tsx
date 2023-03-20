import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import MusicCard from './MusicCard';

function MusicModal(props:any) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={{display:'flex', justifyContent:'center'}}>
        <MusicCard/>
      </Modal.Body>
    </Modal>
  )
}

export default MusicModal