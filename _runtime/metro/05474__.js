// === Module 5474: ? ===

// Module 5474
import _modDef5442 from "module_5442" /* 5442 */;

importDefault = arg2;
const dependencyMap = arg6;
let c2 = 4;
let c3 = 7;

export default {
  read(getUint8, sum) {
    const byteAt = _modDef5442.getByteAt(getUint8, sum);
    let num = 0;
    if (16 & byteAt) {
      num = 1;
    }
    const obj2 = { value: num, description: null };
    let str = "No";
    let str2 = "No";
    if (16 & byteAt) {
      str2 = "Yes";
    }
    const obj3 = { Alpha: obj2 };
    obj2.description = str2;
    let num2 = 0;
    if (2 & byteAt) {
      num2 = 1;
    }
    const obj4 = { value: num2, description: null };
    if (2 & byteAt) {
      str = "Yes";
    }
    obj4.description = str;
    obj3.Animation = obj4;
    sum = sum + c2;
    const byteAt1 = _modDef5442.getByteAt(getUint8, sum);
    const tmpResult = _modDef5442;
    const sum1 = byteAt1 + 256 * _modDef5442.getByteAt(getUint8, sum + 1);
    const tmpResult6 = _modDef5442;
    const sum2 = sum1 + 65536 * _modDef5442.getByteAt(getUint8, sum + 2) + 1;
    obj3.ImageWidth = { value: sum2, description: `${tmp9}px` };
    const sum3 = sum + c3;
    const obj5 = { value: sum2, description: `${tmp9}px` };
    const tmpResult7 = _modDef5442;
    const byteAt2 = _modDef5442.getByteAt(getUint8, sum3);
    const tmpResult8 = _modDef5442;
    const sum4 = byteAt2 + 256 * _modDef5442.getByteAt(getUint8, sum3 + 1);
    const tmpResult9 = _modDef5442;
    const sum5 = sum4 + 65536 * _modDef5442.getByteAt(getUint8, sum3 + 2) + 1;
    obj3.ImageHeight = { value: sum5, description: `${tmp13}px` };
    return obj3;
  }
};