// _runtime/metro/07363__.js
import _modDef7362 from "07362__.js";

export default {
  read(buffer, sum) {
    let str6;
    let tmp13;
    let tmp15;
    let tmp17;
    const obj = _modDef7362;
    const shortAt = obj.getShortAt(buffer, sum);
    let tmp4;
    if (15 <= shortAt) {
      const tmpResult = _modDef7362;
      const byteAt = tmpResult.getByteAt(buffer, sum + 14);
      const _HermesInternal = HermesInternal;
      tmp4 = { value: byteAt, description: "" + byteAt + "px" };
      const obj2 = { value: byteAt, description: "" + byteAt + "px" };
    }
    let tmp7;
    if (16 <= shortAt) {
      const tmpResult7 = _modDef7362;
      const byteAt1 = tmpResult7.getByteAt(buffer, sum + 15);
      const _HermesInternal2 = HermesInternal;
      tmp7 = { value: byteAt1, description: "" + byteAt1 + "px" };
      const obj3 = { value: byteAt1, description: "" + byteAt1 + "px" };
    }
    let tmp10;
    if (9 <= shortAt) {
      const tmpResult8 = _modDef7362;
      const byteAt2 = tmpResult8.getByteAt(buffer, sum + 7);
      const tmpResult9 = _modDef7362;
      const byteAt3 = tmpResult9.getByteAt(buffer, sum + 7 + 1);
      tmp10 = { value: 256 * byteAt2 + byteAt3, description: `${tmp11}.${tmp12}` };
      const obj4 = { value: 256 * byteAt2 + byteAt3, description: `${tmp11}.${tmp12}` };
    }
    const obj5 = {
      "JFIF Version": tmp10,
      "Resolution Unit": tmp13,
      XResolution: tmp15,
      YResolution: tmp17,
      "JFIF Thumbnail Width": tmp4,
      "JFIF Thumbnail Height": tmp7,
    };
    tmp13 = undefined;
    if (10 <= shortAt) {
      const tmpResult10 = _modDef7362;
      const byteAt4 = tmpResult10.getByteAt(buffer, sum + 9);
      const obj6 = { value: byteAt4, description: str6 };
      str6 = "None";
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
      tmp13 = obj6;
    }
    tmp15 = undefined;
    if (12 <= shortAt) {
      const tmpResult11 = _modDef7362;
      const shortAt1 = tmpResult11.getShortAt(buffer, sum + 10);
      tmp15 = { value: shortAt1, description: "" + shortAt1 };
      const obj7 = { value: shortAt1, description: "" + shortAt1 };
    }
    tmp17 = undefined;
    if (14 <= shortAt) {
      const tmpResult12 = _modDef7362;
      const shortAt2 = tmpResult12.getShortAt(buffer, sum + 12);
      tmp17 = { value: shortAt2, description: "" + shortAt2 };
      const obj8 = { value: shortAt2, description: "" + shortAt2 };
    }
    if (undefined !== tmp4) {
      if (undefined !== tmp7) {
        const result = 3 * tmp4.value * tmp7.value;
        let tmp20;
        if (0 !== result) {
          if (16 + result <= shortAt) {
            buffer = buffer.buffer;
            tmp20 = { value: buffer.slice(sum + 16, sum + 16 + result), description: "<24-bit RGB pixel data>" };
            const obj10 = { value: buffer.slice(sum + 16, sum + 16 + result), description: "<24-bit RGB pixel data>" };
          }
        }
        if (tmp20) {
          obj5["JFIF Thumbnail"] = tmp20;
        }
      }
    }
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[16] !== undefined) {
        if (undefined !== obj5[tmp22]) {
          continue;
        } else {
          delete obj9[tmp23];
          continue;
        }
        continue;
      }
    }
    return obj5;
  },
};
