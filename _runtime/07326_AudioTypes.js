// _runtime/07326_AudioTypes.js
import _createClass from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

let items;
let items1;
let items2;
let items3;
let items4;
let items5;
class AudioTypes {
  constructor() {
    _classCallCheck(this, AudioTypes);
  }
}
const _moduleResult = _createClass(AudioTypes);
const obj = {
  extension: "aac",
  mimeType: "audio/aac",
  description: "Advanced Audio Coding (AAC) is an audio coding standard for lossy digital audio compression",
  signatures: items,
};
items = [
  { sequence: [255, 241], description: "MPEG-4 Advanced Audio Coding (AAC) Low Complexity (LC) audio file" },
  { sequence: [255, 249], description: "MPEG-2 Advanced Audio Coding (AAC) Low Complexity (LC) audio file" },
];
_moduleResult.AAC = obj;
const obj2 = {
  extension: "amr",
  mimeType: "audio/amr",
  description:
    "Adaptive Multi-Rate ACELP (Algebraic Code Excited Linear Prediction) Codec, commonly audio format with GSM cell phones",
  signatures: items1,
};
items1 = [{ sequence: [35, 33, 65, 77, 82] }];
_moduleResult.AMR = obj2;
const obj3 = {
  extension: "flac",
  mimeType: "audio/x-flac",
  description: "Free Lossless Audio Codec file",
  signatures: items2,
};
items2 = [{ sequence: [102, 76, 97, 67, 0, 0, 0, 34] }];
_moduleResult.FLAC = obj3;
const obj4 = {
  extension: "m4a",
  mimeType: "audio/x-m4a",
  description: "Apple Lossless Audio Codec file",
  signatures: items3,
};
items3 = [{ sequence: [102, 116, 121, 112, 77, 52, 65, 32], offset: 4, compatibleExtensions: ["aac"] }];
_moduleResult.M4A = obj4;
const obj5 = {
  extension: "mp3",
  mimeType: "audio/mpeg",
  description:
    "A digital audio file format that uses compression to reduce file size while maintaining high quality sound",
  signatures: items4,
};
items4 = [
  {
    sequence: [255, 251],
    description:
      "MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which is appended at the end of the file)",
  },
  {
    sequence: [255, 243],
    description:
      "MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which is appended at the end of the file)",
  },
  {
    sequence: [255, 242],
    description:
      "MPEG-1 Layer 3 file without an ID3 tag or with an ID3v1 tag (which is appended at the end of the file)",
  },
  { sequence: [73, 68, 51], description: "MP3 file with an ID3v2 container" },
];
_moduleResult.MP3 = obj5;
const obj6 = { extension: "wav", mimeType: "audio/wav", description: "Waveform Audio File Format", signatures: items5 };
items5 = [{ sequence: [82, 73, 70, 70, 87, 65, 86, 69, 102, 109, 116, 32], skippedBytes: [4, 5, 6, 7] }];
_moduleResult.WAV = obj6;
const AudioTypes_export = _moduleResult;

export { AudioTypes_export as AudioTypes };
