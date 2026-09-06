// _runtime/metro/05262__.js
import _modDef5230 from "05230__.js";

importDefault = arg2;
const dependencyMap = arg6;
let c2 = 4;
let c3 = 7;

export default {
  read(getUint8, sum) {
    let obj = _modDef5230;
    const byteAt = obj.getByteAt(getUint8, sum);
    let num = 0;
    if (16 & byteAt) {
      num = 1;
    }
    obj = { value: num, description: null };
    let str = "No";
    let str2 = "No";
    if (16 & byteAt) {
      str2 = "Yes";
    }
    obj = { Alpha: obj, description: str2 };
    let num2 = 0;
    if (2 & byteAt) {
      num2 = 1;
    }
    const obj1 = { value: num2, description: null };
    if (2 & byteAt) {
      str = "Yes";
    }
    obj1.description = str;
    obj.Animation = obj1;
    sum = sum + c2;
    let tmpResult = _modDef5230;
    const byteAt1 = tmpResult.getByteAt(getUint8, sum);
    tmpResult = _modDef5230;
    const sum1 = byteAt1 + 256 * tmpResult.getByteAt(getUint8, sum + 1);
    const sum2 = sum1 + 65536 * _modDef5230.getByteAt(getUint8, sum + 2) + 1;
    obj.ImageWidth = { value: sum2, description: `${tmp9}px` };
    const sum3 = sum + c3;
    const obj2 = { value: sum2, description: `${tmp9}px` };
    const tmpResult1 = _modDef5230;
    const byteAt2 = _modDef5230.getByteAt(getUint8, sum3);
    const tmpResult2 = _modDef5230;
    const sum4 = byteAt2 + 256 * _modDef5230.getByteAt(getUint8, sum3 + 1);
    const tmpResult3 = _modDef5230;
    const sum5 = sum4 + 65536 * _modDef5230.getByteAt(getUint8, sum3 + 2) + 1;
    obj.ImageHeight = { value: sum5, description: `${tmp13}px` };
    return obj;
  },
};
