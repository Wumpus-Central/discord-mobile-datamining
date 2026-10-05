// === Module 7395: ? ===

// Module 7395
import _mod7345 from "module_7345" /* 7345 */;


export default {
  read(byteLength) {
    let str5;
    let str6;
    let str9;
    let tmp11;
    let tmp13;
    let tmp16;
    let tmp5;
    let tmp8;
    let tmp;
    if (6 <= byteLength.byteLength) {
      const obj = _mod7345;
      const stringFromDataView = obj.getStringFromDataView(byteLength, 3, 3);
      tmp = { value: stringFromDataView, description: stringFromDataView };
      const obj2 = { value: stringFromDataView, description: stringFromDataView };
    }
    const obj3 = { "GIF Version": tmp, "Image Width": tmp5, "Image Height": tmp8, "Global Color Map": tmp11, "Bits Per Pixel": tmp13, "Color Resolution Depth": tmp16 };
    tmp5 = undefined;
    if (8 <= byteLength.byteLength) {
      const uint16 = byteLength.getUint16(6, true);
      const _HermesInternal = HermesInternal;
      tmp5 = { value: uint16, description: "" + uint16 + "px" };
      const obj4 = { value: uint16, description: "" + uint16 + "px" };
    }
    tmp8 = undefined;
    if (10 <= byteLength.byteLength) {
      const uint161 = byteLength.getUint16(8, true);
      const _HermesInternal2 = HermesInternal;
      tmp8 = { value: uint161, description: "" + uint161 + "px" };
      const obj5 = { value: uint161, description: "" + uint161 + "px" };
    }
    tmp11 = undefined;
    if (11 <= byteLength.byteLength) {
      const tmp12 = (128 & byteLength.getUint8(10)) >>> 7;
      const obj6 = { value: tmp12, description: str5 };
      str5 = "No";
      if (1 === tmp12) {
        str5 = "Yes";
      }
      tmp11 = obj6;
    }
    tmp13 = undefined;
    if (11 <= byteLength.byteLength) {
      const sum = 1 + (7 & byteLength.getUint8(10));
      const obj7 = { value: sum, description: "" + sum + " " + str6 };
      str6 = "bits";
      if (1 === sum) {
        str6 = "bit";
      }
      const _HermesInternal3 = HermesInternal;
      tmp13 = obj7;
    }
    tmp16 = undefined;
    if (11 <= byteLength.byteLength) {
      const sum1 = 1 + ((112 & byteLength.getUint8(10)) >>> 4);
      const obj8 = { value: sum1, description: "" + sum1 + " " + str9 };
      str9 = "bits";
      if (1 === sum1) {
        str9 = "bit";
      }
      const _HermesInternal4 = HermesInternal;
      tmp16 = obj8;
    }
    return obj3;
  }
};