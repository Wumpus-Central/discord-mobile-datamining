// _runtime/metro/05572__.js
import _modDef5543 from "05543__.js";

importDefault = arg2;
const dependencyMap = arg6;

export default {
  read(byteLength, sum) {
    let tmp;
    if (sum + 4 <= byteLength.byteLength) {
      const longAt = _modDef5543.getLongAt(byteLength, sum);
      const obj2 = { value: longAt, description: null };
      const _HermesInternal = HermesInternal;
      obj2.description = "" + longAt + "px";
      tmp = obj2;
    }
    const obj3 = {
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
      const longAt1 = _modDef5543.getLongAt(byteLength, sum + 4);
      const obj5 = { value: longAt1, description: null };
      const _HermesInternal2 = HermesInternal;
      obj5.description = "" + longAt1 + "px";
      tmp6 = obj5;
    }
    obj3["Image Height"] = tmp6;
    let tmp11;
    if (sum + 8 + 1 <= byteLength.byteLength) {
      const byteAt = _modDef5543.getByteAt(byteLength, sum + 8);
      const obj7 = { value: byteAt, description: null };
      const _HermesInternal3 = HermesInternal;
      obj7.description = "" + byteAt;
      tmp11 = obj7;
    }
    obj3["Bit Depth"] = tmp11;
    let tmp16;
    if (sum + 9 + 1 <= byteLength.byteLength) {
      const byteAt1 = _modDef5543.getByteAt(byteLength, sum + 9);
      const obj9 = {
        value: byteAt1,
        description:
          { 0: "Grayscale", 2: "RGB", 3: "Palette", 4: "Grayscale with Alpha", 6: "RGB with Alpha" }[byteAt1] ||
          "Unknown",
      };
      tmp16 = obj9;
    }
    obj3["Color Type"] = tmp16;
    let tmp20;
    if (sum + 10 + 1 <= byteLength.byteLength) {
      const byteAt2 = _modDef5543.getByteAt(byteLength, sum + 10);
      const obj11 = { value: byteAt2, description: null };
      let str6 = "Unknown";
      if (0 === byteAt2) {
        str6 = "Deflate/Inflate";
      }
      obj11.description = str6;
      tmp20 = obj11;
    }
    obj3.Compression = tmp20;
    let tmp24;
    if (sum + 11 + 1 <= byteLength.byteLength) {
      const byteAt3 = _modDef5543.getByteAt(byteLength, sum + 11);
      const obj13 = { value: byteAt3, description: null };
      let str7 = "Unknown";
      if (0 === byteAt3) {
        str7 = "Adaptive";
      }
      obj13.description = str7;
      tmp24 = obj13;
    }
    obj3.Filter = tmp24;
    let tmp28;
    if (sum + 12 + 1 <= byteLength.byteLength) {
      const byteAt4 = _modDef5543.getByteAt(byteLength, sum + 12);
      const obj15 = { value: byteAt4, description: { 0: "Noninterlaced", 1: "Adam7 Interlace" }[byteAt4] || "Unknown" };
      tmp28 = obj15;
    }
    obj3.Interlace = tmp28;
    return obj3;
  },
};
