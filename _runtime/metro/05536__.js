// _runtime/metro/05536__.js
import _modDef5537 from "05537__.js";

importDefault = arg2;
const dependencyMap = arg6;

export default {
  read(dataView, sum) {
    const shortAt = _modDef5537.getShortAt(dataView, sum);
    let tmp4;
    if (8 <= shortAt) {
      const byteAt = _modDef5537.getByteAt(dataView, sum + 7);
      const obj2 = { value: byteAt, description: "" + byteAt };
      tmp4 = obj2;
      const tmpResult = _modDef5537;
    }
    let tmp6;
    if (3 <= shortAt) {
      const byteAt1 = _modDef5537.getByteAt(dataView, sum + 2);
      const obj3 = { value: byteAt1, description: "" + byteAt1 };
      tmp6 = obj3;
      const tmpResult4 = _modDef5537;
    }
    const obj4 = {
      "Bits Per Sample": tmp6,
      "Image Height": null,
      "Image Width": null,
      "Color Components": null,
      Subsampling: null,
    };
    let tmp8;
    if (5 <= shortAt) {
      const shortAt1 = _modDef5537.getShortAt(dataView, sum + 3);
      const obj5 = { value: shortAt1, description: null };
      const _HermesInternal = HermesInternal;
      obj5.description = "" + shortAt1 + "px";
      tmp8 = obj5;
      const tmpResult5 = _modDef5537;
    }
    obj4["Image Height"] = tmp8;
    let tmp11;
    if (7 <= shortAt) {
      const shortAt2 = _modDef5537.getShortAt(dataView, sum + 5);
      const obj6 = { value: shortAt2, description: null };
      const _HermesInternal2 = HermesInternal;
      obj6.description = "" + shortAt2 + "px";
      tmp11 = obj6;
      const tmpResult6 = _modDef5537;
    }
    obj4["Image Width"] = tmp11;
    obj4["Color Components"] = tmp4;
    let tmp14 = tmp4;
    if (tmp4) {
      value = tmp4.value;
      let tmp15;
      if (8 + 3 * value <= shortAt) {
        const items = [];
        for (let num6 = 0; num6 < value; num6 = num6 + 1) {
          sum = sum + 8 + 3 * num6;
          let obj11 = _modDef5537;
          let items1 = [obj11.getByteAt(dataView, sum), ,];
          let obj12 = _modDef5537;
          items1[1] = obj12.getByteAt(dataView, sum + 1);
          let obj13 = _modDef5537;
          items1[2] = obj13.getByteAt(dataView, sum + 2);
          let arr = items.push(items1);
        }
        const obj7 = { value: items, description: null };
        let str6 = "";
        if (items.length > 1) {
          closure_0 = { 1: "Y", 2: "Cb", 3: "Cr", 4: "I", 5: "Q" };
          const mapped = items.map((item) => closure_0[item[0]]);
          let str7 = "";
          const joined = mapped.join("");
          if (0 !== items.length) {
            str7 = "";
            if (undefined !== items[0][1]) {
              const obj8 = {
                17: "4:4:4 (1 1)",
                18: "4:4:0 (1 2)",
                20: "4:4:1 (1 4)",
                33: "4:2:2 (2 1)",
                34: "4:2:0 (2 2)",
                36: "4:2:1 (2 4)",
                65: "4:1:1 (4 1)",
                66: "4:1:0 (4 2)",
              };
              str7 = "";
              if (undefined !== obj8[items[0][1]]) {
                str7 = obj8[items[0][1]];
              }
            }
          }
          str6 = joined + str7;
        }
        obj7.description = str6;
        tmp15 = obj7;
      }
      tmp14 = tmp15;
    }
    obj4.Subsampling = tmp14;
    return obj4;
  },
};
