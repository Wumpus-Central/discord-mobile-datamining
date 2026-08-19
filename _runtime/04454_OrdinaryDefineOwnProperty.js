// === Module 4454: OrdinaryDefineOwnProperty ===

// Module 4454 (OrdinaryDefineOwnProperty)
import _mod541 from "module_541" /* 541 */;
import _mod542 from "module_542" /* 542 */;
import _mod562 from "module_562" /* 562 */;
import isObject from "isObject" /* 4391 */;
import isPropertyKey from "isPropertyKey" /* 4438 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 4442 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 4443 */;
import SameValue from "SameValue" /* 4447 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 4455 */;
import getEvalledConstructor from "getEvalledConstructor" /* 4456 */;
import ValidateAndApplyPropertyDescriptor from "ValidateAndApplyPropertyDescriptor" /* 4457 */;


export default function OrdinaryDefineOwnProperty(arg0, arg1, __Writable__) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      if (isPropertyDescriptor(__Writable__)) {
        if (_mod542) {
          const tmp30 = _mod542(arg0, arg1);
          let tmp31 = tmp30;
          if (tmp30) {
            tmp31 = ToPropertyDescriptor(tmp30);
          }
          return ValidateAndApplyPropertyDescriptor(arg0, arg1, getEvalledConstructor(arg0), __Writable__, tmp31);
        } else if (IsAccessorDescriptor(__Writable__)) {
          const tmp28 = new _mod562("This environment does not support accessor property descriptors.");
          throw tmp28;
        } else {
          let tmp17 = !(arg1 in arg0) && __Writable__["[[Writable]]"] && __Writable__["[[Enumerable]]"] && __Writable__["[[Configurable]]"];
          if (tmp17) {
            tmp17 = "[[Value]]" in __Writable__;
          }
          let tmp18 = arg1 in arg0;
          if (tmp18) {
            tmp18 = !("[[Configurable]]" in __Writable__) || __Writable__["[[Configurable]]"];
          }
          if (tmp18) {
            tmp18 = !("[[Enumerable]]" in __Writable__) || __Writable__["[[Enumerable]]"];
          }
          if (tmp18) {
            tmp18 = !("[[Writable]]" in __Writable__) || __Writable__["[[Writable]]"];
          }
          if (tmp18) {
            tmp18 = "[[Value]]" in __Writable__;
          }
          if (!tmp17) {
            if (!tmp18) {
              const tmp24 = new _mod562("This environment does not support defining non-writable, non-enumerable, or non-configurable properties");
              throw tmp24;
            }
          }
          arg0[arg1] = __Writable__["[[Value]]"];
          return SameValue(arg0[arg1], __Writable__["[[Value]]"]);
        }
      } else {
        const tmp15 = new _mod541("Assertion failed: Desc must be a Property Descriptor");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod541("Assertion failed: P must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod541("Assertion failed: O must be an Object");
    throw tmp5;
  }
};