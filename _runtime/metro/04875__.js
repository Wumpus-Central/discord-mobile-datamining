// === Module 4875: ? ===

// Module 4875
const require = arg1;
const module = arg2;
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
arg5.default = {
  isPngFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      tmp = require(4868) /* getDataView */.getStringFromDataView(dataView, 0, u0089PNGrnu001An.length) === u0089PNGrnu001An;
      const obj = require(4868) /* getDataView */;
    }
    return tmp;
  },
  findPngOffsets(byteLength, flag2) {
    let obj = { hasAppMarkers: false };
    let length = u0089PNGrnu001An.length;
    if (length + c4 + c5 <= byteLength.byteLength) {
      while (true) {
        let tmp = module;
        let tmp2 = dependencyMap;
        let tmp3 = length;
        if (module(4871).USE_PNG_FILE) {
          let tmp4 = require;
          let obj1 = require(4868) /* getDataView */;
          let tmp5 = c7;
          let tmp6 = c5;
          if ("IHDR" === obj1.getStringFromDataView(byteLength, length + c7, c5)) {
            obj.hasAppMarkers = true;
            let tmp53 = c8;
            obj.pngHeaderOffset = length + c8;
            let tmp54 = c6;
            let tmp55 = c4;
            let tmp56 = c5;
            let sum = length + (byteLength.getUint32(length + c6) + c4 + c5 + 4);
            length = sum;
            if (sum + c4 + c5 > byteLength.byteLength) {
              break;
            }
          }
        }
        if (tmp(4871).USE_XMP) {
          let tmp7 = require;
          let obj3 = require(4868) /* getDataView */;
          let tmp8 = c7;
          let tmp9 = c5;
          let tmp10 = iTXt;
          let tmp11 = obj3.getStringFromDataView(byteLength, length + c7, c5) === iTXt;
          if (tmp11) {
            let tmp7Result = tmp7(4868);
            let tmp12 = c8;
            let tmp13 = XMLcomadobexmp0;
            tmp11 = tmp7Result.getStringFromDataView(byteLength, length + c8, XMLcomadobexmp0.length) === XMLcomadobexmp0;
          }
          if (tmp11) {
            let tmp42 = c8;
            let tmp43 = XMLcomadobexmp0;
            let sum1 = length + (c8 + XMLcomadobexmp0.length + 1 + 1);
            let num = 0;
            let tmp45 = sum1;
            let num2 = 0;
            let tmp46 = sum1;
            if (sum1 < byteLength.byteLength) {
              while (true) {
                let tmp47 = num;
                let tmp48 = tmp45;
                let sum2 = num;
                if (0 === byteLength.getUint8(tmp45)) {
                  sum2 = num + 1;
                }
                let sum3 = tmp45 + 1;
                num2 = sum2;
                tmp46 = sum3;
                if (sum2 >= 2) {
                  break;
                } else {
                  num = sum2;
                  tmp45 = sum3;
                  num2 = sum2;
                  tmp46 = sum3;
                  if (sum3 >= byteLength.byteLength) {
                    break;
                  }
                }
              }
            }
            if (undefined !== tmp46) {
              obj.hasAppMarkers = true;
              obj = { dataOffset: null, length: null };
              obj[0] = tmp46;
              let tmp51 = c6;
              let tmp52 = c8;
              obj[1] = byteLength.getUint32(length + c6) - (tmp46 - (length + c8));
              let items = [obj];
              obj.xmpChunks = items;
            }
          }
        }
        let tmp14 = require;
        let obj5 = require(4868) /* getDataView */;
        let tmp15 = c7;
        let tmp16 = c5;
        let stringFromDataView = obj5.getStringFromDataView(byteLength, length + c7, c5);
        let tmp18 = tEXt;
        let tmp19 = stringFromDataView === tEXt;
        if (!tmp19) {
          let tmp20 = iTXt;
          tmp19 = stringFromDataView === iTXt;
        }
        if (!tmp19) {
          let tmp21 = zTXt;
          let tmp22 = stringFromDataView === zTXt && flag2;
          tmp19 = tmp22;
        }
        if (tmp19) {
          obj.hasAppMarkers = true;
          let tmp14Result = tmp14(4868);
          let stringFromDataView1 = tmp14Result.getStringFromDataView(byteLength, length + tmp15, tmp16);
          if (!obj.pngTextChunks) {
            obj.pngTextChunks = [];
          }
          let pngTextChunks = obj.pngTextChunks;
          obj = { length: null, type: null, offset: null };
          let tmp39 = c6;
          obj[0] = byteLength.getUint32(length + c6);
          obj[1] = stringFromDataView1;
          let tmp40 = c8;
          obj[2] = length + c8;
          let arr = pngTextChunks.push(obj);
        } else {
          tmp14Result = tmp14(4868);
          let tmp23 = eXIf;
          if (tmp14Result.getStringFromDataView(byteLength, length + tmp15, tmp16) === eXIf) {
            obj.hasAppMarkers = true;
            let tmp37 = c8;
            obj.tiffHeaderOffset = length + c8;
          } else {
            if (tmp(4871).USE_ICC) {
              if (flag2) {
                let tmp14Result1 = tmp14(4868);
                let tmp24 = iCCP;
                if (tmp14Result1.getStringFromDataView(byteLength, length + tmp15, tmp16) === iCCP) {
                  obj.hasAppMarkers = true;
                  let tmp29 = c6;
                  let tmp31 = c8;
                  let sum4 = length + c8;
                  let uint32 = byteLength.getUint32(length + c6);
                  let tmp14Result2 = tmp14(4868);
                  let nullTerminatedStringFromDataView = tmp14Result2.getNullTerminatedStringFromDataView(byteLength, sum4);
                  let sum5 = sum4 + (nullTerminatedStringFromDataView.length + 1);
                  let uint8 = byteLength.getUint8(sum5);
                  if (!obj.iccChunks) {
                    obj.iccChunks = [];
                  }
                  let sum6 = sum5 + 1;
                  let iccChunks = obj.iccChunks;
                  obj1 = { offset: null, length: null, chunkNumber: 1, chunksTotal: 1, profileName: null, compressionMethod: null };
                  obj1[0] = sum6;
                  obj1[1] = uint32 - (sum6 - sum4);
                  obj1[4] = nullTerminatedStringFromDataView;
                  obj1[5] = uint8;
                  arr = iccChunks.push(obj1);
                }
              }
            }
            let tmp25 = pHYs;
            let items1 = [pHYs, ];
            let tmp26 = tIME;
            items1[1] = tIME;
            let tmp14Result3 = tmp14(4868);
            if (items1.includes(tmp14Result3.getStringFromDataView(byteLength, length + tmp15, tmp16))) {
              obj.hasAppMarkers = true;
              if (!obj.pngChunkOffsets) {
                obj.pngChunkOffsets = [];
              }
              let pngChunkOffsets = obj.pngChunkOffsets;
              let tmp27 = c6;
              let arr1 = pngChunkOffsets.push(length + c6);
            }
          }
        }
      }
    }
    return obj;
  }
};
arg5.PNG_CHUNK_TYPE_SIZE = 4;
arg5.PNG_CHUNK_LENGTH_OFFSET = 0;
arg5.PNG_CHUNK_TYPE_OFFSET = 4;
arg5.PNG_CHUNK_DATA_OFFSET = 8;
arg5.TYPE_TEXT = "tEXt";
arg5.TYPE_ITXT = "iTXt";
arg5.TYPE_ZTXT = "zTXt";
arg5.TYPE_PHYS = "pHYs";
arg5.TYPE_TIME = "tIME";
arg5.TYPE_EXIF = "eXIf";
arg5.TYPE_ICCP = "iCCP";