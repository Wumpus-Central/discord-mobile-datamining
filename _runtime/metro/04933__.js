// === Module 4933: ? ===

// Module 4933
const module = arg2;
const dependencyMap = arg6;
arg5.default = {
  read(buffer, sum) {
    let obj = module(4932);
    const shortAt = obj.getShortAt(buffer, sum);
    let tmp6;
    if (15 <= shortAt) {
      let tmp3Result = tmp3(4932);
      const byteAt = tmp3Result.getByteAt(buffer, sum + 14);
      obj = { value: null, description: null };
      obj[0] = byteAt;
      const _HermesInternal = HermesInternal;
      obj[1] = "" + byteAt + "px";
      tmp6 = obj;
    }
    let tmp9;
    if (16 <= shortAt) {
      tmp3Result = tmp3(4932);
      const byteAt1 = tmp3Result.getByteAt(buffer, sum + 15);
      obj = { value: null, description: null };
      obj[0] = byteAt1;
      const _HermesInternal2 = HermesInternal;
      obj[1] = "" + byteAt1 + "px";
      tmp9 = obj;
    }
    let tmp12;
    if (9 <= shortAt) {
      const byteAt2 = tmp3(4932).getByteAt(buffer, sum + 7);
      const tmp3Result1 = tmp3(4932);
      const byteAt3 = tmp3(4932).getByteAt(buffer, sum + 7 + 1);
      obj1 = { value: null, description: null };
      obj1[0] = 256 * byteAt2 + byteAt3;
      obj1[1] = `${tmp13}.${tmp14}`;
      tmp12 = obj1;
      const tmp3Result2 = tmp3(4932);
    }
    const obj2 = { "JFIF Version": tmp12, "Resolution Unit": null, XResolution: null, YResolution: null, "JFIF Thumbnail Width": null, "JFIF Thumbnail Height": null };
    let tmp15;
    if (10 <= shortAt) {
      const byteAt4 = tmp3(4932).getByteAt(buffer, sum + 9);
      const obj3 = { value: null, description: null };
      obj3[0] = byteAt4;
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
      obj3[1] = str6;
      tmp15 = obj3;
      const tmp3Result3 = tmp3(4932);
    }
    obj2[1] = tmp15;
    let tmp17;
    if (12 <= shortAt) {
      const shortAt1 = tmp3(4932).getShortAt(buffer, sum + 10);
      const obj4 = { value: null, description: null };
      obj4[0] = shortAt1;
      obj4[1] = "" + shortAt1;
      tmp17 = obj4;
      const tmp3Result4 = tmp3(4932);
    }
    obj2[2] = tmp17;
    let tmp19;
    if (14 <= shortAt) {
      const shortAt2 = tmp3(4932).getShortAt(buffer, sum + 12);
      const obj5 = { value: null, description: null };
      obj5[0] = shortAt2;
      obj5[1] = "" + shortAt2;
      tmp19 = obj5;
      const tmp3Result5 = tmp3(4932);
    }
    obj2[3] = tmp19;
    obj2[4] = tmp6;
    obj2[5] = tmp9;
    if (undefined !== tmp6) {
      if (undefined !== tmp9) {
        const result = 3 * tmp6.value * tmp9.value;
        let tmp22;
        if (0 !== result) {
          if (16 + result <= shortAt) {
            buffer = buffer.buffer;
            const obj6 = { value: null, description: "<24-bit RGB pixel data>" };
            obj6[0] = buffer.slice(sum + 16, sum + 16 + result);
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
        let tmp25 = tmp24;
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
  }
};