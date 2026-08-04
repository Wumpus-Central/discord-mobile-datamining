// _runtime/metro/04822__.js
const module = arg2;
const dependencyMap = arg6;
arg5.default = {
  read(dataView, sum) {
    let obj = _module(4823);
    const shortAt = obj.getShortAt(dataView, sum);
    let tmp4;
    if (8 <= shortAt) {
      let tmpResult = tmp(4823);
      const byteAt = tmpResult.getByteAt(dataView, sum + 7);
      obj = { value: null, description: null };
      obj[0] = byteAt;
      obj[1] = "" + byteAt;
      tmp4 = obj;
    }
    let tmp6;
    if (3 <= shortAt) {
      tmpResult = tmp(4823);
      const byteAt1 = tmpResult.getByteAt(dataView, sum + 2);
      obj = { value: null, description: null };
      obj[0] = byteAt1;
      obj[1] = "" + byteAt1;
      tmp6 = obj;
    }
    const obj1 = { "Bits Per Sample": tmp6, "Image Height": null, "Image Width": null, "Color Components": null, Subsampling: null };
    let tmp8;
    if (5 <= shortAt) {
      const shortAt1 = tmp(4823).getShortAt(dataView, sum + 3);
      const obj2 = { value: null, description: null };
      obj2[0] = shortAt1;
      const _HermesInternal = HermesInternal;
      obj2[1] = "" + shortAt1 + "px";
      tmp8 = obj2;
      const tmpResult1 = tmp(4823);
    }
    obj1[1] = tmp8;
    let tmp11;
    if (7 <= shortAt) {
      const shortAt2 = tmp(4823).getShortAt(dataView, sum + 5);
      const obj3 = { value: null, description: null };
      obj3[0] = shortAt2;
      const _HermesInternal2 = HermesInternal;
      obj3[1] = "" + shortAt2 + "px";
      tmp11 = obj3;
      const tmpResult2 = tmp(4823);
    }
    obj1[2] = tmp11;
    obj1[3] = tmp4;
    let tmp14 = tmp4;
    if (tmp4) {
      const value = tmp4.value;
      let tmp15;
      if (8 + 3 * value <= shortAt) {
        const items = [];
        for (let num6 = 0; num6 < value; num6 = num6 + 1) {
          sum = sum + 8 + 3 * num6;
          let tmp17 = _module;
          let tmp18 = dependencyMap;
          let obj11 = _module(4823);
          let items1 = [obj11.getByteAt(dataView, sum), , ];
          let obj12 = _module(4823);
          items1[1] = obj12.getByteAt(dataView, sum + 1);
          let obj13 = _module(4823);
          items1[2] = obj13.getByteAt(dataView, sum + 2);
          let arr = items.push(items1);
        }
        const obj4 = { value: null, description: null };
        obj4[0] = items;
        let str6 = "";
        if (items.length > 1) {
          _module = { 1: "Y", 2: "Cb", 3: "Cr", 4: "I", 5: "Q" };
          const mapped = items.map((arg0) => table[arg0[0]]);
          let str7 = "";
          const joined = mapped.join("");
          if (0 !== items.length) {
            str7 = "";
            if (undefined !== items[0][1]) {
              const obj5 = { 17: "4:4:4 (1 1)", 18: "4:4:0 (1 2)", 20: "4:4:1 (1 4)", 33: "4:2:2 (2 1)", 34: "4:2:0 (2 2)", 36: "4:2:1 (2 4)", 65: "4:1:1 (4 1)", 66: "4:1:0 (4 2)" };
              str7 = "";
              if (undefined !== obj5[items[0][1]]) {
                str7 = obj5[items[0][1]];
              }
            }
          }
          str6 = joined + str7;
        }
        obj4[1] = str6;
        tmp15 = obj4;
      }
      tmp14 = tmp15;
    }
    obj1[4] = tmp14;
    return obj1;
  }
};