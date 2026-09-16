// _runtime/metro/05317__.js
import _modDef5316 from "05316__.js";

importDefault = arg2;
const dependencyMap = arg6;

export default {
  read(buffer, sum) {
    const shortAt = _modDef5316.getShortAt(buffer, sum);
    let tmp6;
    if (15 <= shortAt) {
      const byteAt = _modDef5316.getByteAt(buffer, sum + 14);
      const obj2 = { value: byteAt, description: null };
      const _HermesInternal = HermesInternal;
      obj2.description = "" + byteAt + "px";
      tmp6 = obj2;
      const tmp3Result = _modDef5316;
    }
    let tmp9;
    if (16 <= shortAt) {
      const byteAt1 = _modDef5316.getByteAt(buffer, sum + 15);
      const obj3 = { value: byteAt1, description: null };
      const _HermesInternal2 = HermesInternal;
      obj3.description = "" + byteAt1 + "px";
      tmp9 = obj3;
      const tmp3Result7 = _modDef5316;
    }
    let tmp12;
    if (9 <= shortAt) {
      const byteAt2 = _modDef5316.getByteAt(buffer, sum + 7);
      const tmp3Result8 = _modDef5316;
      const byteAt3 = _modDef5316.getByteAt(buffer, sum + 7 + 1);
      const obj4 = { value: 256 * byteAt2 + byteAt3, description: `${tmp13}.${tmp14}` };
      tmp12 = obj4;
      const tmp3Result9 = _modDef5316;
    }
    const obj5 = {
      "JFIF Version": tmp12,
      "Resolution Unit": null,
      XResolution: null,
      YResolution: null,
      "JFIF Thumbnail Width": null,
      "JFIF Thumbnail Height": null,
    };
    let tmp15;
    if (10 <= shortAt) {
      const byteAt4 = _modDef5316.getByteAt(buffer, sum + 9);
      const obj6 = { value: byteAt4, description: null };
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
      obj6.description = str6;
      tmp15 = obj6;
      const tmp3Result10 = _modDef5316;
    }
    obj5["Resolution Unit"] = tmp15;
    let tmp17;
    if (12 <= shortAt) {
      const shortAt1 = _modDef5316.getShortAt(buffer, sum + 10);
      const obj7 = { value: shortAt1, description: "" + shortAt1 };
      tmp17 = obj7;
      const tmp3Result11 = _modDef5316;
    }
    obj5.XResolution = tmp17;
    let tmp19;
    if (14 <= shortAt) {
      const shortAt2 = _modDef5316.getShortAt(buffer, sum + 12);
      const obj8 = { value: shortAt2, description: "" + shortAt2 };
      tmp19 = obj8;
      const tmp3Result12 = _modDef5316;
    }
    obj5.YResolution = tmp19;
    obj5["JFIF Thumbnail Width"] = tmp6;
    obj5["JFIF Thumbnail Height"] = tmp9;
    if (undefined !== tmp6) {
      if (undefined !== tmp9) {
        const result = 3 * tmp6.value * tmp9.value;
        let tmp22;
        if (0 !== result) {
          if (16 + result <= shortAt) {
            buffer = buffer.buffer;
            const obj9 = { value: buffer.slice(sum + 16, sum + 16 + result), description: "<24-bit RGB pixel data>" };
            tmp22 = obj9;
          }
        }
        if (tmp22) {
          obj5["JFIF Thumbnail"] = tmp22;
        }
      }
    }
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[16] !== undefined) {
        if (undefined !== obj5[tmp24]) {
          continue;
        } else {
          delete tmp[tmp2];
          continue;
        }
        continue;
      }
    }
    return obj5;
  },
};
