// === Module 4872: OrdinaryDefineOwnProperty ===

// Module 4872 (OrdinaryDefineOwnProperty)
import _mod1283 from "module_1283" /* 1283 */;
import _mod1284 from "module_1284" /* 1284 */;
import _mod1304 from "module_1304" /* 1304 */;
import _mod4809 from "module_4809" /* 4809 */;
import _mod4856 from "module_4856" /* 4856 */;
import _mod4860 from "module_4860" /* 4860 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 4861 */;
import SameValue from "SameValue" /* 4865 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 4873 */;
import _mod4874 from "module_4874" /* 4874 */;
import ValidateAndApplyPropertyDescriptor from "ValidateAndApplyPropertyDescriptor" /* 4875 */;


export default function OrdinaryDefineOwnProperty(arg0, arg1, __Writable__) {
  if (_mod4809(arg0)) {
    if (_mod4856(arg1)) {
      if (_mod4860(__Writable__)) {
        if (_mod1284) {
          const tmp30 = _mod1284(arg0, arg1);
          let tmp31 = tmp30;
          if (tmp30) {
            tmp31 = ToPropertyDescriptor(tmp30);
          }
          return ValidateAndApplyPropertyDescriptor(arg0, arg1, _mod4874(arg0), __Writable__, tmp31);
        } else if (IsAccessorDescriptor(__Writable__)) {
          const tmp28 = new _mod1304("This environment does not support accessor property descriptors.");
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
              const tmp24 = new _mod1304("This environment does not support defining non-writable, non-enumerable, or non-configurable properties");
              throw tmp24;
            }
          }
          arg0[arg1] = __Writable__["[[Value]]"];
          return SameValue(arg0[arg1], __Writable__["[[Value]]"]);
        }
      } else {
        const tmp15 = new _mod1283("Assertion failed: Desc must be a Property Descriptor");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod1283("Assertion failed: P must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1283("Assertion failed: O must be an Object");
    throw tmp5;
  }
};