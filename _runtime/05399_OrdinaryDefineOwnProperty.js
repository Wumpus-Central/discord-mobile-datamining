// _runtime/05399_OrdinaryDefineOwnProperty.js
import _mod1293 from "metro/01293__.js";
import _mod1294 from "metro/01294__.js";
import _mod1314 from "metro/01314__.js";
import isObject from "05336_isObject.js";
import isPropertyKey from "05383_isPropertyKey.js";
import isPropertyDescriptor from "05387_isPropertyDescriptor.js";
import ToPropertyDescriptor from "05388_ToPropertyDescriptor.js";
import SameValue from "05392_SameValue.js";
import IsAccessorDescriptor from "05400_IsAccessorDescriptor.js";
import GetIntrinsic from "05401_GetIntrinsic.js";
import ValidateAndApplyPropertyDescriptor from "05402_ValidateAndApplyPropertyDescriptor.js";

export default function OrdinaryDefineOwnProperty(arg0, arg1, __Writable__) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      if (isPropertyDescriptor(__Writable__)) {
        if (_mod1294) {
          const tmp20 = _mod1294(arg0, arg1);
          const tmp21 = tmp20 && ToPropertyDescriptor(tmp20);
          const tmp22 = GetIntrinsic(arg0);
          return ValidateAndApplyPropertyDescriptor(arg0, arg1, tmp22, __Writable__, tmp21);
        } else if (IsAccessorDescriptor(__Writable__)) {
          const self9 = this;
          const self10 = this;
          const tmp18 = new _mod1314("This environment does not support accessor property descriptors.");
          throw tmp18;
        } else {
          let tmp12 = arg1 in arg0;
          const tmp11 =
            !(arg1 in arg0) &&
            __Writable__["[[Writable]]"] &&
            __Writable__["[[Enumerable]]"] &&
            __Writable__["[[Configurable]]"] &&
            "[[Value]]" in __Writable__;
          if (tmp12) {
            tmp12 = !("[[Configurable]]" in __Writable__) || __Writable__["[[Configurable]]"];
          }
          if (tmp12) {
            tmp12 = !("[[Enumerable]]" in __Writable__) || __Writable__["[[Enumerable]]"];
          }
          if (tmp12) {
            tmp12 = !("[[Writable]]" in __Writable__) || __Writable__["[[Writable]]"];
          }
          if (tmp12) {
            tmp12 = "[[Value]]" in __Writable__;
          }
          if (!tmp11) {
            if (!tmp12) {
              const self7 = this;
              const self8 = this;
              const tmp16 = new _mod1314(
                "This environment does not support defining non-writable, non-enumerable, or non-configurable properties",
              );
              throw tmp16;
            }
          }
          arg0[arg1] = __Writable__["[[Value]]"];
          return SameValue(arg0[arg1], __Writable__["[[Value]]"]);
        }
      } else {
        const self5 = this;
        const self6 = this;
        const tmp9 = new _mod1293("Assertion failed: Desc must be a Property Descriptor");
        throw tmp9;
      }
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1293("Assertion failed: P must be a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1293("Assertion failed: O must be an Object");
    throw tmp3;
  }
}
