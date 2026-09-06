// === Module 5229: ? ===

// Module 5229
import _modDef5230 from "module_5230" /* 5230 */;

importDefault = arg2;
const dependencyMap = arg6;

export default {
  read(dataView, sum) {
    let obj = _modDef5230;
    const shortAt = obj.getShortAt(dataView, sum);
    let tmp4;
    if (8 <= shortAt) {
      let tmpResult = _modDef5230;
      const byteAt = tmpResult.getByteAt(dataView, sum + 7);
      obj = { value: byteAt, description: "" + byteAt };
      tmp4 = obj;
    }
    let tmp6;
    if (3 <= shortAt) {
      tmpResult = _modDef5230;
      const byteAt1 = tmpResult.getByteAt(dataView, sum + 2);
      obj = { value: byteAt1, description: "" + byteAt1 };
      tmp6 = obj;
    }
    const obj1 = { "Bits Per Sample": tmp6, "Image Height": null, "Image Width": null, "Color Components": null, Subsampling: null };
    let tmp8;
    if (5 <= shortAt) {
      const shortAt1 = _modDef5230.getShortAt(dataView, sum + 3);
      const obj2 = { value: shortAt1, description: null };
      const _HermesInternal = HermesInternal;
      obj2.description = "" + shortAt1 + "px";
      tmp8 = obj2;
      const tmpResult1 = _modDef5230;
    }
    obj1["Image Height"] = tmp8;
    let tmp11;
    if (7 <= shortAt) {
      const shortAt2 = _modDef5230.getShortAt(dataView, sum + 5);
      const obj3 = { value: shortAt2, description: null };
      const _HermesInternal2 = HermesInternal;
      obj3.description = "" + shortAt2 + "px";
      tmp11 = obj3;
      const tmpResult2 = _modDef5230;
    }
    obj1["Image Width"] = tmp11;
    obj1["Color Components"] = tmp4;
    let tmp14 = tmp4;
    if (tmp4) {
      value = tmp4.value;
      let tmp15;
      if (8 + 3 * value <= shortAt) {
        const items = [];
        for (let num6 = 0; num6 < value; num6 = num6 + 1) {
          sum = sum + 8 + 3 * num6;
          let obj11 = _modDef5230;
          let items1 = [obj11.getByteAt(dataView, sum), , ];
          let obj12 = _modDef5230;
          items1[1] = obj12.getByteAt(dataView, sum + 1);
          let obj13 = _modDef5230;
          items1[2] = obj13.getByteAt(dataView, sum + 2);
          let arr = items.push(items1);
        }
        const obj4 = { value: items, description: null };
        let str6 = "";
        if (items.length > 1) {
          closure_0 = { 1: "Y", 2: "Cb", 3: "Cr", 4: "I", 5: "Q" };
          const mapped = items.map((item) => closure_0[item[0]]);
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
        obj4.description = str6;
        tmp15 = obj4;
      }
      tmp14 = tmp15;
    }
    obj1.Subsampling = tmp14;
    return obj1;
  }
};