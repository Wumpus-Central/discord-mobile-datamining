// _runtime/metro/05099__.js
import callBoundIntrinsic from "../01315_callBoundIntrinsic.js";
import ToObject from "../05100_ToObject.js";
import _mod5102 from "05102__.js";
import ToUint32 from "../05103_ToUint32.js";
import ToString from "../05115_ToString.js";
import _mod5127 from "05127__.js";
import ArraySpeciesCreate from "../05128_ArraySpeciesCreate.js";
import Get from "../05138_Get.js";
import HasProperty from "../05151_HasProperty.js";
import Call from "../05152_Call.js";
import CreateDataPropertyOrThrow from "../05153_CreateDataPropertyOrThrow.js";

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
    if (_mod5102(tmp3)) {
      arr = closure_3(tmp3, "");
    }
  }
  const tmp5 = ToUint32(arr.length);
  if (_mod5127(arg0)) {
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
}
