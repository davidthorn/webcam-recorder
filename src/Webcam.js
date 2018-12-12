"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class WebcamView {
    constructor() {
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            const wrapper = document.getElementById('wrapper');
            const video = document.createElement('video');
            video.className = 'webcam';
            wrapper.appendChild(video);
            navigator.mediaDevices.getUserMedia({
                audio: true,
                video: {
                    width: 1920,
                    height: 1224,
                    frameRate: 120,
                    aspectRatio: 16.9
                }
            })
                .then((stream) => {
                video.srcObject = stream;
                video.autoplay = true;
            });
        });
    }
}
exports.WebcamView = WebcamView;
//# sourceMappingURL=Webcam.js.map