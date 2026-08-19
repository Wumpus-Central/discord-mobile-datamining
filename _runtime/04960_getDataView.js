// === Module 4960: getDataView ===

// Module 4960 (getDataView)
import getDataView from "getDataView" /* 4910 */;

require = arg1;
const dependencyMap = arg6;
arg5.default = {
  read(byteLength) {
    let tmp;
    if (6 <= byteLength.byteLength) {
      let obj = getDataView;
      const stringFromDataView = obj.getStringFromDataView(byteLength, 3, 3);
      obj = { value: null, description: null };
      obj[0] = stringFromDataView;
      obj[1] = stringFromDataView;
      tmp = obj;
    }
    obj = { "GIF Version": tmp, "Image Width": null, "Image Height": null, "Global Color Map": null, "Bits Per Pixel": null, "Color Resolution Depth": null };
    let tmp5;
    if (8 <= byteLength.byteLength) {
      const uint16 = byteLength.getUint16(6, true);
      obj1 = { value: null, description: null };
      obj1[0] = uint16;
      const _HermesInternal = HermesInternal;
      obj1[1] = "" + uint16 + "px";
      tmp5 = obj1;
    }
    obj[1] = tmp5;
    let tmp8;
    if (10 <= byteLength.byteLength) {
      const uint161 = byteLength.getUint16(8, true);
      const obj2 = { value: null, description: null };
      obj2[0] = uint161;
      const _HermesInternal2 = HermesInternal;
      obj2[1] = "" + uint161 + "px";
      tmp8 = obj2;
    }
    obj[2] = tmp8;
    let tmp11;
    if (11 <= byteLength.byteLength) {
      const tmp12 = (128 & byteLength.getUint8(10)) >>> 7;
      const obj3 = { value: null, description: null };
      obj3[0] = tmp12;
      let str5 = "No";
      if (1 === tmp12) {
        str5 = "Yes";
      }
      obj3[1] = str5;
      tmp11 = obj3;
    }
    obj[3] = tmp11;
    let tmp13;
    if (11 <= byteLength.byteLength) {
      const sum = 1 + (7 & byteLength.getUint8(10));
      const obj4 = { value: null, description: null };
      obj4[0] = sum;
      let str6 = "bits";
      if (1 === sum) {
        str6 = "bit";
      }
      const _HermesInternal3 = HermesInternal;
      obj4[1] = "" + sum + " " + str6;
      tmp13 = obj4;
    }
    obj[4] = tmp13;
    let tmp16;
    if (11 <= byteLength.byteLength) {
      const sum1 = 1 + ((112 & byteLength.getUint8(10)) >>> 4);
      const obj5 = { value: null, description: null };
      obj5[0] = sum1;
      let str9 = "bits";
      if (1 === sum1) {
        str9 = "bit";
      }
      const _HermesInternal4 = HermesInternal;
      obj5[1] = "" + sum1 + " " + str9;
      tmp16 = obj5;
    }
    obj[5] = tmp16;
    return obj;
  }
};