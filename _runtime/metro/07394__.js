// === Module 7394: ? ===

// Module 7394
import _modDef7362 from "module_7362" /* 7362 */;

let obj = {
  read(getUint8, sum) {
    let obj4;
    let obj5;
    let str2;
    let sum5;
    const obj = _modDef7362;
    const byteAt = obj.getByteAt(getUint8, sum);
    let num = 0;
    if (16 & byteAt) {
      num = 1;
    }
    let str = "No";
    const obj2 = { value: num, description: str2 };
    str2 = "No";
    if (16 & byteAt) {
      str2 = "Yes";
    }
    let num2 = 0;
    const obj3 = { Alpha: obj2, Animation: obj4, ImageWidth: obj5, ImageHeight: { value: sum5, description: `${tmp13}px` } };
    if (2 & byteAt) {
      num2 = 1;
    }
    obj4 = { value: num2, description: str };
    if (2 & byteAt) {
      str = "Yes";
    }
    sum = sum + c2;
    const tmpResult = _modDef7362;
    const byteAt1 = tmpResult.getByteAt(getUint8, sum);
    const tmpResult6 = _modDef7362;
    const sum1 = byteAt1 + 256 * tmpResult6.getByteAt(getUint8, sum + 1);
    const tmpResult7 = _modDef7362;
    const sum2 = sum1 + 65536 * tmpResult7.getByteAt(getUint8, sum + 2) + 1;
    const sum3 = sum + c3;
    obj5 = { value: sum2, description: `${tmp9}px` };
    const tmpResult8 = _modDef7362;
    const byteAt2 = tmpResult8.getByteAt(getUint8, sum3);
    const tmpResult9 = _modDef7362;
    const sum4 = byteAt2 + 256 * tmpResult9.getByteAt(getUint8, sum3 + 1);
    const tmpResult10 = _modDef7362;
    sum5 = sum4 + 65536 * tmpResult10.getByteAt(getUint8, sum3 + 2) + 1;
    return obj3;
  }
};
let c2 = 4;
let c3 = 7;

export default obj;