// _runtime/05000_sum.js
import { getDataView } from "04994_getDataView.js";
const require = arg1;
const module = arg2;
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
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let sum = c5;
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
        let tmp19 = module;
        let tmp20 = dependencyMap;
        let tmp21 = sum;
        let tmp22 = tmp2;
        let tmp23 = tmp3;
        let tmp24 = tmp4;
        let tmp25 = tmp5;
        let tmp26 = tmp6;
        let tmp27 = tmp7;
        let tmp28 = tmp8;
        let sum5 = tmp9;
        if (module(4997).USE_FILE) {
          let tmp30 = c19;
          if (byteLength.getUint16(sum) === c19) {
            break;
          }
        }
        if (tmp19(4997).USE_FILE) {
          let tmp31 = c20;
          if (byteLength.getUint16(sum) === c20) {
            sum = c7;
            sum = sum + c7;
            let uint16 = byteLength.getUint16(sum);
            let sum1 = tmp2;
            let tmp85 = tmp3;
            let tmp86 = tmp4;
            let sum4 = tmp5;
            let sum3 = tmp6;
            let sum2 = tmp7;
            let tmp90 = sum;
            let tmp91 = sum5;
            let tmp82 = c7;
          }
          sum = sum + (tmp82 + uint16);
          sum = sum1;
          sum = tmp85;
          sum = tmp86;
          sum = sum4;
          sum = sum3;
          sum = sum2;
          sum = tmp90;
          sum = tmp91;
          let tmp92 = c7;
          uint16 = byteLength.getUint16(sum + c7);
          let tmp93 = c14;
          sum1 = sum + c14;
          tmp85 = tmp3;
          tmp86 = tmp4;
          sum4 = tmp5;
          sum3 = tmp6;
          sum2 = tmp7;
          tmp90 = tmp8;
          tmp91 = sum5;
          tmp82 = c7;
        }
        if (tmp19(4997).USE_JFIF) {
          let length = JFIF.length;
          let tmp32 = JFIF;
          let tmp33 = c25;
          let tmp34 = byteLength.getUint16(sum) === c25;
          if (tmp34) {
            let tmp35 = require;
            let obj = getDataView;
            let tmp36 = c6;
            tmp34 = obj.getStringFromDataView(byteLength, sum + c6, length) === tmp32;
          }
          if (tmp34) {
            let tmp37 = c6;
            tmp34 = 0 === byteLength.getUint8(sum + c6 + length);
          }
          if (tmp34) {
            sum = c7;
            uint16 = byteLength.getUint16(sum + c7);
            sum = c8;
            sum2 = sum + c8;
            sum1 = tmp2;
            tmp85 = tmp3;
            tmp86 = tmp4;
            sum4 = tmp5;
            sum3 = tmp6;
            tmp90 = tmp8;
            tmp91 = sum5;
            tmp82 = c7;
          }
        }
        if (tmp19(4997).USE_EXIF) {
          let length2 = Exif.length;
          let tmp38 = Exif;
          let tmp39 = c26;
          let tmp40 = byteLength.getUint16(sum) === c26;
          if (tmp40) {
            let tmp41 = require;
            let obj1 = getDataView;
            let tmp42 = c6;
            tmp40 = obj1.getStringFromDataView(byteLength, sum + c6, length2) === tmp38;
          }
          if (tmp40) {
            let tmp43 = c6;
            tmp40 = 0 === byteLength.getUint8(sum + c6 + length2);
          }
          if (tmp40) {
            sum = c7;
            uint16 = byteLength.getUint16(sum + c7);
            sum = c9;
            sum3 = sum + c9;
            sum1 = tmp2;
            tmp85 = tmp3;
            tmp86 = tmp4;
            sum4 = tmp5;
            sum2 = tmp7;
            tmp90 = tmp8;
            tmp91 = sum5;
            tmp82 = c7;
          }
        }
        if (tmp19(4997).USE_XMP) {
          let tmp44 = c26;
          let tmp45 = byteLength.getUint16(sum) === c26;
          if (tmp45) {
            let tmp46 = length3;
            let tmp47 = require;
            let obj2 = getDataView;
            let tmp48 = c6;
            tmp45 = obj2.getStringFromDataView(byteLength, sum + c6, length3.length) === length3;
          }
          if (tmp45) {
            let items = tmp4;
            if (!tmp4) {
              items = [];
            }
            sum = c7;
            sum = byteLength.getUint16(sum + c7);
            obj = { dataOffset: null, length: null };
            sum = c11;
            obj[0] = sum + c11;
            obj[1] = sum - 31;
            sum = items.push(obj);
            tmp86 = items;
            sum1 = tmp2;
            tmp85 = tmp3;
            sum4 = tmp5;
            sum3 = tmp6;
            sum2 = tmp7;
            tmp90 = tmp8;
            tmp91 = sum5;
            uint16 = sum;
            tmp82 = c7;
          }
        }
        if (tmp19(4997).USE_XMP) {
          let tmp49 = c26;
          let tmp50 = byteLength.getUint16(sum) === c26;
          if (tmp50) {
            let tmp51 = length4;
            let tmp52 = require;
            let obj4 = getDataView;
            let tmp53 = c6;
            tmp50 = obj4.getStringFromDataView(byteLength, sum + c6, length4.length) === length4;
          }
          if (tmp50) {
            let items1 = tmp4;
            if (!tmp4) {
              items1 = [];
            }
            sum = c7;
            sum = byteLength.getUint16(sum + c7);
            obj = { dataOffset: null, length: null };
            sum = c12;
            obj[0] = sum + c12;
            obj[1] = sum - 77;
            sum = items1.push(obj);
            tmp86 = items1;
            sum1 = tmp2;
            tmp85 = tmp3;
            sum4 = tmp5;
            sum3 = tmp6;
            sum2 = tmp7;
            tmp90 = tmp8;
            tmp91 = sum5;
            uint16 = sum;
            tmp82 = c7;
          }
        }
        if (tmp19(4997).USE_IPTC) {
          length3 = length5.length;
          let tmp54 = length5;
          let tmp55 = c28;
          let tmp56 = byteLength.getUint16(sum) === c28;
          if (tmp56) {
            let tmp57 = require;
            let obj5 = getDataView;
            let tmp58 = c6;
            tmp56 = obj5.getStringFromDataView(byteLength, sum + c6, length3) === tmp54;
          }
          if (tmp56) {
            let tmp59 = c6;
            tmp56 = 0 === byteLength.getUint8(sum + c6 + length3);
          }
          if (tmp56) {
            sum = c7;
            uint16 = byteLength.getUint16(sum + c7);
            sum = c10;
            sum4 = sum + c10;
            sum1 = tmp2;
            tmp85 = tmp3;
            tmp86 = tmp4;
            sum3 = tmp6;
            sum2 = tmp7;
            tmp90 = tmp8;
            tmp91 = sum5;
            tmp82 = c7;
          }
        }
        if (tmp19(4997).USE_ICC) {
          let tmp60 = length;
          let tmp61 = c27;
          let tmp62 = byteLength.getUint16(sum) === c27;
          if (tmp62) {
            let tmp63 = require;
            let obj6 = getDataView;
            let tmp64 = c6;
            tmp62 = obj6.getStringFromDataView(byteLength, sum + c6, length.length) === tmp60;
          }
          if (tmp62) {
            let tmp94 = c7;
            let uint161 = byteLength.getUint16(sum + c7);
            let tmp98 = closure_16;
            let tmp96 = c13;
            let diff = uint161 - 16;
            sum = closure_17;
            let uint8 = byteLength.getUint8(sum + closure_16);
            let items2 = tmp3;
            sum = byteLength.getUint8(sum + closure_17);
            if (!tmp3) {
              items2 = [];
            }
            obj1 = { offset: null, length: null, chunkNumber: null, chunksTotal: null };
            obj1[0] = sum + tmp96;
            obj1[1] = diff;
            obj1[2] = uint8;
            obj1[3] = sum;
            sum = items2.push(obj1);
            tmp85 = items2;
            sum1 = tmp2;
            tmp86 = tmp4;
            sum4 = tmp5;
            sum3 = tmp6;
            sum2 = tmp7;
            tmp90 = tmp8;
            tmp91 = sum5;
            uint16 = uint161;
            tmp82 = tmp94;
          }
        }
        if (!tmp19(4997).USE_MPF) {
          let uint162 = byteLength.getUint16(sum);
          let tmp71 = c25;
          let tmp72 = uint162 >= c25;
          if (tmp72) {
            let tmp73 = c29;
            tmp72 = uint162 <= c29;
          }
          if (!tmp72) {
            let tmp74 = c30;
            tmp72 = uint162 === c30;
          }
          if (!tmp72) {
            let tmp75 = c19;
            tmp72 = uint162 === c19;
          }
          if (!tmp72) {
            let tmp76 = c20;
            tmp72 = uint162 === c20;
          }
          if (!tmp72) {
            let tmp77 = c21;
            tmp72 = uint162 === c21;
          }
          if (!tmp72) {
            let tmp78 = c22;
            tmp72 = uint162 === c22;
          }
          if (!tmp72) {
            let tmp79 = c23;
            tmp72 = uint162 === c23;
          }
          if (!tmp72) {
            let tmp80 = c24;
            tmp72 = uint162 === c24;
          }
          let getUint16 = byteLength.getUint16;
          if (tmp72) {
            tmp82 = c7;
            uint16 = getUint16(sum + c7);
            sum1 = tmp2;
            tmp85 = tmp3;
            tmp86 = tmp4;
            sum4 = tmp5;
            sum3 = tmp6;
            sum2 = tmp7;
            tmp90 = tmp8;
            tmp91 = sum5;
          } else {
            let tmp81 = c31;
            tmp10 = sum;
            tmp11 = tmp2;
            tmp12 = tmp3;
            tmp13 = tmp4;
            tmp14 = tmp5;
            tmp15 = tmp6;
            tmp16 = tmp7;
            tmp17 = tmp8;
            tmp18 = sum5;
            if (getUint16(sum) === c31) {
              sum = sum + 1;
              sum = tmp2;
              sum = tmp3;
              sum = tmp4;
              sum = tmp5;
              sum = tmp6;
              sum = tmp7;
              sum = tmp8;
              sum = sum5;
              sum = c6;
              tmp2 = tmp22;
              tmp3 = tmp23;
              tmp4 = tmp24;
              tmp5 = tmp25;
              tmp6 = tmp26;
              tmp7 = tmp27;
              tmp8 = tmp28;
              tmp9 = sum5;
              tmp10 = sum;
              tmp11 = tmp22;
              tmp12 = tmp23;
              tmp13 = tmp24;
              tmp14 = tmp25;
              tmp15 = tmp26;
              tmp16 = tmp27;
              tmp17 = tmp28;
              tmp18 = sum5;
            }
          }
        } else {
          let tmp65 = length2;
          let tmp66 = c27;
          let tmp67 = byteLength.getUint16(sum) === c27;
          if (tmp67) {
            let tmp68 = require;
            let obj7 = getDataView;
            let tmp69 = c6;
            tmp67 = obj7.getStringFromDataView(byteLength, sum + c6, length2.length) === tmp65;
          }
        }
      }
      sum = c7;
      sum5 = sum + c7;
      uint16 = byteLength.getUint16(sum5);
      sum1 = tmp2;
      tmp85 = tmp3;
      tmp86 = tmp4;
      sum4 = tmp5;
      sum3 = tmp6;
      sum2 = tmp7;
      tmp90 = tmp8;
      tmp91 = sum5;
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