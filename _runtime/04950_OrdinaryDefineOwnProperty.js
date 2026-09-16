// _runtime/04950_OrdinaryDefineOwnProperty.js
import _mod1282 from "metro/01282__.js";
import _mod1283 from "metro/01283__.js";
import _mod1303 from "metro/01303__.js";
import _mod4887 from "metro/04887__.js";
import _mod4934 from "metro/04934__.js";
import _mod4938 from "metro/04938__.js";
import ToPropertyDescriptor from "04939_ToPropertyDescriptor.js";
import SameValue from "04943_SameValue.js";
import IsAccessorDescriptor from "04951_IsAccessorDescriptor.js";
import _mod4952 from "metro/04952__.js";
import ValidateAndApplyPropertyDescriptor from "04953_ValidateAndApplyPropertyDescriptor.js";

export default function OrdinaryDefineOwnProperty(arg0, arg1, __Writable__) {
  if (_mod4887(arg0)) {
    if (_mod4934(arg1)) {
      if (_mod4938(__Writable__)) {
        if (_mod1283) {
          const tmp30 = _mod1283(arg0, arg1);
          let tmp31 = tmp30;
          if (tmp30) {
            tmp31 = ToPropertyDescriptor(tmp30);
          }
          return ValidateAndApplyPropertyDescriptor(arg0, arg1, _mod4952(arg0), __Writable__, tmp31);
        } else if (IsAccessorDescriptor(__Writable__)) {
          const tmp28 = new _mod1303("This environment does not support accessor property descriptors.");
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
              const tmp24 = new _mod1303(
                "This environment does not support defining non-writable, non-enumerable, or non-configurable properties",
              );
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
}
