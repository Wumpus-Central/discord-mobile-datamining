// === Module 5263: ? ===

// Module 5263
import _mod5213 from "module_5213" /* 5213 */;

require = arg1;
const dependencyMap = arg6;

export default {
  read(byteLength) {
    let tmp;
    if (6 <= byteLength.byteLength) {
      let obj = _mod5213;
      const stringFromDataView = obj.getStringFromDataView(byteLength, 3, 3);
      obj = { value: stringFromDataView, description: stringFromDataView };
      tmp = obj;
    }
    obj = { "GIF Version": tmp, "Image Width": null, "Image Height": null, "Global Color Map": null, "Bits Per Pixel": null, "Color Resolution Depth": null };
    let tmp5;
    if (8 <= byteLength.byteLength) {
      const uint16 = byteLength.getUint16(6, true);
      const obj1 = { value: uint16, description: null };
      const _HermesInternal = HermesInternal;
      obj1.description = "" + uint16 + "px";
      tmp5 = obj1;
    }
    obj["Image Width"] = tmp5;
    let tmp8;
    if (10 <= byteLength.byteLength) {
      const uint161 = byteLength.getUint16(8, true);
      const obj2 = { value: uint161, description: null };
      const _HermesInternal2 = HermesInternal;
      obj2.description = "" + uint161 + "px";
      tmp8 = obj2;
    }
    obj["Image Height"] = tmp8;
    let tmp11;
    if (11 <= byteLength.byteLength) {
      const tmp12 = (128 & byteLength.getUint8(10)) >>> 7;
      const obj3 = { value: tmp12, description: null };
      let str5 = "No";
      if (1 === tmp12) {
        str5 = "Yes";
      }
      obj3.description = str5;
      tmp11 = obj3;
    }
    obj["Global Color Map"] = tmp11;
    let tmp13;
    if (11 <= byteLength.byteLength) {
      const sum = 1 + (7 & byteLength.getUint8(10));
      const obj4 = { value: sum, description: null };
      let str6 = "bits";
      if (1 === sum) {
        str6 = "bit";
      }
      const _HermesInternal3 = HermesInternal;
      obj4.description = "" + sum + " " + str6;
      tmp13 = obj4;
    }
    obj["Bits Per Pixel"] = tmp13;
    let tmp16;
    if (11 <= byteLength.byteLength) {
      const sum1 = 1 + ((112 & byteLength.getUint8(10)) >>> 4);
      const obj5 = { value: sum1, description: null };
      let str9 = "bits";
      if (1 === sum1) {
        str9 = "bit";
      }
      const _HermesInternal4 = HermesInternal;
      obj5.description = "" + sum1 + " " + str9;
      tmp16 = obj5;
    }
    obj["Color Resolution Depth"] = tmp16;
    return obj;
  }
};