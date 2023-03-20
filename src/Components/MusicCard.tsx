import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button, FormGroup, Label, Input } from 'reactstrap';
import { Pause, SkipForward, SkipBackward, FastForward, Play } from 'react-bootstrap-icons';
import '../App.css';

function MusicCard() {
  const [audio, setAudio] = useState(new Audio('/waterfall.mp3'))
  const [isPlaying, setIsPlaying] = useState(false)
  const [pointer, setPointer] = useState(0)
  const [currTime, setCurrTime] = useState(0)
  const [duration, setDuration] = useState(audio.duration)

  // changing progress
  audio.addEventListener('timeupdate', () => {
    console.log(audio.currentTime)
    let value = (audio.currentTime / audio.duration) * 100
    setPointer(value)
    setCurrTime(Math.round(audio.currentTime))
  })

  // audio control functions 
  const playOrPause = (isPlaying: any) => {
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      audio.pause()
    }
    else {
      audio.play();
    }
  }

  return (
    <>
      <Card
        style={{
          width: '20rem',
          padding: 30
        }}
      >
        <img
          alt="card image"
          src="https://picsum.photos/200/200"
          style={{
            borderRadius: '50%',
          }}
        // className='App-logo'
        />
        <CardBody>
          <CardTitle tag="h5">
            Music Name
          </CardTitle>
          <CardSubtitle
            className="mb-4 text-muted"
            tag="h6"
          >
            Music by RkVirus
          </CardSubtitle>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="text-start text-black" style={{ fontSize: '0.8rem' }}>
              {currTime}sec
            </div>
            <div className="text-start text-black" style={{ fontSize: '0.8rem' }}>
              {duration}
            </div>
          </div>

          <input type="range" name="progress" id="progress" min={0} max={100} value={pointer}  className="w-100" />
          {/* <audio src="./waterfall.mp3"></audio> */}
          <div className='d-flex justify-content-center px-4'>

            <Button className='mt-4 mx-2'>
              <SkipBackward />
            </Button>
            <Button className='mt-4 mx-2'
              onClick={() => {
                playOrPause(isPlaying)
              }}
            >
              {isPlaying ? <Pause /> : <Play />}
            </Button>
            <Button className='mt-4 mx-2'>
              <SkipForward />
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default MusicCard;