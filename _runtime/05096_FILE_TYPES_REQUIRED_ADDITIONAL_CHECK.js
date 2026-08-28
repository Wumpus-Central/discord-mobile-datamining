// _runtime/05096_FILE_TYPES_REQUIRED_ADDITIONAL_CHECK.js
import AudioTypes from "05103_AudioTypes.js";
import ImageTypes from "05104_ImageTypes.js";
import VideoTypes from "05105_VideoTypes.js";
import CompressedTypes from "05106_CompressedTypes.js";
import OtherTypes from "05107_OtherTypes.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const FileTypes = require;
class FileTypes {
  constructor() {
    tmp = closure_2(this, FileTypes);
    return;
  }
}
let items = [
  {
    key: "getInfoByName",
    value: function getInfoByName(key10027) {
      return FileTypes(5094).fetchFromObject(FileTypes, key10027.toUpperCase());
    }
  },
  {
    key: "getSignaturesByName",
    value: function getSignaturesByName(item10079) {
      return FileTypes(5094).fetchFromObject(FileTypes, item10079.toUpperCase()).signatures;
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
        let tmp5 = nextResult;
        if (0 < tmp2.sequence.length) {
          do {
            let tmp6 = nextResult;
            if (tmp2.skippedBytes) {
              let tmp7 = nextResult;
              let skippedBytes = tmp2.skippedBytes;
              let tmp8 = num2;
              if (skippedBytes.includes(num2)) {
                let tmp13 = num;
                num = num + 1;
                let tmp14 = num2;
                let sum = num2 + 1;
                num2 = sum;
                let tmp16 = nextResult;
              }
            }
            let tmp9 = tmp3;
            let tmp10 = num2;
            let tmp11 = nextResult;
            let tmp12 = num;
          } while (fileChunk[tmp4 + num2] === tmp2.sequence[num2 - num]);
          flag = false;
        }
        let tmp17 = flag;
        if (flag) {
          let tmp18 = iter;
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
      if (mapped.some((arg0) => {
        const items = ["m4v", "flv", "mp4", "heic"];
        return items.includes(arg0);
      })) {
        let str5 = "heic";
        if (!mapped.includes("heic")) {
          let str6 = "flv";
          if (!FileTypes(5097).isFLV(fileChunk)) {
            let str8 = "mp4";
            if (tmp8(5097).isM4V(fileChunk)) {
              str8 = "mp4";
              if (!tmp8(5097).isHEIC(fileChunk)) {
                str8 = "m4v";
              }
            }
            str6 = str8;
          }
          str5 = str6;
        }
        return str5;
      } else if (mapped.some((arg0) => {
        const items = ["mkv", "webm"];
        return items.includes(arg0);
      })) {
        const result = FileTypes(5094).findMatroskaDocTypeElements(fileChunk);
        let str2 = "mkv";
        if ("mkv" !== result) {
          let str4;
          if ("webm" === result) {
            if (tmp3(5097).isWEBM(fileChunk)) {
              str4 = "webm";
            }
          }
          str2 = str4;
        }
        return str2;
      } else {
        let str;
        if (mapped.some((arg0) => {
          const items = ["avif"];
          return items.includes(arg0);
        })) {
          if (FileTypes(5094).isAvifStringIncluded(fileChunk)) {
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
        let tmp5 = nextResult;
        let skippedBytes;
        let tmp4 = tmp3;
        if (null != tmp2) {
          let tmp7 = nextResult;
          skippedBytes = tmp2.skippedBytes;
        }
        let tmp8 = nextResult;
        let length = tmp2.sequence.length;
        if (skippedBytes) {
          let sum = length + tmp2.skippedBytes.length;
        } else {
          sum = length;
        }
        let num2 = 0;
        if (0 < sum) {
          do {
            let tmp11 = nextResult;
            if (tmp2.skippedBytes) {
              let tmp12 = nextResult;
              skippedBytes = tmp2.skippedBytes;
              let tmp13 = num2;
              if (skippedBytes.includes(num2)) {
                let tmp18 = num;
                num = num + 1;
                let tmp19 = num2;
                let sum1 = num2 + 1;
                num2 = sum1;
                let tmp21 = sum;
              }
            }
            let tmp14 = tmp3;
            let tmp15 = num2;
            let tmp16 = nextResult;
            let tmp17 = num;
          } while (fileChunk[tmp4 + num2] === tmp2.sequence[num2 - num]);
          flag = false;
        }
        let tmp22 = flag;
        if (flag) {
          let tmp23 = iter;
          iter.return();
          return nextResult;
        }
      }
    }
  },
  {
    key: "checkByFileType",
    value: function checkByFileType(fileChunk, avif) {
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