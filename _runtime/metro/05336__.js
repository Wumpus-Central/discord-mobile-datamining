// _runtime/metro/05336__.js
import callBoundIntrinsic from "../01326_callBoundIntrinsic.js";
import ToObject from "../05337_ToObject.js";
import isString from "../05339_isString.js";
import ToUint32 from "../05340_ToUint32.js";
import ToString from "../05352_ToString.js";
import _mod5364 from "05364__.js";
import ArraySpeciesCreate from "../05365_ArraySpeciesCreate.js";
import Get from "../05375_Get.js";
import HasProperty from "../05388_HasProperty.js";
import Call from "../05389_Call.js";
import CreateDataPropertyOrThrow from "../05390_CreateDataPropertyOrThrow.js";

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
    if (isString(tmp3)) {
      arr = closure_3(tmp3, "");
    }
  }
  const tmp5 = ToUint32(arr.length);
  if (_mod5364(arg0)) {
    let tmp9;
    let num2;
    if (arguments.length > 1) {
      tmp9 = arguments[1];
    }
    const tmp10 = ArraySpeciesCreate(tmp3, tmp5);
    for (let num2 = 0; num2 < tmp5; num2 = num2 + 1) {
      let tmp13 = ToString(num2);
      if (HasProperty(tmp3, tmp13)) {
        let tmp15 = Get(tmp3, tmp13);
        let items = [tmp15, num2, tmp3];
        let tmp16 = Call(arg0, tmp9, items);
        let tmp17 = CreateDataPropertyOrThrow(tmp10, tmp13, tmp16);
      }
    }
    return tmp10;
  } else {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("Array.prototype.map callback must be a function");
    throw typeError;
  }
}
