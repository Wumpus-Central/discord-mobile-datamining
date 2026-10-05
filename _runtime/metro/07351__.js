// _runtime/metro/07351__.js
import _mod7345 from "07345__.js";
import _modDef7348 from "07348__.js";

let length, length2, length3, length4, length5;

let obj = {
  isJpegFile(byteLength) {
    const tmp = byteLength && byteLength.byteLength >= c3 && byteLength.getUint16(0) === c4;
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
        let tmp9;
        let uint16;
        let sum6;
        let tmp85;
        let tmp86;
        let sum5;
        let sum4;
        let sum3;
        let tmp90;
        let tmp91;
        let tmp82;
        let sum1;
        let tmp122;
        let tmp123;
        let tmp124;
        let tmp125;
        let tmp126;
        let tmp127;
        let tmp128;
        let tmp129;
        if (_modDef7348.USE_FILE) {
          if (byteLength.getUint16(tmp) === c19) {
            sum = tmp + c7;
            uint16 = byteLength.getUint16(sum);
            sum6 = tmp2;
            tmp85 = tmp3;
            tmp86 = tmp4;
            sum5 = tmp5;
            sum4 = tmp6;
            sum3 = tmp7;
            tmp90 = tmp8;
            tmp91 = sum;
            tmp82 = c7;
            sum1 = tmp + (tmp82 + uint16);
            tmp122 = sum6;
            tmp123 = tmp85;
            tmp124 = tmp86;
            tmp125 = sum5;
            tmp126 = sum4;
            tmp127 = sum3;
            tmp128 = tmp90;
            tmp129 = tmp91;
            tmp = sum1;
            tmp2 = tmp122;
            tmp3 = tmp123;
            tmp4 = tmp124;
            tmp5 = tmp125;
            tmp6 = tmp126;
            tmp7 = tmp127;
            tmp8 = tmp128;
            tmp9 = tmp129;
            tmp10 = sum1;
            tmp11 = tmp122;
            tmp12 = tmp123;
            tmp13 = tmp124;
            tmp14 = tmp125;
            tmp15 = tmp126;
            tmp16 = tmp127;
            tmp17 = tmp128;
            tmp18 = tmp129;
            if (sum1 + c6 + 5 > byteLength.byteLength) {
              break;
            }
          }
        }
        if (_modDef7348.USE_FILE) {
          if (byteLength.getUint16(tmp) === c20) {
            let sum2 = tmp + c7;
            uint16 = byteLength.getUint16(sum2);
            sum6 = tmp2;
            tmp85 = tmp3;
            tmp86 = tmp4;
            sum5 = tmp5;
            sum4 = tmp6;
            sum3 = tmp7;
            tmp90 = sum2;
            tmp91 = tmp9;
            tmp82 = c7;
          }
        }
        if (_modDef7348.USE_JFIF) {
          length = JFIF.length;
          let tmp34 = byteLength.getUint16(tmp) === c25;
          if (tmp34) {
            let obj = _mod7345;
            tmp34 = obj.getStringFromDataView(byteLength, tmp + c6, length) === JFIF;
          }
          if (tmp34) {
            tmp34 = 0 === byteLength.getUint8(tmp + c6 + length);
          }
          if (tmp34) {
            uint16 = byteLength.getUint16(tmp + c7);
            sum3 = tmp + c8;
            sum6 = tmp2;
            tmp85 = tmp3;
            tmp86 = tmp4;
            sum5 = tmp5;
            sum4 = tmp6;
            tmp90 = tmp8;
            tmp91 = tmp9;
            tmp82 = c7;
          }
        }
        if (_modDef7348.USE_EXIF) {
          length2 = Exif.length;
          let tmp40 = byteLength.getUint16(tmp) === c26;
          if (tmp40) {
            let obj2 = _mod7345;
            tmp40 = obj2.getStringFromDataView(byteLength, tmp + c6, length2) === Exif;
          }
          if (tmp40) {
            tmp40 = 0 === byteLength.getUint8(tmp + c6 + length2);
          }
          if (tmp40) {
            uint16 = byteLength.getUint16(tmp + c7);
            sum4 = tmp + c9;
            sum6 = tmp2;
            tmp85 = tmp3;
            tmp86 = tmp4;
            sum5 = tmp5;
            sum3 = tmp7;
            tmp90 = tmp8;
            tmp91 = tmp9;
            tmp82 = c7;
          }
        }
        if (_modDef7348.USE_XMP) {
          let tmp45 = byteLength.getUint16(tmp) === c26;
          if (tmp45) {
            length3 = length3.length;
            let obj3 = _mod7345;
            tmp45 = obj3.getStringFromDataView(byteLength, tmp + c6, length3) === length3;
          }
          if (tmp45) {
            let arr3 = tmp4 || [];
            let uint161 = byteLength.getUint16(tmp + c7);
            let obj8 = { dataOffset: tmp + c11, length: uint161 - 31 };
            let arr = arr3.push(obj8);
            tmp86 = arr3;
            sum6 = tmp2;
            tmp85 = tmp3;
            sum5 = tmp5;
            sum4 = tmp6;
            sum3 = tmp7;
            tmp90 = tmp8;
            tmp91 = tmp9;
            uint16 = uint161;
            tmp82 = c7;
          }
        }
        if (_modDef7348.USE_XMP) {
          let tmp50 = byteLength.getUint16(tmp) === c26;
          if (tmp50) {
            length4 = length4.length;
            let obj4 = _mod7345;
            tmp50 = obj4.getStringFromDataView(byteLength, tmp + c6, length4) === length4;
          }
          if (tmp50) {
            let arr2 = tmp4 || [];
            let uint162 = byteLength.getUint16(tmp + c7);
            let obj9 = { dataOffset: tmp + c12, length: uint162 - 77 };
            let arr6 = arr2.push(obj9);
            tmp86 = arr2;
            sum6 = tmp2;
            tmp85 = tmp3;
            sum5 = tmp5;
            sum4 = tmp6;
            sum3 = tmp7;
            tmp90 = tmp8;
            tmp91 = tmp9;
            uint16 = uint162;
            tmp82 = c7;
          }
        }
        if (_modDef7348.USE_IPTC) {
          length5 = length5.length;
          let tmp54 = length5;
          let tmp56 = byteLength.getUint16(tmp) === c28;
          if (tmp56) {
            let obj5 = _mod7345;
            tmp56 = obj5.getStringFromDataView(byteLength, tmp + c6, length5) === tmp54;
          }
          if (tmp56) {
            tmp56 = 0 === byteLength.getUint8(tmp + c6 + length5);
          }
          if (tmp56) {
            uint16 = byteLength.getUint16(tmp + c7);
            sum5 = tmp + c10;
            sum6 = tmp2;
            tmp85 = tmp3;
            tmp86 = tmp4;
            sum4 = tmp6;
            sum3 = tmp7;
            tmp90 = tmp8;
            tmp91 = tmp9;
            tmp82 = c7;
          }
        }
        if (_modDef7348.USE_ICC) {
          let tmp60 = length;
          let length6 = length.length;
          let tmp62 = byteLength.getUint16(tmp) === c27;
          if (tmp62) {
            let obj6 = _mod7345;
            tmp62 = obj6.getStringFromDataView(byteLength, tmp + c6, length6) === tmp60;
          }
          if (tmp62) {
            let uint163 = byteLength.getUint16(tmp + c7);
            let diff = uint163 - 16;
            let uint8 = byteLength.getUint8(tmp + sum);
            let items = tmp3;
            let uint81 = byteLength.getUint8(tmp + closure_17);
            if (!tmp3) {
              items = [];
            }
            let obj10 = { offset: tmp + c13, length: diff, chunkNumber: uint8, chunksTotal: uint81 };
            let arr7 = items.push(obj10);
            tmp85 = items;
            sum6 = tmp2;
            tmp86 = tmp4;
            sum5 = tmp5;
            sum4 = tmp6;
            sum3 = tmp7;
            tmp90 = tmp8;
            tmp91 = tmp9;
            uint16 = uint163;
            tmp82 = c7;
          }
        }
        if (_modDef7348.USE_MPF) {
          let tmp65 = length2;
          let length7 = length2.length;
          let tmp67 = byteLength.getUint16(tmp) === c27;
          if (tmp67) {
            let obj7 = _mod7345;
            tmp67 = obj7.getStringFromDataView(byteLength, tmp + c6, length7) === tmp65;
          }
          if (tmp67) {
            uint16 = byteLength.getUint16(tmp + c7);
            sum6 = tmp + c14;
            tmp85 = tmp3;
            tmp86 = tmp4;
            sum5 = tmp5;
            sum4 = tmp6;
            sum3 = tmp7;
            tmp90 = tmp8;
            tmp91 = tmp9;
            tmp82 = c7;
          }
        }
        let uint164 = byteLength.getUint16(tmp);
        let tmp72 =
          (uint164 >= c25 && uint164 <= c29) ||
          uint164 === c30 ||
          uint164 === c19 ||
          uint164 === c20 ||
          uint164 === c21 ||
          uint164 === c22 ||
          uint164 === c23 ||
          uint164 === c24;
        let getUint16 = byteLength.getUint16;
        if (tmp72) {
          tmp82 = c7;
          uint16 = getUint16(tmp + c7);
          sum6 = tmp2;
          tmp85 = tmp3;
          tmp86 = tmp4;
          sum5 = tmp5;
          sum4 = tmp6;
          sum3 = tmp7;
          tmp90 = tmp8;
          tmp91 = tmp9;
        } else {
          tmp10 = tmp;
          tmp11 = tmp2;
          tmp12 = tmp3;
          tmp13 = tmp4;
          tmp14 = tmp5;
          tmp15 = tmp6;
          tmp16 = tmp7;
          tmp17 = tmp8;
          tmp18 = tmp9;
          if (getUint16(tmp) !== c31) {
            break;
          } else {
            sum1 = tmp + 1;
            tmp122 = tmp2;
            tmp123 = tmp3;
            tmp124 = tmp4;
            tmp125 = tmp5;
            tmp126 = tmp6;
            tmp127 = tmp7;
            tmp128 = tmp8;
            tmp129 = tmp9;
          }
        }
        break;
      }
    }
    const obj11 = {
      hasAppMarkers: tmp10 > c5,
      fileDataOffset: tmp18,
      jfifDataOffset: tmp16,
      tiffHeaderOffset: tmp15,
      iptcDataOffset: tmp14,
      xmpChunks: tmp13,
      iccChunks: tmp12,
      mpfDataOffset: tmp11,
    };
    if (!tmp18) {
      tmp18 = tmp17;
    }
    return obj11;
  },
};
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

export default obj;
