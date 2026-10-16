// === Module 5876: ? ===

// Module 5876
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import ToObject from "ToObject" /* 5877 */;
import _mod5879 from "module_5879" /* 5879 */;
import ToUint32 from "ToUint32" /* 5880 */;
import ToString from "ToString" /* 5892 */;
import _mod5904 from "module_5904" /* 5904 */;
import ArraySpeciesCreate from "ArraySpeciesCreate" /* 5905 */;
import Get from "Get" /* 5915 */;
import HasProperty from "HasProperty" /* 5928 */;
import Call from "Call" /* 5929 */;
import CreateDataPropertyOrThrow from "CreateDataPropertyOrThrow" /* 5930 */;

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
    if (_mod5879(tmp3)) {
      arr = closure_3(tmp3, "");
    }
  }
  const tmp5 = ToUint32(arr.length);
  if (_mod5904(arg0)) {
    if (arguments.length > 1) {
      const tmp11 = arguments[1];
    }
    const tmp12 = ArraySpeciesCreate(tmp3, tmp5);
    for (let num2 = 0; num2 < tmp5; num2 = num2 + 1) {
      let tmp15 = ToString(num2);
      if (HasProperty(tmp3, tmp15)) {
        let tmp17 = Get(tmp3, tmp15);
        let items = [tmp17, num2, tmp3];
        let tmp18 = Call(arg0, tmp11, items);
        let tmp19 = CreateDataPropertyOrThrow(tmp12, tmp15, tmp18);
      }
    }
    return tmp12;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Array.prototype.map callback must be a function");
    throw typeError;
  }
};