// _runtime/metro/05231__.js
import _modDef5230 from "05230__.js";

importDefault = arg2;
const dependencyMap = arg6;

export default {
  read(buffer, sum) {
    let obj = _modDef5230;
    const shortAt = obj.getShortAt(buffer, sum);
    let tmp6;
    if (15 <= shortAt) {
      let tmp3Result = _modDef5230;
      const byteAt = tmp3Result.getByteAt(buffer, sum + 14);
      obj = { value: byteAt, description: null };
      const _HermesInternal = HermesInternal;
      obj.description = "" + byteAt + "px";
      tmp6 = obj;
    }
    let tmp9;
    if (16 <= shortAt) {
      tmp3Result = _modDef5230;
      const byteAt1 = tmp3Result.getByteAt(buffer, sum + 15);
      obj = { value: byteAt1, description: null };
      const _HermesInternal2 = HermesInternal;
      obj.description = "" + byteAt1 + "px";
      tmp9 = obj;
    }
    let tmp12;
    if (9 <= shortAt) {
      const byteAt2 = _modDef5230.getByteAt(buffer, sum + 7);
      const tmp3Result1 = _modDef5230;
      const byteAt3 = _modDef5230.getByteAt(buffer, sum + 7 + 1);
      const obj1 = { value: 256 * byteAt2 + byteAt3, description: `${tmp13}.${tmp14}` };
      tmp12 = obj1;
      const tmp3Result2 = _modDef5230;
    }
    const obj2 = {
      "JFIF Version": tmp12,
      "Resolution Unit": null,
      XResolution: null,
      YResolution: null,
      "JFIF Thumbnail Width": null,
      "JFIF Thumbnail Height": null,
    };
    let tmp15;
    if (10 <= shortAt) {
      const byteAt4 = _modDef5230.getByteAt(buffer, sum + 9);
      const obj3 = { value: byteAt4, description: null };
      let str6 = "None";
      if (0 !== byteAt4) {
        let str7 = "inches";
        if (1 !== byteAt4) {
          let str8 = "Unknown";
          if (2 === byteAt4) {
            str8 = "cm";
          }
          str7 = str8;
        }
        str6 = str7;
      }
      obj3.description = str6;
      tmp15 = obj3;
      const tmp3Result3 = _modDef5230;
    }
    obj2["Resolution Unit"] = tmp15;
    let tmp17;
    if (12 <= shortAt) {
      const shortAt1 = _modDef5230.getShortAt(buffer, sum + 10);
      const obj4 = { value: shortAt1, description: "" + shortAt1 };
      tmp17 = obj4;
      const tmp3Result4 = _modDef5230;
    }
    obj2.XResolution = tmp17;
    let tmp19;
    if (14 <= shortAt) {
      const shortAt2 = _modDef5230.getShortAt(buffer, sum + 12);
      const obj5 = { value: shortAt2, description: "" + shortAt2 };
      tmp19 = obj5;
      const tmp3Result5 = _modDef5230;
    }
    obj2.YResolution = tmp19;
    obj2["JFIF Thumbnail Width"] = tmp6;
    obj2["JFIF Thumbnail Height"] = tmp9;
    if (undefined !== tmp6) {
      if (undefined !== tmp9) {
        const result = 3 * tmp6.value * tmp9.value;
        let tmp22;
        if (0 !== result) {
          if (16 + result <= shortAt) {
            buffer = buffer.buffer;
            const obj6 = { value: buffer.slice(sum + 16, sum + 16 + result), description: "<24-bit RGB pixel data>" };
            tmp22 = obj6;
          }
        }
        if (tmp22) {
          obj2["JFIF Thumbnail"] = tmp22;
        }
      }
    }
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[16] !== undefined) {
        if (undefined !== obj2[tmp24]) {
          continue;
        } else {
          delete tmp[tmp2];
          continue;
        }
        continue;
      }
    }
    return obj2;
  },
};
