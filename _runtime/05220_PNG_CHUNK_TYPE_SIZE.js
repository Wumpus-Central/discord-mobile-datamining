// === Module 5220: PNG_CHUNK_TYPE_SIZE ===

// Module 5220 (PNG_CHUNK_TYPE_SIZE)
import _mod5213 from "module_5213" /* 5213 */;
import _modDef5216 from "module_5216" /* 5216 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
let c3 = "\u0089PNG\r\n\u001A\n";
let c4 = 4;
let c5 = 4;
let c6 = 0;
let c7 = 4;
let c8 = 8;
let c9 = "XML:com.adobe.xmp\0";
const tEXt = "tEXt";
const iTXt = "iTXt";
const zTXt = "zTXt";
const pHYs = "pHYs";
const tIME = "tIME";
const eXIf = "eXIf";
const iCCP = "iCCP";

export default {
  isPngFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      tmp = _mod5213.getStringFromDataView(dataView, 0, u0089PNGrnu001An.length) === u0089PNGrnu001An;
    }
    return tmp;
  },
  findPngOffsets(byteLength, flag2) {
    let obj = { hasAppMarkers: false };
    let length = u0089PNGrnu001An.length;
    if (length + c4 + c5 <= byteLength.byteLength) {
      while (true) {
        if (_modDef5216.USE_PNG_FILE) {
          let obj1 = _mod5213;
          if ("IHDR" === obj1.getStringFromDataView(byteLength, length + c7, c5)) {
            obj.hasAppMarkers = true;
            obj.pngHeaderOffset = length + c8;
            let sum = length + (byteLength.getUint32(length + c6) + c4 + c5 + 4);
            length = sum;
            if (sum + c4 + c5 > byteLength.byteLength) {
              break;
            }
          }
        }
        if (_modDef5216.USE_XMP) {
          let obj3 = _mod5213;
          let tmp11 = obj3.getStringFromDataView(byteLength, length + c7, c5) === iTXt;
          if (tmp11) {
            let tmp7Result = _mod5213;
            tmp11 = tmp7Result.getStringFromDataView(byteLength, length + c8, XMLcomadobexmp0.length) === XMLcomadobexmp0;
          }
          if (tmp11) {
            let sum1 = length + (c8 + XMLcomadobexmp0.length + 1 + 1);
            let num = 0;
            let tmp45 = sum1;
            let tmp46 = sum1;
            if (sum1 < byteLength.byteLength) {
              while (true) {
                let sum2 = num;
                if (0 === byteLength.getUint8(tmp45)) {
                  sum2 = num + 1;
                }
                let sum3 = tmp45 + 1;
                tmp46 = sum3;
                if (sum2 >= 2) {
                  break;
                } else {
                  num = sum2;
                  tmp45 = sum3;
                  tmp46 = sum3;
                  if (sum3 >= byteLength.byteLength) {
                    break;
                  }
                }
              }
            }
            if (undefined !== tmp46) {
              obj.hasAppMarkers = true;
              obj = { dataOffset: tmp46, length: byteLength.getUint32(length + c6) - (tmp46 - (length + c8)) };
              let items = [obj];
              obj.xmpChunks = items;
            }
          }
        }
        let obj5 = _mod5213;
        let stringFromDataView = obj5.getStringFromDataView(byteLength, length + c7, c5);
        let tmp19 = stringFromDataView === tEXt;
        if (!tmp19) {
          tmp19 = stringFromDataView === iTXt;
        }
        if (!tmp19) {
          let tmp22 = stringFromDataView === zTXt && flag2;
          tmp19 = tmp22;
        }
        if (tmp19) {
          obj.hasAppMarkers = true;
          let tmp14Result = _mod5213;
          let stringFromDataView1 = tmp14Result.getStringFromDataView(byteLength, length + c7, c5);
          if (!obj.pngTextChunks) {
            obj.pngTextChunks = [];
          }
          let pngTextChunks = obj.pngTextChunks;
          obj = { length: byteLength.getUint32(length + c6), type: stringFromDataView1, offset: length + c8 };
          let arr = pngTextChunks.push(obj);
        } else {
          tmp14Result = _mod5213;
          if (tmp14Result.getStringFromDataView(byteLength, length + c7, c5) === eXIf) {
            obj.hasAppMarkers = true;
            obj.tiffHeaderOffset = length + c8;
          } else {
            if (_modDef5216.USE_ICC) {
              if (flag2) {
                let tmp14Result1 = _mod5213;
                if (tmp14Result1.getStringFromDataView(byteLength, length + c7, c5) === iCCP) {
                  obj.hasAppMarkers = true;
                  let sum4 = length + c8;
                  let uint32 = byteLength.getUint32(length + c6);
                  let tmp14Result2 = _mod5213;
                  let nullTerminatedStringFromDataView = tmp14Result2.getNullTerminatedStringFromDataView(byteLength, sum4);
                  let sum5 = sum4 + (nullTerminatedStringFromDataView.length + 1);
                  let uint8 = byteLength.getUint8(sum5);
                  if (!obj.iccChunks) {
                    obj.iccChunks = [];
                  }
                  let sum6 = sum5 + 1;
                  let iccChunks = obj.iccChunks;
                  obj1 = { offset: sum6, length: uint32 - (sum6 - sum4), chunkNumber: 1, chunksTotal: 1, profileName: nullTerminatedStringFromDataView, compressionMethod: uint8 };
                  arr = iccChunks.push(obj1);
                }
              }
            }
            let items1 = [pHYs, tIME];
            let tmp14Result3 = _mod5213;
            if (items1.includes(tmp14Result3.getStringFromDataView(byteLength, length + c7, c5))) {
              obj.hasAppMarkers = true;
              if (!obj.pngChunkOffsets) {
                obj.pngChunkOffsets = [];
              }
              let pngChunkOffsets = obj.pngChunkOffsets;
              let arr1 = pngChunkOffsets.push(length + c6);
            }
          }
        }
      }
    }
    return obj;
  }
};
export const PNG_CHUNK_TYPE_SIZE = 4;
export const PNG_CHUNK_LENGTH_OFFSET = 0;
export const PNG_CHUNK_TYPE_OFFSET = 4;
export const PNG_CHUNK_DATA_OFFSET = 8;
export const TYPE_TEXT = "tEXt";
export const TYPE_ITXT = "iTXt";
export const TYPE_ZTXT = "zTXt";
export const TYPE_PHYS = "pHYs";
export const TYPE_TIME = "tIME";
export const TYPE_EXIF = "eXIf";
export const TYPE_ICCP = "iCCP";