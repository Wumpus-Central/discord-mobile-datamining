// === Module 5272: ? ===

// Module 5272
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import ToObject from "ToObject" /* 5273 */;
import _mod5275 from "module_5275" /* 5275 */;
import ToUint32 from "ToUint32" /* 5276 */;
import ToString from "ToString" /* 5288 */;
import _mod5300 from "module_5300" /* 5300 */;
import ArraySpeciesCreate from "ArraySpeciesCreate" /* 5301 */;
import Get from "Get" /* 5311 */;
import HasProperty from "HasProperty" /* 5324 */;
import Call from "Call" /* 5325 */;
import CreateDataPropertyOrThrow from "CreateDataPropertyOrThrow" /* 5326 */;

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
    if (_mod5275(tmp3)) {
      arr = closure_3(tmp3, "");
    }
  }
  const tmp5 = ToUint32(arr.length);
  if (_mod5300(arg0)) {
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