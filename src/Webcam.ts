import { desktopCapturer, app   } from 'electron'

export class WebcamView {

    constructor() {

    }

    async render() {

        const wrapper = document.getElementById('wrapper')
        const video = document.createElement('video') as HTMLVideoElement

        video.className = 'webcam'
        wrapper.appendChild(video)
        
        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: {
                width: 1920,
                height: 1224,
                frameRate: 120,
                aspectRatio: 16.9
            }
            
        })
        .then ((stream) => {
            video.srcObject = stream
            video.autoplay = true
        })


    }

}
