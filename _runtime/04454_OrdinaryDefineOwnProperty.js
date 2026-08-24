// === Module 4454: OrdinaryDefineOwnProperty ===

// Module 4454 (OrdinaryDefineOwnProperty)
import isObject from "isObject" /* 4391 */;


export default function OrdinaryDefineOwnProperty(arg0, arg1, __Writable__) {
  if (isObject(arg0)) {
    if (tmp(4438)(arg1)) {
      if (tmp(4442)(__Writable__)) {
        if (tmp(542)) {
          const tmp30 = tmp(542)(arg0, arg1);
          let tmp31 = tmp30;
          if (tmp30) {
            tmp31 = tmp(4443)(tmp30);
          }
          return tmp(4457)(arg0, arg1, tmp(4456)(arg0), __Writable__, tmp31);
        } else if (tmp(4455)(__Writable__)) {
          const tmp28 = new tmp(562)("This environment does not support accessor property descriptors.");
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
              const tmp24 = new tmp(562)("This environment does not support defining non-writable, non-enumerable, or non-configurable properties");
              throw tmp24;
            }
          }
          arg0[arg1] = __Writable__["[[Value]]"];
          return tmp(4447)(arg0[arg1], __Writable__["[[Value]]"]);
        }
      } else {
        const tmp15 = new tmp(541)("Assertion failed: Desc must be a Property Descriptor");
        throw tmp15;
      }
    } else {
      const tmp10 = new tmp(541)("Assertion failed: P must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: O must be an Object");
    throw tmp5;
  }
};