// _runtime/05711_OrdinaryDefineOwnProperty.js
import _mod1306 from "metro/01306__.js";
import _mod1307 from "metro/01307__.js";
import _mod1327 from "metro/01327__.js";
import _mod5648 from "metro/05648__.js";
import _mod5695 from "metro/05695__.js";
import _mod5699 from "metro/05699__.js";
import ToPropertyDescriptor from "05700_ToPropertyDescriptor.js";
import SameValue from "05704_SameValue.js";
import IsAccessorDescriptor from "05712_IsAccessorDescriptor.js";
import _mod5713 from "metro/05713__.js";
import ValidateAndApplyPropertyDescriptor from "05714_ValidateAndApplyPropertyDescriptor.js";

export default function OrdinaryDefineOwnProperty(arg0, arg1, __Writable__) {
  if (_mod5648(arg0)) {
    if (_mod5695(arg1)) {
      if (_mod5699(__Writable__)) {
        if (_mod1307) {
          const tmp30 = _mod1307(arg0, arg1);
          let tmp31 = tmp30;
          if (tmp30) {
            tmp31 = ToPropertyDescriptor(tmp30);
          }
          return ValidateAndApplyPropertyDescriptor(arg0, arg1, _mod5713(arg0), __Writable__, tmp31);
        } else if (IsAccessorDescriptor(__Writable__)) {
          const tmp28 = new _mod1327("This environment does not support accessor property descriptors.");
          throw tmp28;
        } else {
          let tmp17 =
            !(arg1 in arg0) &&
            __Writable__["[[Writable]]"] &&
            __Writable__["[[Enumerable]]"] &&
            __Writable__["[[Configurable]]"];
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
              const tmp24 = new _mod1327(
                "This environment does not support defining non-writable, non-enumerable, or non-configurable properties",
              );
              throw tmp24;
            }
          }
          arg0[arg1] = __Writable__["[[Value]]"];
          return SameValue(arg0[arg1], __Writable__["[[Value]]"]);
        }
      } else {
        const tmp15 = new _mod1306("Assertion failed: Desc must be a Property Descriptor");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod1306("Assertion failed: P must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1306("Assertion failed: O must be an Object");
    throw tmp5;
  }
}
