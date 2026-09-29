// === Module 5328: OrdinaryDefineOwnProperty ===

// Module 5328 (OrdinaryDefineOwnProperty)
import _mod1282 from "module_1282" /* 1282 */;
import _mod1283 from "module_1283" /* 1283 */;
import _mod1303 from "module_1303" /* 1303 */;
import _mod5265 from "module_5265" /* 5265 */;
import _mod5312 from "module_5312" /* 5312 */;
import _mod5316 from "module_5316" /* 5316 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5317 */;
import SameValue from "SameValue" /* 5321 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 5329 */;
import _mod5330 from "module_5330" /* 5330 */;
import ValidateAndApplyPropertyDescriptor from "ValidateAndApplyPropertyDescriptor" /* 5331 */;


export default function OrdinaryDefineOwnProperty(arg0, arg1, __Writable__) {
  if (_mod5265(arg0)) {
    if (_mod5312(arg1)) {
      if (_mod5316(__Writable__)) {
        if (_mod1283) {
          const tmp30 = _mod1283(arg0, arg1);
          let tmp31 = tmp30;
          if (tmp30) {
            tmp31 = ToPropertyDescriptor(tmp30);
          }
          return ValidateAndApplyPropertyDescriptor(arg0, arg1, _mod5330(arg0), __Writable__, tmp31);
        } else if (IsAccessorDescriptor(__Writable__)) {
          const tmp28 = new _mod1303("This environment does not support accessor property descriptors.");
          throw tmp28;
        } else {
          let tmp17 = !(arg1 in arg0) && __Writable__["[[Writable]]"] && __Writable__["[[Enumerable]]"] && __Writable__["[[Configurable]]"];
          if (tmp17) {
            tmp17 = "[[Value]]" in __Writable__;
          }
          let tmp18 = arg1 in arg0;
          if (tmp18) {
            tmp18 = !("[[Configurable]]" in __Writable__) || __Writable__["[[Configurable]]"];
            const tmp19 = !("[[Configurable]]" in __Writable__) || __Writable__["[[Configurable]]"];
          }
          if (tmp18) {
            tmp18 = !("[[Enumerable]]" in __Writable__) || __Writable__["[[Enumerable]]"];
            const tmp20 = !("[[Enumerable]]" in __Writable__) || __Writable__["[[Enumerable]]"];
          }
          if (tmp18) {
            tmp18 = !("[[Writable]]" in __Writable__) || __Writable__["[[Writable]]"];
            const tmp21 = !("[[Writable]]" in __Writable__) || __Writable__["[[Writable]]"];
          }
          if (tmp18) {
            tmp18 = "[[Value]]" in __Writable__;
          }
          if (!tmp17) {
            if (!tmp18) {
              const tmp24 = new _mod1303("This environment does not support defining non-writable, non-enumerable, or non-configurable properties");
              throw tmp24;
            }
          }
          arg0[arg1] = __Writable__["[[Value]]"];
          return SameValue(arg0[arg1], __Writable__["[[Value]]"]);
        }
      } else {
        const tmp15 = new _mod1282("Assertion failed: Desc must be a Property Descriptor");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod1282("Assertion failed: P must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1282("Assertion failed: O must be an Object");
    throw tmp5;
  }
};