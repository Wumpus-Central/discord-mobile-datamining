// === Module 5379: DefinePropertyOrThrow ===

// Module 5379 (DefinePropertyOrThrow)
import _mod1293 from "module_1293" /* 1293 */;
import isObject from "isObject" /* 5329 */;
import isPropertyKey from "isPropertyKey" /* 5376 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5380 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5381 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5383 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5384 */;
import SameValue from "SameValue" /* 5385 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5386 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      let tmp9 = arg2;
      if (!isPropertyDescriptor(arg2)) {
        tmp9 = ToPropertyDescriptor(arg2);
      }
      if (isPropertyDescriptor(tmp9)) {
        const tmpResult = DefineOwnProperty;
        const tmpResult3 = IsDataDescriptor;
        const tmpResult4 = SameValue;
        return tmpResult(tmpResult3, tmpResult4, FromPropertyDescriptor, arg0, arg1, tmp10);
      } else {
        const self5 = this;
        const self6 = this;
        const tmp11 = new _mod1293("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp11;
      }
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1293("Assertion failed: P is not a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1293("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};