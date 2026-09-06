// === Module 5187: FILE_TYPES_REQUIRED_ADDITIONAL_CHECK ===

// Module 5187 (FILE_TYPES_REQUIRED_ADDITIONAL_CHECK)
import AudioTypes from "AudioTypes" /* 5194 */;
import ImageTypes from "ImageTypes" /* 5195 */;
import VideoTypes from "VideoTypes" /* 5196 */;
import CompressedTypes from "CompressedTypes" /* 5197 */;
import OtherTypes from "OtherTypes" /* 5198 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const FileTypes = require;
class FileTypes {
  constructor() {
    tmp = c2(this, FileTypes);
    return;
  }
}
const entry = {
  key: "getInfoByName",
  value: function getInfoByName(key10027) {
    return FileTypes(5185).fetchFromObject(FileTypes, key10027.toUpperCase());
  }
};
let items = [
  entry,
  {
    key: "getSignaturesByName",
    value: function getSignaturesByName(item10079) {
      return FileTypes(5185).fetchFromObject(FileTypes, item10079.toUpperCase()).signatures;
    }
  },
  {
    key: "detectSignature",
    value: function detectSignature(fileChunk, items2) {
      const iter = items2[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        let flag = true;
        let tmp3 = nextResult.offset || 0;
        let num = 0;
        let num2 = 0;
        if (0 < tmp2.sequence.length) {
          do {
            if (tmp2.skippedBytes) {
              let skippedBytes = tmp2.skippedBytes;
              if (skippedBytes.includes(num2)) {
                num = num + 1;
                let sum = num2 + 1;
                num2 = sum;
              }
            }
          } while (fileChunk[tmp4 + num2] === tmp2.sequence[num2 - num]);
          flag = false;
        }
        if (flag) {
          iter.return();
          return nextResult;
        }
      }
    }
  },
  {
    key: "detectTypeByAdditionalCheck",
    value: function detectTypeByAdditionalCheck(fileChunk, found) {
      const mapped = found.map((extension) => extension.extension);
      if (mapped.some((item) => {
        const items = ["m4v", "flv", "mp4", "heic"];
        return items.includes(item);
      })) {
        let str5 = "heic";
        if (!mapped.includes("heic")) {
          let str6 = "flv";
          if (!FileTypes(5188).isFLV(fileChunk)) {
            let str8 = "mp4";
            if (tmp8(5188).isM4V(fileChunk)) {
              str8 = "mp4";
              if (!tmp8(5188).isHEIC(fileChunk)) {
                str8 = "m4v";
              }
            }
            str6 = str8;
          }
          str5 = str6;
        }
        return str5;
      } else if (mapped.some((item) => {
        const items = ["mkv", "webm"];
        return items.includes(item);
      })) {
        const result = FileTypes(5185).findMatroskaDocTypeElements(fileChunk);
        let str2 = "mkv";
        if ("mkv" !== result) {
          let str4;
          if ("webm" === result) {
            if (tmp3(5188).isWEBM(fileChunk)) {
              str4 = "webm";
            }
          }
          str2 = str4;
        }
        return str2;
      } else {
        let str;
        if (mapped.some((item) => {
          const items = ["avif"];
          return items.includes(item);
        })) {
          if (FileTypes(5185).isAvifStringIncluded(fileChunk)) {
            str = "avif";
          }
        }
        return str;
      }
    }
  },
  {
    key: "detectbBySignatures",
    value: function detectbBySignatures(fileChunk, signaturesByName) {
      const iter = signaturesByName[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        let num = 0;
        let flag = true;
        let tmp3 = nextResult.offset || 0;
        let skippedBytes;
        let tmp4 = tmp3;
        if (null != tmp2) {
          skippedBytes = tmp2.skippedBytes;
        }
        let length = tmp2.sequence.length;
        if (skippedBytes) {
          let sum = length + tmp2.skippedBytes.length;
        } else {
          sum = length;
        }
        let num2 = 0;
        if (0 < sum) {
          do {
            if (tmp2.skippedBytes) {
              skippedBytes = tmp2.skippedBytes;
              if (skippedBytes.includes(num2)) {
                num = num + 1;
                let sum1 = num2 + 1;
                num2 = sum1;
              }
            }
          } while (fileChunk[tmp4 + num2] === tmp2.sequence[num2 - num]);
          flag = false;
        }
        if (flag) {
          iter.return();
          return nextResult;
        }
      }
    }
  },
  {
    key: "checkByFileType",
    value: function checkByFileType(fileChunk, avif) {
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      const formatted = avif.toUpperCase();
      if (typeof call === "unknown" ? hasOwnProperty(formatted) : call(FileTypes, formatted)) {
        if (obj.detectSignature(fileChunk, obj.getSignaturesByName(avif.toUpperCase()))) {
          return true;
        }
      }
      return false;
    }
  }
];
const _moduleResult = _createClass(FileTypes, null, items);
_moduleResult.AAC = AudioTypes.AudioTypes.AAC;
_moduleResult.AMR = AudioTypes.AudioTypes.AMR;
_moduleResult.FLAC = AudioTypes.AudioTypes.FLAC;
_moduleResult.M4A = AudioTypes.AudioTypes.M4A;
_moduleResult.MP3 = AudioTypes.AudioTypes.MP3;
_moduleResult.WAV = AudioTypes.AudioTypes.WAV;
_moduleResult.AVIF = ImageTypes.ImageTypes.AVIF;
_moduleResult.BMP = ImageTypes.ImageTypes.BMP;
_moduleResult.BPG = ImageTypes.ImageTypes.BPG;
_moduleResult.CR2 = ImageTypes.ImageTypes.CR2;
_moduleResult.EXR = ImageTypes.ImageTypes.EXR;
_moduleResult.GIF = ImageTypes.ImageTypes.GIF;
_moduleResult.ICO = ImageTypes.ImageTypes.ICO;
_moduleResult.JPEG = ImageTypes.ImageTypes.JPEG;
_moduleResult.PBM = ImageTypes.ImageTypes.PBM;
_moduleResult.PGM = ImageTypes.ImageTypes.PGM;
_moduleResult.PNG = ImageTypes.ImageTypes.PNG;
_moduleResult.PPM = ImageTypes.ImageTypes.PPM;
_moduleResult.PSD = ImageTypes.ImageTypes.PSD;
_moduleResult.WEBP = ImageTypes.ImageTypes.WEBP;
_moduleResult.HEIC = ImageTypes.ImageTypes.HEIC;
_moduleResult.AVI = VideoTypes.VideoTypes.AVI;
_moduleResult.FLV = VideoTypes.VideoTypes.FLV;
_moduleResult.M4V = VideoTypes.VideoTypes.M4V;
_moduleResult.MKV = VideoTypes.VideoTypes.MKV;
_moduleResult.MOV = VideoTypes.VideoTypes.MOV;
_moduleResult.MP4 = VideoTypes.VideoTypes.MP4;
_moduleResult.OGG = VideoTypes.VideoTypes.OGG;
_moduleResult.SWF = VideoTypes.VideoTypes.SWF;
_moduleResult.WEBM = VideoTypes.VideoTypes.WEBM;
_moduleResult._7Z = CompressedTypes.CompressedTypes._7Z;
_moduleResult.LZH = CompressedTypes.CompressedTypes.LZH;
_moduleResult.RAR = CompressedTypes.CompressedTypes.RAR;
_moduleResult.ZIP = CompressedTypes.CompressedTypes.ZIP;
_moduleResult.BLEND = OtherTypes.OtherTypes.BLEND;
_moduleResult.DOC = OtherTypes.OtherTypes.DOC;
_moduleResult.ELF = OtherTypes.OtherTypes.ELF;
_moduleResult.EXE = OtherTypes.OtherTypes.EXE;
_moduleResult.INDD = OtherTypes.OtherTypes.INDD;
_moduleResult.MACHO = OtherTypes.OtherTypes.MACHO;
_moduleResult.ORC = OtherTypes.OtherTypes.ORC;
_moduleResult.PARQUET = OtherTypes.OtherTypes.PARQUET;
_moduleResult.PCAP = OtherTypes.OtherTypes.PCAP;
_moduleResult.PDF = OtherTypes.OtherTypes.PDF;
_moduleResult.PS = OtherTypes.OtherTypes.PS;
_moduleResult.RTF = OtherTypes.OtherTypes.RTF;
_moduleResult.SQLITE = OtherTypes.OtherTypes.SQLITE;
_moduleResult.STL = OtherTypes.OtherTypes.STL;
_moduleResult.TTF = OtherTypes.OtherTypes.TTF;

export const FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = ["m4v", "flv", "mp4", "mkv", "webm", "avif", "heic"];
export const FileTypes = _moduleResult;