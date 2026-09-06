// === Module 4816: map ===

// Module 4816 (map)
import callBoundIntrinsic from "callBoundIntrinsic" /* 1316 */;
import ToObject from "ToObject" /* 4817 */;
import ToUint32 from "ToUint32" /* 4820 */;
import ToString from "ToString" /* 4832 */;
import apply from "apply" /* 4844 */;
import HasProperty from "HasProperty" /* 4868 */;

const ObjectResult = Object("a");
let tmp2 = "a" !== ObjectResult[0];
if (!tmp2) {
  tmp2 = !(0 in ObjectResult);
}
let closure_2 = tmp2;
let closure_3 = callBoundIntrinsic("String.prototype.split");

export default function map(arg0) {
  const tmp3 = ToObject(this);
  let arr = tmp3;
  if (closure_2) {
    arr = tmp3;
    if (tmp(4819)(tmp3)) {
      arr = callback(tmp3, "");
    }
  }
  const tmp5 = ToUint32(arr.length);
  if (apply(arg0)) {
    if (arguments.length > 1) {
      const tmp11 = arguments[1];
    }
    const tmp12 = tmp(4845)(tmp3, tmp5);
    for (let num2 = 0; num2 < tmp5; num2 = num2 + 1) {
      let tmp13 = require;
      let tmp14 = dependencyMap;
      let tmp15 = ToString(num2);
      let tmp16 = num2;
      if (HasProperty(tmp3, tmp15)) {
        let tmp17 = tmp13(4855)(tmp3, tmp15);
        let items = [tmp17, num2, tmp3];
        let tmp18 = tmp13(4869)(arg0, tmp11, items);
        let tmp19 = tmp13(4870)(tmp12, tmp15, tmp18);
      }
    }
    return tmp12;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Array.prototype.map callback must be a function");
    throw typeError;
  }
};