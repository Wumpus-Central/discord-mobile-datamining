// _runtime/05379_DefinePropertyOrThrow.js
import _mod1293 from "metro/01293__.js";
import isObject from "05329_isObject.js";
import isPropertyKey from "05376_isPropertyKey.js";
import isPropertyDescriptor from "05380_isPropertyDescriptor.js";
import ToPropertyDescriptor from "05381_ToPropertyDescriptor.js";
import DefineOwnProperty from "05383_DefineOwnProperty.js";
import IsDataDescriptor from "05384_IsDataDescriptor.js";
import SameValue from "05385_SameValue.js";
import FromPropertyDescriptor from "05386_FromPropertyDescriptor.js";

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
}
