// _runtime/metro/07402__.js
import _modDef7373 from "07373__.js";

export default {
  read(byteLength, sum) {
    let str6;
    let str7;
    let tmp11;
    let tmp16;
    let tmp20;
    let tmp24;
    let tmp28;
    let tmp6;
    let tmp;
    if (sum + 4 <= byteLength.byteLength) {
      const obj = _modDef7373;
      const longAt = obj.getLongAt(byteLength, sum);
      const _HermesInternal = HermesInternal;
      tmp = { value: longAt, description: "" + longAt + "px" };
      const obj2 = { value: longAt, description: "" + longAt + "px" };
    }
    const obj3 = {
      "Image Width": tmp,
      "Image Height": tmp6,
      "Bit Depth": tmp11,
      "Color Type": tmp16,
      Compression: tmp20,
      Filter: tmp24,
      Interlace: tmp28,
    };
    tmp6 = undefined;
    if (sum + 4 + 4 <= byteLength.byteLength) {
      const obj4 = _modDef7373;
      const longAt1 = obj4.getLongAt(byteLength, sum + 4);
      const _HermesInternal2 = HermesInternal;
      tmp6 = { value: longAt1, description: "" + longAt1 + "px" };
      const obj5 = { value: longAt1, description: "" + longAt1 + "px" };
    }
    tmp11 = undefined;
    if (sum + 8 + 1 <= byteLength.byteLength) {
      const obj6 = _modDef7373;
      const byteAt = obj6.getByteAt(byteLength, sum + 8);
      const _HermesInternal3 = HermesInternal;
      tmp11 = { value: byteAt, description: "" + byteAt };
      const obj7 = { value: byteAt, description: "" + byteAt };
    }
    tmp16 = undefined;
    if (sum + 9 + 1 <= byteLength.byteLength) {
      const obj8 = _modDef7373;
      const byteAt1 = obj8.getByteAt(byteLength, sum + 9);
      tmp16 = {
        value: byteAt1,
        description:
          { 0: "Grayscale", 2: "RGB", 3: "Palette", 4: "Grayscale with Alpha", 6: "RGB with Alpha" }[byteAt1] ||
          "Unknown",
      };
      const obj9 = {
        value: byteAt1,
        description:
          { 0: "Grayscale", 2: "RGB", 3: "Palette", 4: "Grayscale with Alpha", 6: "RGB with Alpha" }[byteAt1] ||
          "Unknown",
      };
    }
    tmp20 = undefined;
    if (sum + 10 + 1 <= byteLength.byteLength) {
      const obj10 = _modDef7373;
      const byteAt2 = obj10.getByteAt(byteLength, sum + 10);
      const obj11 = { value: byteAt2, description: str6 };
      str6 = "Unknown";
      if (0 === byteAt2) {
        str6 = "Deflate/Inflate";
      }
      tmp20 = obj11;
    }
    tmp24 = undefined;
    if (sum + 11 + 1 <= byteLength.byteLength) {
      const obj12 = _modDef7373;
      const byteAt3 = obj12.getByteAt(byteLength, sum + 11);
      const obj13 = { value: byteAt3, description: str7 };
      str7 = "Unknown";
      if (0 === byteAt3) {
        str7 = "Adaptive";
      }
      tmp24 = obj13;
    }
    tmp28 = undefined;
    if (sum + 12 + 1 <= byteLength.byteLength) {
      const obj14 = _modDef7373;
      const byteAt4 = obj14.getByteAt(byteLength, sum + 12);
      tmp28 = { value: byteAt4, description: { 0: "Noninterlaced", 1: "Adam7 Interlace" }[byteAt4] || "Unknown" };
      const obj15 = { value: byteAt4, description: { 0: "Noninterlaced", 1: "Adam7 Interlace" }[byteAt4] || "Unknown" };
    }
    return obj3;
  },
};
