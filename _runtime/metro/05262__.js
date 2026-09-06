// === Module 5262: ? ===

// Module 5262
const module = arg2;
const dependencyMap = arg6;
let c2 = 4;
let c3 = 7;
arg5.default = {
  read(getUint8, sum) {
    let obj = module(5230);
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
    obj = { Alpha: obj };
    obj[1] = str2;
    let num2 = 0;
    if (2 & byteAt) {
      num2 = 1;
    }
    obj1 = { value: num2, description: null };
    if (2 & byteAt) {
      str = "Yes";
    }
    obj1[1] = str;
    obj.Animation = obj1;
    sum = sum + c2;
    let tmpResult = tmp(5230);
    const byteAt1 = tmpResult.getByteAt(getUint8, sum);
    tmpResult = tmp(5230);
    const sum1 = byteAt1 + 256 * tmpResult.getByteAt(getUint8, sum + 1);
    const sum2 = sum1 + 65536 * module(5230).getByteAt(getUint8, sum + 2) + 1;
    obj.ImageWidth = { value: sum2, description: `${tmp9}px` };
    const sum3 = sum + c3;
    const obj2 = { value: sum2, description: `${tmp9}px` };
    const tmpResult1 = module(5230);
    const byteAt2 = module(5230).getByteAt(getUint8, sum3);
    const tmpResult2 = module(5230);
    const sum4 = byteAt2 + 256 * module(5230).getByteAt(getUint8, sum3 + 1);
    const tmpResult3 = module(5230);
    const sum5 = sum4 + 65536 * module(5230).getByteAt(getUint8, sum3 + 2) + 1;
    obj.ImageHeight = { value: sum5, description: `${tmp13}px` };
    return obj;
  }
};