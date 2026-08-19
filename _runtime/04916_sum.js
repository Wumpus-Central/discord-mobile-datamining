// _runtime/04916_sum.js
import getDataView from "04910_getDataView.js";
import _modDef4913 from "metro/04913__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
let c3 = 2;
let c4 = 65496;
let c5 = 2;
let c6 = 4;
let c7 = 2;
let c8 = 2;
let c9 = 10;
let c10 = 18;
let c11 = 33;
let c12 = 79;
let c13 = 18;
let c14 = 8;
let c15 = "ICC_PROFILE\0";
let sum = 4 + "ICC_PROFILE\0".length;
let closure_17 = sum + 1;
let c18 = "MPF\0";
let c19 = 65472;
let c20 = 65474;
let c21 = 65476;
let c22 = 65499;
let c23 = 65501;
let c24 = 65498;
let c25 = 65504;
let c26 = 65505;
let c27 = 65506;
let c28 = 65517;
let c29 = 65519;
let c30 = 65534;
let c31 = 65535;
const JFIF = "JFIF";
const Exif = "Exif";
let c34 = "http://ns.adobe.com/xap/1.0/\0";
let c35 = "http://ns.adobe.com/xmp/extension/\0";
let c36 = "Photoshop 3.0";
arg5.default = {
  isJpegFile(byteLength) {
    let tmp = byteLength;
    if (tmp) {
      tmp = byteLength.byteLength >= c3;
    }
    if (tmp) {
      tmp = byteLength.getUint16(0) === c4;
    }
    return tmp;
  },
  findJpegOffsets(byteLength) {
    let tmp17;
    let tmp2;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp = c5;
    let tmp10 = c5;
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp18;
    if (c5 + c6 + 5 <= byteLength.byteLength) {
      while (true) {
        let tmp22 = tmp2;
        let tmp23 = tmp3;
        let tmp24 = tmp4;
        let tmp25 = tmp5;
        let tmp26 = tmp6;
        let tmp27 = tmp7;
        let tmp28 = tmp8;
        let sum7 = tmp9;
        if (_modDef4913.USE_FILE) {
          if (byteLength.getUint16(tmp) === c19) {
            break;
          }
        }
        if (_modDef4913.USE_FILE) {
          if (byteLength.getUint16(tmp) === c20) {
            sum = tmp + c7;
            let uint16 = byteLength.getUint16(sum);
            let sum2 = tmp2;
            let sum5 = tmp5;
            let sum4 = tmp6;
            let sum3 = tmp7;
            let tmp82 = c7;
          }
          let sum1 = tmp + (tmp82 + uint16);
          uint16 = byteLength.getUint16(tmp + c7);
          sum2 = tmp + c14;
          sum5 = tmp5;
          sum4 = tmp6;
          sum3 = tmp7;
          tmp82 = c7;
        }
        if (_modDef4913.USE_JFIF) {
          let length = JFIF.length;
          let tmp34 = byteLength.getUint16(tmp) === c25;
          if (tmp34) {
            let obj = getDataView;
            tmp34 = obj.getStringFromDataView(byteLength, tmp + c6, length) === JFIF;
          }
          if (tmp34) {
            tmp34 = 0 === byteLength.getUint8(tmp + c6 + length);
          }
          if (tmp34) {
            uint16 = byteLength.getUint16(tmp + c7);
            sum3 = tmp + c8;
            sum2 = tmp2;
            sum5 = tmp5;
            sum4 = tmp6;
            tmp82 = c7;
          }
        }
        if (_modDef4913.USE_EXIF) {
          let length2 = Exif.length;
          let tmp40 = byteLength.getUint16(tmp) === c26;
          if (tmp40) {
            obj1 = getDataView;
            tmp40 = obj1.getStringFromDataView(byteLength, tmp + c6, length2) === Exif;
          }
          if (tmp40) {
            tmp40 = 0 === byteLength.getUint8(tmp + c6 + length2);
          }
          if (tmp40) {
            uint16 = byteLength.getUint16(tmp + c7);
            sum4 = tmp + c9;
            sum2 = tmp2;
            sum5 = tmp5;
            sum3 = tmp7;
            tmp82 = c7;
          }
        }
        if (_modDef4913.USE_XMP) {
          let tmp45 = byteLength.getUint16(tmp) === c26;
          if (tmp45) {
            let obj2 = getDataView;
            tmp45 = obj2.getStringFromDataView(byteLength, tmp + c6, length3.length) === length3;
          }
          if (tmp45) {
            let items = tmp4;
            if (!tmp4) {
              items = [];
            }
            let uint161 = byteLength.getUint16(tmp + c7);
            obj = { dataOffset: null, length: null };
            obj[0] = tmp + c11;
            obj[1] = uint161 - 31;
            let arr = items.push(obj);
            sum2 = tmp2;
            sum5 = tmp5;
            sum4 = tmp6;
            sum3 = tmp7;
            uint16 = uint161;
            tmp82 = c7;
          }
        }
        if (_modDef4913.USE_XMP) {
          let tmp50 = byteLength.getUint16(tmp) === c26;
          if (tmp50) {
            let obj4 = getDataView;
            tmp50 = obj4.getStringFromDataView(byteLength, tmp + c6, length4.length) === length4;
          }
          if (tmp50) {
            let items1 = tmp4;
            if (!tmp4) {
              items1 = [];
            }
            let uint162 = byteLength.getUint16(tmp + c7);
            obj = { dataOffset: null, length: null };
            obj[0] = tmp + c12;
            obj[1] = uint162 - 77;
            arr = items1.push(obj);
            sum2 = tmp2;
            sum5 = tmp5;
            sum4 = tmp6;
            sum3 = tmp7;
            uint16 = uint162;
            tmp82 = c7;
          }
        }
        if (_modDef4913.USE_IPTC) {
          length3 = length5.length;
          let tmp56 = byteLength.getUint16(tmp) === c28;
          if (tmp56) {
            let obj5 = getDataView;
            tmp56 = obj5.getStringFromDataView(byteLength, tmp + c6, length3) === length5;
          }
          if (tmp56) {
            tmp56 = 0 === byteLength.getUint8(tmp + c6 + length3);
          }
          if (tmp56) {
            uint16 = byteLength.getUint16(tmp + c7);
            sum5 = tmp + c10;
            sum2 = tmp2;
            sum4 = tmp6;
            sum3 = tmp7;
            tmp82 = c7;
          }
        }
        if (_modDef4913.USE_ICC) {
          let tmp60 = length;
          let tmp62 = byteLength.getUint16(tmp) === c27;
          if (tmp62) {
            let obj6 = getDataView;
            tmp62 = obj6.getStringFromDataView(byteLength, tmp + c6, length.length) === tmp60;
          }
          if (tmp62) {
            let uint163 = byteLength.getUint16(tmp + c7);
            let diff = uint163 - 16;
            let uint8 = byteLength.getUint8(tmp + closure_16);
            let items2 = tmp3;
            let uint81 = byteLength.getUint8(tmp + closure_17);
            if (!tmp3) {
              items2 = [];
            }
            obj1 = { offset: null, length: null, chunkNumber: null, chunksTotal: null };
            obj1[0] = tmp + c13;
            obj1[1] = diff;
            obj1[2] = uint8;
            obj1[3] = uint81;
            let arr1 = items2.push(obj1);
            sum2 = tmp2;
            sum5 = tmp5;
            sum4 = tmp6;
            sum3 = tmp7;
            uint16 = uint163;
            tmp82 = c7;
          }
        }
        if (!_modDef4913.USE_MPF) {
          let uint164 = byteLength.getUint16(tmp);
          let tmp72 = uint164 >= c25;
          if (tmp72) {
            tmp72 = uint164 <= c29;
          }
          if (!tmp72) {
            tmp72 = uint164 === c30;
          }
          if (!tmp72) {
            tmp72 = uint164 === c19;
          }
          if (!tmp72) {
            tmp72 = uint164 === c20;
          }
          if (!tmp72) {
            tmp72 = uint164 === c21;
          }
          if (!tmp72) {
            tmp72 = uint164 === c22;
          }
          if (!tmp72) {
            tmp72 = uint164 === c23;
          }
          if (!tmp72) {
            tmp72 = uint164 === c24;
          }
          let getUint16 = byteLength.getUint16;
          if (tmp72) {
            tmp82 = c7;
            uint16 = getUint16(tmp + c7);
            sum2 = tmp2;
            sum5 = tmp5;
            sum4 = tmp6;
            sum3 = tmp7;
          } else {
            tmp10 = tmp;
            tmp11 = tmp2;
            tmp12 = tmp3;
            tmp13 = tmp4;
            tmp14 = tmp5;
            tmp15 = tmp6;
            tmp16 = tmp7;
            tmp17 = tmp8;
            tmp18 = sum7;
            if (getUint16(tmp) === c31) {
              let sum6 = tmp + 1;
              tmp = sum6;
              tmp2 = tmp22;
              tmp3 = tmp23;
              tmp4 = tmp24;
              tmp5 = tmp25;
              tmp6 = tmp26;
              tmp7 = tmp27;
              tmp8 = tmp28;
              tmp9 = sum7;
              tmp10 = sum6;
              tmp11 = tmp22;
              tmp12 = tmp23;
              tmp13 = tmp24;
              tmp14 = tmp25;
              tmp15 = tmp26;
              tmp16 = tmp27;
              tmp17 = tmp28;
              tmp18 = sum7;
            }
          }
        } else {
          let tmp65 = length2;
          let tmp67 = byteLength.getUint16(tmp) === c27;
          if (tmp67) {
            let obj7 = getDataView;
            tmp67 = obj7.getStringFromDataView(byteLength, tmp + c6, length2.length) === tmp65;
          }
        }
      }
      sum7 = tmp + c7;
      uint16 = byteLength.getUint16(sum7);
      sum2 = tmp2;
      sum5 = tmp5;
      sum4 = tmp6;
      sum3 = tmp7;
      tmp82 = c7;
    }
    obj2 = { hasAppMarkers: tmp10 > c5, fileDataOffset: null, jfifDataOffset: null, tiffHeaderOffset: null, iptcDataOffset: null, xmpChunks: null, iccChunks: null, mpfDataOffset: null };
    if (!tmp18) {
      tmp18 = tmp17;
    }
    obj2[1] = tmp18;
    obj2[2] = tmp16;
    obj2[3] = tmp15;
    obj2[4] = tmp14;
    obj2[5] = tmp13;
    obj2[6] = tmp12;
    obj2[7] = tmp11;
    return obj2;
  }
};