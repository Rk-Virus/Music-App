import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MusicModal from './MusicModal';


function InfoCard() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Card style={{ width: '16rem', marginBottom: 15 }}>
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_960_720.jpg" />
                <Card.Body>
                    <Card.Title>Let me down</Card.Title>
                    <Button variant="primary" onClick={() => setModalShow(true)}> Play </Button>
                </Card.Body>
            </Card>
            <MusicModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default InfoCard