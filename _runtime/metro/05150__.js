// === Module 5150: ? ===

// Module 5150
const module = arg2;
const dependencyMap = arg6;
arg5.default = {
  read(byteLength, sum) {
    let tmp;
    if (sum + 4 <= byteLength.byteLength) {
      let obj = module(5121);
      const longAt = obj.getLongAt(byteLength, sum);
      obj = { value: null, description: null };
      obj[0] = longAt;
      const _HermesInternal = HermesInternal;
      obj[1] = "" + longAt + "px";
      tmp = obj;
    }
    obj = { "Image Width": tmp, "Image Height": null, "Bit Depth": null, "Color Type": null, Compression: null, Filter: null, Interlace: null };
    let tmp6;
    if (sum + 4 + 4 <= byteLength.byteLength) {
      let obj3 = module(5121);
      const longAt1 = obj3.getLongAt(byteLength, sum + 4);
      obj1 = { value: null, description: null };
      obj1[0] = longAt1;
      const _HermesInternal2 = HermesInternal;
      obj1[1] = "" + longAt1 + "px";
      tmp6 = obj1;
    }
    obj[1] = tmp6;
    let tmp11;
    if (sum + 8 + 1 <= byteLength.byteLength) {
      let obj5 = module(5121);
      const byteAt = obj5.getByteAt(byteLength, sum + 8);
      const obj2 = { value: null, description: null };
      obj2[0] = byteAt;
      const _HermesInternal3 = HermesInternal;
      obj2[1] = "" + byteAt;
      tmp11 = obj2;
    }
    obj[2] = tmp11;
    let tmp16;
    if (sum + 9 + 1 <= byteLength.byteLength) {
      const byteAt1 = module(5121).getByteAt(byteLength, sum + 9);
      obj3 = { value: null, description: null };
      obj3[0] = byteAt1;
      obj3[1] = { 0: "Grayscale", 2: "RGB", 3: "Palette", 4: "Grayscale with Alpha", 6: "RGB with Alpha" }[byteAt1] || "Unknown";
      tmp16 = obj3;
      const obj8 = module(5121);
    }
    obj[3] = tmp16;
    let tmp20;
    if (sum + 10 + 1 <= byteLength.byteLength) {
      const byteAt2 = module(5121).getByteAt(byteLength, sum + 10);
      const obj4 = { value: null, description: null };
      obj4[0] = byteAt2;
      let str6 = "Unknown";
      if (0 === byteAt2) {
        str6 = "Deflate/Inflate";
      }
      obj4[1] = str6;
      tmp20 = obj4;
      const obj10 = module(5121);
    }
    obj[4] = tmp20;
    let tmp24;
    if (sum + 11 + 1 <= byteLength.byteLength) {
      const byteAt3 = module(5121).getByteAt(byteLength, sum + 11);
      obj5 = { value: null, description: null };
      obj5[0] = byteAt3;
      let str7 = "Unknown";
      if (0 === byteAt3) {
        str7 = "Adaptive";
      }
      obj5[1] = str7;
      tmp24 = obj5;
      const obj12 = module(5121);
    }
    obj[5] = tmp24;
    let tmp28;
    if (sum + 12 + 1 <= byteLength.byteLength) {
      const byteAt4 = module(5121).getByteAt(byteLength, sum + 12);
      const obj6 = { value: null, description: null };
      obj6[0] = byteAt4;
      obj6[1] = { 0: "Noninterlaced", 1: "Adam7 Interlace" }[byteAt4] || "Unknown";
      tmp28 = obj6;
      const obj14 = module(5121);
    }
    obj[6] = tmp28;
    return obj;
  }
};