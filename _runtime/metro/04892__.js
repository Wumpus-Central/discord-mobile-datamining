// === Module 4892: ? ===

// Module 4892
import callBoundIntrinsic from "callBoundIntrinsic" /* 1316 */;
import ToObject from "ToObject" /* 4893 */;
import _mod4895 from "module_4895" /* 4895 */;
import ToUint32 from "ToUint32" /* 4896 */;
import ToString from "ToString" /* 4908 */;
import _mod4920 from "module_4920" /* 4920 */;
import ArraySpeciesCreate from "ArraySpeciesCreate" /* 4921 */;
import Get from "Get" /* 4931 */;
import HasProperty from "HasProperty" /* 4944 */;
import Call from "Call" /* 4945 */;
import CreateDataPropertyOrThrow from "CreateDataPropertyOrThrow" /* 4946 */;

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
    if (_mod4895(tmp3)) {
      arr = closure_3(tmp3, "");
    }
  }
  const tmp5 = ToUint32(arr.length);
  if (_mod4920(arg0)) {
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