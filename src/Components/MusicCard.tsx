import React from 'react';
import { Card, CardBody,CardTitle,CardSubtitle,CardText,Button } from 'reactstrap';

function MusicCard() {
  return (
    <>
    <Card
  style={{
    width: '18rem',
    padding:20
  }}
>
  <img
    alt="card image"
    src="https://picsum.photos/200/200"
    style={{borderRadius:'50%'}}
  />
  <CardBody>
    <CardTitle tag="h5">
      Music Name
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Music by RkVirus
    </CardSubtitle>
    <Button>
      Play/Pause
    </Button>
  </CardBody>
</Card>
</>
  )
}

export default MusicCard;