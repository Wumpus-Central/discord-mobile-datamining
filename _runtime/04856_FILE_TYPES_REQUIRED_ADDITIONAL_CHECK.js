// _runtime/04856_FILE_TYPES_REQUIRED_ADDITIONAL_CHECK.js
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";

const FileTypes = require;
class FileTypes {
  constructor() {
    tmp = outer1_2(this, FileTypes);
    return;
  }
}
let items = [
  {
    key: "getInfoByName",
    value: function getInfoByName(key10027) {
      return FileTypes(4854).fetchFromObject(FileTypes, key10027.toUpperCase());
    }
  },
  {
    key: "getSignaturesByName",
    value: function getSignaturesByName(item10079) {
      return FileTypes(4854).fetchFromObject(FileTypes, item10079.toUpperCase()).signatures;
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
          if (!FileTypes(4857).isFLV(fileChunk)) {
            let str8 = "mp4";
            if (tmp8(4857).isM4V(fileChunk)) {
              str8 = "mp4";
              if (!tmp8(4857).isHEIC(fileChunk)) {
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
        const result = FileTypes(4854).findMatroskaDocTypeElements(fileChunk);
        let str2 = "mkv";
        if ("mkv" !== result) {
          let str4;
          if ("webm" === result) {
            if (tmp3(4857).isWEBM(fileChunk)) {
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
          if (FileTypes(4854).isAvifStringIncluded(fileChunk)) {
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
_moduleResult.AAC = require("AudioTypes").AudioTypes.AAC;
_moduleResult.AMR = require("AudioTypes").AudioTypes.AMR;
_moduleResult.FLAC = require("AudioTypes").AudioTypes.FLAC;
_moduleResult.M4A = require("AudioTypes").AudioTypes.M4A;
_moduleResult.MP3 = require("AudioTypes").AudioTypes.MP3;
_moduleResult.WAV = require("AudioTypes").AudioTypes.WAV;
_moduleResult.AVIF = require("ImageTypes").ImageTypes.AVIF;
_moduleResult.BMP = require("ImageTypes").ImageTypes.BMP;
_moduleResult.BPG = require("ImageTypes").ImageTypes.BPG;
_moduleResult.CR2 = require("ImageTypes").ImageTypes.CR2;
_moduleResult.EXR = require("ImageTypes").ImageTypes.EXR;
_moduleResult.GIF = require("ImageTypes").ImageTypes.GIF;
_moduleResult.ICO = require("ImageTypes").ImageTypes.ICO;
_moduleResult.JPEG = require("ImageTypes").ImageTypes.JPEG;
_moduleResult.PBM = require("ImageTypes").ImageTypes.PBM;
_moduleResult.PGM = require("ImageTypes").ImageTypes.PGM;
_moduleResult.PNG = require("ImageTypes").ImageTypes.PNG;
_moduleResult.PPM = require("ImageTypes").ImageTypes.PPM;
_moduleResult.PSD = require("ImageTypes").ImageTypes.PSD;
_moduleResult.WEBP = require("ImageTypes").ImageTypes.WEBP;
_moduleResult.HEIC = require("ImageTypes").ImageTypes.HEIC;
_moduleResult.AVI = require("VideoTypes").VideoTypes.AVI;
_moduleResult.FLV = require("VideoTypes").VideoTypes.FLV;
_moduleResult.M4V = require("VideoTypes").VideoTypes.M4V;
_moduleResult.MKV = require("VideoTypes").VideoTypes.MKV;
_moduleResult.MOV = require("VideoTypes").VideoTypes.MOV;
_moduleResult.MP4 = require("VideoTypes").VideoTypes.MP4;
_moduleResult.OGG = require("VideoTypes").VideoTypes.OGG;
_moduleResult.SWF = require("VideoTypes").VideoTypes.SWF;
_moduleResult.WEBM = require("VideoTypes").VideoTypes.WEBM;
_moduleResult._7Z = require("CompressedTypes").CompressedTypes._7Z;
_moduleResult.LZH = require("CompressedTypes").CompressedTypes.LZH;
_moduleResult.RAR = require("CompressedTypes").CompressedTypes.RAR;
_moduleResult.ZIP = require("CompressedTypes").CompressedTypes.ZIP;
_moduleResult.BLEND = require("OtherTypes").OtherTypes.BLEND;
_moduleResult.DOC = require("OtherTypes").OtherTypes.DOC;
_moduleResult.ELF = require("OtherTypes").OtherTypes.ELF;
_moduleResult.EXE = require("OtherTypes").OtherTypes.EXE;
_moduleResult.INDD = require("OtherTypes").OtherTypes.INDD;
_moduleResult.MACHO = require("OtherTypes").OtherTypes.MACHO;
_moduleResult.ORC = require("OtherTypes").OtherTypes.ORC;
_moduleResult.PARQUET = require("OtherTypes").OtherTypes.PARQUET;
_moduleResult.PCAP = require("OtherTypes").OtherTypes.PCAP;
_moduleResult.PDF = require("OtherTypes").OtherTypes.PDF;
_moduleResult.PS = require("OtherTypes").OtherTypes.PS;
_moduleResult.RTF = require("OtherTypes").OtherTypes.RTF;
_moduleResult.SQLITE = require("OtherTypes").OtherTypes.SQLITE;
_moduleResult.STL = require("OtherTypes").OtherTypes.STL;
_moduleResult.TTF = require("OtherTypes").OtherTypes.TTF;

export const FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = ["m4v", "flv", "mp4", "mkv", "webm", "avif", "heic"];
export const FileTypes = _moduleResult;