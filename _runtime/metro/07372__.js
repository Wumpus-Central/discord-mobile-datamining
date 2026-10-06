// === Module 7372: ? ===

// Module 7372
import _modDef7373 from "module_7373" /* 7373 */;


export default {
  read(dataView, sum) {
    let str6;
    let tmp11;
    let tmp14;
    let tmp8;
    const obj = _modDef7373;
    const shortAt = obj.getShortAt(dataView, sum);
    let tmp4;
    if (8 <= shortAt) {
      const tmpResult = _modDef7373;
      const byteAt = tmpResult.getByteAt(dataView, sum + 7);
      tmp4 = { value: byteAt, description: "" + byteAt };
      const obj2 = { value: byteAt, description: "" + byteAt };
    }
    let tmp6;
    if (3 <= shortAt) {
      const tmpResult4 = _modDef7373;
      const byteAt1 = tmpResult4.getByteAt(dataView, sum + 2);
      tmp6 = { value: byteAt1, description: "" + byteAt1 };
      const obj3 = { value: byteAt1, description: "" + byteAt1 };
    }
    const obj4 = { "Bits Per Sample": tmp6, "Image Height": tmp8, "Image Width": tmp11, "Color Components": tmp4, Subsampling: tmp14 };
    tmp8 = undefined;
    if (5 <= shortAt) {
      const tmpResult5 = _modDef7373;
      const shortAt1 = tmpResult5.getShortAt(dataView, sum + 3);
      const _HermesInternal = HermesInternal;
      tmp8 = { value: shortAt1, description: "" + shortAt1 + "px" };
      const obj5 = { value: shortAt1, description: "" + shortAt1 + "px" };
    }
    tmp11 = undefined;
    if (7 <= shortAt) {
      const tmpResult6 = _modDef7373;
      const shortAt2 = tmpResult6.getShortAt(dataView, sum + 5);
      const _HermesInternal2 = HermesInternal;
      tmp11 = { value: shortAt2, description: "" + shortAt2 + "px" };
      const obj6 = { value: shortAt2, description: "" + shortAt2 + "px" };
    }
    tmp14 = tmp4;
    if (tmp14) {
      const value = tmp4.value;
      let tmp15;
      if (8 + 3 * value <= shortAt) {
        let num6;
        const items = [];
        for (let num6 = 0; num6 < value; num6 = num6 + 1) {
          sum = sum + 8 + 3 * num6;
          let push = items.push;
          let obj11 = _modDef7373;
          let items1 = [obj11.getByteAt(dataView, sum), , ];
          let obj12 = _modDef7373;
          items1[1] = obj12.getByteAt(dataView, sum + 1);
          let obj13 = _modDef7373;
          items1[2] = obj13.getByteAt(dataView, sum + 2);
          let arr = push(items1);
        }
        const obj7 = { value: items, description: str6 };
        str6 = "";
        if (items.length > 1) {
          let closure_0 = { 1: "Y", 2: "Cb", 3: "Cr", 4: "I", 5: "Q" };
          const mapped = items.map((item) => closure_0[item[0]]);
          let str7 = "";
          const joined = mapped.join("");
          if (0 !== items.length) {
            str7 = "";
            if (undefined !== items[0][1]) {
              const obj8 = { 17: "4:4:4 (1 1)", 18: "4:4:0 (1 2)", 20: "4:4:1 (1 4)", 33: "4:2:2 (2 1)", 34: "4:2:0 (2 2)", 36: "4:2:1 (2 4)", 65: "4:1:1 (4 1)", 66: "4:1:0 (4 2)" };
              str7 = "";
              if (undefined !== obj8[items[0][1]]) {
                str7 = obj8[items[0][1]];
              }
            }
          }
          str6 = joined + str7;
        }
        tmp15 = obj7;
      }
      tmp14 = tmp15;
    }
    return obj4;
  }
};