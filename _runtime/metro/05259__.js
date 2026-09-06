// _runtime/metro/05259__.js
import _modDef5230 from "05230__.js";

importDefault = arg2;
const dependencyMap = arg6;

export default {
  read(byteLength, sum) {
    let tmp;
    if (sum + 4 <= byteLength.byteLength) {
      let obj = _modDef5230;
      const longAt = obj.getLongAt(byteLength, sum);
      obj = { value: longAt, description: null };
      const _HermesInternal = HermesInternal;
      obj.description = "" + longAt + "px";
      tmp = obj;
    }
    obj = {
      "Image Width": tmp,
      "Image Height": null,
      "Bit Depth": null,
      "Color Type": null,
      Compression: null,
      Filter: null,
      Interlace: null,
    };
    let tmp6;
    if (sum + 4 + 4 <= byteLength.byteLength) {
      let obj3 = _modDef5230;
      const longAt1 = obj3.getLongAt(byteLength, sum + 4);
      const obj1 = { value: longAt1, description: null };
      const _HermesInternal2 = HermesInternal;
      obj1.description = "" + longAt1 + "px";
      tmp6 = obj1;
    }
    obj["Image Height"] = tmp6;
    let tmp11;
    if (sum + 8 + 1 <= byteLength.byteLength) {
      let obj5 = _modDef5230;
      const byteAt = obj5.getByteAt(byteLength, sum + 8);
      const obj2 = { value: byteAt, description: null };
      const _HermesInternal3 = HermesInternal;
      obj2.description = "" + byteAt;
      tmp11 = obj2;
    }
    obj["Bit Depth"] = tmp11;
    let tmp16;
    if (sum + 9 + 1 <= byteLength.byteLength) {
      const byteAt1 = _modDef5230.getByteAt(byteLength, sum + 9);
      obj3 = {
        value: byteAt1,
        description:
          { 0: "Grayscale", 2: "RGB", 3: "Palette", 4: "Grayscale with Alpha", 6: "RGB with Alpha" }[byteAt1] ||
          "Unknown",
      };
      tmp16 = obj3;
    }
    obj["Color Type"] = tmp16;
    let tmp20;
    if (sum + 10 + 1 <= byteLength.byteLength) {
      const byteAt2 = _modDef5230.getByteAt(byteLength, sum + 10);
      const obj4 = { value: byteAt2, description: null };
      let str6 = "Unknown";
      if (0 === byteAt2) {
        str6 = "Deflate/Inflate";
      }
      obj4.description = str6;
      tmp20 = obj4;
    }
    obj.Compression = tmp20;
    let tmp24;
    if (sum + 11 + 1 <= byteLength.byteLength) {
      const byteAt3 = _modDef5230.getByteAt(byteLength, sum + 11);
      obj5 = { value: byteAt3, description: null };
      let str7 = "Unknown";
      if (0 === byteAt3) {
        str7 = "Adaptive";
      }
      obj5.description = str7;
      tmp24 = obj5;
    }
    obj.Filter = tmp24;
    let tmp28;
    if (sum + 12 + 1 <= byteLength.byteLength) {
      const byteAt4 = _modDef5230.getByteAt(byteLength, sum + 12);
      const obj6 = { value: byteAt4, description: { 0: "Noninterlaced", 1: "Adam7 Interlace" }[byteAt4] || "Unknown" };
      tmp28 = obj6;
    }
    obj.Interlace = tmp28;
    return obj;
  },
};
