// === Module 5399: OrdinaryDefineOwnProperty ===

// Module 5399 (OrdinaryDefineOwnProperty)
import _mod1293 from "module_1293" /* 1293 */;
import _mod1294 from "module_1294" /* 1294 */;
import _mod1314 from "module_1314" /* 1314 */;
import _mod5336 from "module_5336" /* 5336 */;
import _mod5383 from "module_5383" /* 5383 */;
import _mod5387 from "module_5387" /* 5387 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5388 */;
import SameValue from "SameValue" /* 5392 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 5400 */;
import _mod5401 from "module_5401" /* 5401 */;
import ValidateAndApplyPropertyDescriptor from "ValidateAndApplyPropertyDescriptor" /* 5402 */;


export default function OrdinaryDefineOwnProperty(arg0, arg1, __Writable__) {
  if (_mod5336(arg0)) {
    if (_mod5383(arg1)) {
      if (_mod5387(__Writable__)) {
        if (_mod1294) {
          const tmp30 = _mod1294(arg0, arg1);
          let tmp31 = tmp30;
          if (tmp30) {
            tmp31 = ToPropertyDescriptor(tmp30);
          }
          return ValidateAndApplyPropertyDescriptor(arg0, arg1, _mod5401(arg0), __Writable__, tmp31);
        } else if (IsAccessorDescriptor(__Writable__)) {
          const tmp28 = new _mod1314("This environment does not support accessor property descriptors.");
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
              const tmp24 = new _mod1314("This environment does not support defining non-writable, non-enumerable, or non-configurable properties");
              throw tmp24;
            }
          }
          arg0[arg1] = __Writable__["[[Value]]"];
          return SameValue(arg0[arg1], __Writable__["[[Value]]"]);
        }
      } else {
        const tmp15 = new _mod1293("Assertion failed: Desc must be a Property Descriptor");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod1293("Assertion failed: P must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1293("Assertion failed: O must be an Object");
    throw tmp5;
  }
};