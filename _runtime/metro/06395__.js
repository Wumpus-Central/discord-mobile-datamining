// _runtime/metro/06395__.js
import callBoundIntrinsic from "../01341_callBoundIntrinsic.js";
import ToObject from "../06396_ToObject.js";
import _mod6398 from "06398__.js";
import ToUint32 from "../06399_ToUint32.js";
import ToString from "../06411_ToString.js";
import _mod6423 from "06423__.js";
import ArraySpeciesCreate from "../06424_ArraySpeciesCreate.js";
import Get from "../06434_Get.js";
import HasProperty from "../06447_HasProperty.js";
import Call from "../06448_Call.js";
import CreateDataPropertyOrThrow from "../06449_CreateDataPropertyOrThrow.js";

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
    if (_mod6398(tmp3)) {
      arr = closure_3(tmp3, "");
    }
  }
  const tmp5 = ToUint32(arr.length);
  if (_mod6423(arg0)) {
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
