// === Module 5480: ? ===

// Module 5480
import _mod5430 from "module_5430" /* 5430 */;

require = arg1;
const dependencyMap = arg6;

export default {
  read(byteLength) {
    let tmp;
    if (6 <= byteLength.byteLength) {
      const stringFromDataView = _mod5430.getStringFromDataView(byteLength, 3, 3);
      const obj2 = { value: stringFromDataView, description: stringFromDataView };
      tmp = obj2;
    }
    const obj3 = { "GIF Version": tmp, "Image Width": null, "Image Height": null, "Global Color Map": null, "Bits Per Pixel": null, "Color Resolution Depth": null };
    let tmp5;
    if (8 <= byteLength.byteLength) {
      const uint16 = byteLength.getUint16(6, true);
      const obj4 = { value: uint16, description: null };
      const _HermesInternal = HermesInternal;
      obj4.description = "" + uint16 + "px";
      tmp5 = obj4;
    }
    obj3["Image Width"] = tmp5;
    let tmp8;
    if (10 <= byteLength.byteLength) {
      const uint161 = byteLength.getUint16(8, true);
      const obj5 = { value: uint161, description: null };
      const _HermesInternal2 = HermesInternal;
      obj5.description = "" + uint161 + "px";
      tmp8 = obj5;
    }
    obj3["Image Height"] = tmp8;
    let tmp11;
    if (11 <= byteLength.byteLength) {
      const tmp12 = (128 & byteLength.getUint8(10)) >>> 7;
      const obj6 = { value: tmp12, description: null };
      let str5 = "No";
      if (1 === tmp12) {
        str5 = "Yes";
      }
      obj6.description = str5;
      tmp11 = obj6;
    }
    obj3["Global Color Map"] = tmp11;
    let tmp13;
    if (11 <= byteLength.byteLength) {
      const sum = 1 + (7 & byteLength.getUint8(10));
      const obj7 = { value: sum, description: null };
      let str6 = "bits";
      if (1 === sum) {
        str6 = "bit";
      }
      const _HermesInternal3 = HermesInternal;
      obj7.description = "" + sum + " " + str6;
      tmp13 = obj7;
    }
    obj3["Bits Per Pixel"] = tmp13;
    let tmp16;
    if (11 <= byteLength.byteLength) {
      const sum1 = 1 + ((112 & byteLength.getUint8(10)) >>> 4);
      const obj8 = { value: sum1, description: null };
      let str9 = "bits";
      if (1 === sum1) {
        str9 = "bit";
      }
      const _HermesInternal4 = HermesInternal;
      obj8.description = "" + sum1 + " " + str9;
      tmp16 = obj8;
    }
    obj3["Color Resolution Depth"] = tmp16;
    return obj3;
  }
};