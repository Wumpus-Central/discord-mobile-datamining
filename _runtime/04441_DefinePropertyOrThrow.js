// _runtime/04441_DefinePropertyOrThrow.js
import _mod541 from "metro/00541__.js";
import isObject from "04391_isObject.js";
import isPropertyKey from "04438_isPropertyKey.js";
import isPropertyDescriptor from "04442_isPropertyDescriptor.js";
import ToPropertyDescriptor from "04443_ToPropertyDescriptor.js";
import result from "04445_result.js";
import IsDataDescriptor from "04446_IsDataDescriptor.js";
import SameValue from "04447_SameValue.js";
import FromPropertyDescriptor from "04448_FromPropertyDescriptor.js";


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      let tmp13 = arg2;
      if (!isPropertyDescriptor(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (isPropertyDescriptor(tmp13)) {
        const tmpResult = IsDataDescriptor;
        return tmpResult(tmpResult, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod541("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod541("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod541("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};