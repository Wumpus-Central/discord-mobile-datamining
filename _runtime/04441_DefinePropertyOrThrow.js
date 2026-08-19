// === Module 4441: DefinePropertyOrThrow ===

// Module 4441 (DefinePropertyOrThrow)
import _mod541 from "module_541" /* 541 */;
import isObject from "isObject" /* 4391 */;
import isPropertyKey from "isPropertyKey" /* 4438 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 4442 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 4443 */;
import result from "result" /* 4445 */;
import IsDataDescriptor from "IsDataDescriptor" /* 4446 */;
import SameValue from "SameValue" /* 4447 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 4448 */;


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