// === Module 4769: map ===

// Module 4769 (map)
import callBoundIntrinsic from "callBoundIntrinsic" /* 571 */;
import ToObject from "ToObject" /* 4770 */;
import ToUint32 from "ToUint32" /* 4773 */;
import ToString from "ToString" /* 4785 */;
import apply from "apply" /* 4797 */;
import HasProperty from "HasProperty" /* 4821 */;

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
    if (tmp(4772)(tmp3)) {
      arr = callback(tmp3, "");
    }
  }
  const tmp5 = ToUint32(arr.length);
  if (apply(arg0)) {
    if (arguments.length > 1) {
      const tmp11 = arguments[1];
    }
    const tmp12 = tmp(4798)(tmp3, tmp5);
    for (let num2 = 0; num2 < tmp5; num2 = num2 + 1) {
      let tmp13 = require;
      let tmp14 = dependencyMap;
      let tmp15 = ToString(num2);
      let tmp16 = num2;
      if (HasProperty(tmp3, tmp15)) {
        let tmp17 = tmp13(4808)(tmp3, tmp15);
        let items = [tmp17, num2, tmp3];
        let tmp18 = tmp13(4822)(arg0, tmp11, items);
        let tmp19 = tmp13(4823)(tmp12, tmp15, tmp18);
      }
    }
    return tmp12;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Array.prototype.map callback must be a function");
    throw typeError;
  }
};