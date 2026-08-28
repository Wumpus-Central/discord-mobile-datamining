// _runtime/05103_AudioTypes.js
import _createClass from "metro/00042__createClass.js";
import closure_0 from "metro/00041__classCallCheck.js";

class AudioTypes {
  constructor() {
    tmp = closure_0(this, AudioTypes);
    return;
  }
}
const _moduleResult = _createClass(AudioTypes);
const items = [{ sequence: [255, 241], description: "MPEG-4 Advanced Audio Coding (AAC) Low Complexity (LC) audio file" }, { sequence: [255, 249], description: "MPEG-2 Advanced Audio Coding (AAC) Low Complexity (LC) audio file" }];
_moduleResult.AAC = { extension: "aac", mimeType: "audio/aac", description: "Advanced Audio Coding (AAC) is an audio coding standard for lossy digital audio compression", signatures: items };
const items1 = [{ sequence: [35, 33, 65, 77, 82] }];
_moduleResult.AMR = { extension: "amr", mimeType: "audio/amr", description: "Adaptive Multi-Rate ACELP (Algebraic Code Excited Linear Prediction) Codec, commonly audio format with GSM cell phones", signatures: items1 };
const items2 = [{ sequence: [102, 76, 97, 67, 0, 0, 0, 34] }];
_moduleResult.FLAC = { extension: "flac", mimeType: "audio/x-flac", description: "Free Lossless Audio Codec file", signatures: items2 };
const items3 = [{ sequence: [102, 116, 121, 112, 77, 52, 65, 32], offset: 4, compatibleExtensions: ["aac"] }];
_moduleResult.M4A = { extension: "m4a", mimeType: "audio/x-m4a", description: "Apple Lossless Audio Codec file", signatures: items3 };
const items4 = [{ sequence: [255, 251], description: "MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which is appended at the end of the file)" }, { sequence: [255, 243], description: "MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which is appended at the end of the file)" }, { sequence: [255, 242], description: "MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which is appended at the end of the file)" }, { sequence: [73, 68, 51], description: "MP3 file with an ID3v2 container" }];
_moduleResult.MP3 = { extension: "mp3", mimeType: "audio/mpeg", description: "A digital audio file format that uses compression to reduce file size while maintaining high quality sound", signatures: items4 };
const items5 = [{ sequence: [82, 73, 70, 70, 87, 65, 86, 69, 102, 109, 116, 32], skippedBytes: [4, 5, 6, 7] }];
_moduleResult.WAV = { extension: "wav", mimeType: "audio/wav", description: "Waveform Audio File Format", signatures: items5 };

export const AudioTypes = _moduleResult;