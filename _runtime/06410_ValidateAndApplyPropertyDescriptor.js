// === Module 6410: ValidateAndApplyPropertyDescriptor ===

// Module 6410 (ValidateAndApplyPropertyDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6344 from "module_6344" /* 6344 */;
import _mod6391 from "module_6391" /* 6391 */;
import _mod6395 from "module_6395" /* 6395 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6398 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6399 */;
import SameValue from "SameValue" /* 6400 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6401 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 6408 */;
import _mod6411 from "module_6411" /* 6411 */;
import _mod6412 from "module_6412" /* 6412 */;
import IsGenericDescriptor from "IsGenericDescriptor" /* 6413 */;


export default function ValidateAndApplyPropertyDescriptor(arg0, arg1, flag, __Configurable__, arg4) {
  const tmp3 = _mod6411(arg0);
  if (undefined !== arg0) {
    if (!_mod6344(arg0)) {
      const tmp6 = new _mod1308("Assertion failed: O must be undefined or an Object");
      throw tmp6;
    }
  }
  if (_mod6391(arg1)) {
    if (typeof flag !== "boolean") {
      const tmp88 = new _mod1308("Assertion failed: extensible must be a Boolean");
      throw tmp88;
    } else if (_mod6395(__Configurable__)) {
      let prop = arg4;
      if (undefined !== arg4) {
        if (!_mod6395(prop)) {
          const tmp20 = new _mod1308("Assertion failed: current must be a Property Descriptor, or undefined");
          throw tmp20;
        }
      }
      if (undefined === prop) {
        let tmp65 = flag;
        if (tmp65) {
          if ("Undefined" === tmp3) {
            tmp65 = tmp66;
          } else {
            const tmpResult = DefineOwnProperty;
            const tmpResult17 = IsDataDescriptor;
            const tmpResult18 = SameValue;
            const tmpResult19 = FromPropertyDescriptor;
            if (tmp67) {
              let tmpResultResult = tmpResult(tmpResult17, tmpResult18, tmpResult19, arg0, arg1, __Configurable__);
            } else {
              const obj2 = { "[[Configurable]]": __Configurable__["[[Configurable]]"], "[[Enumerable]]": __Configurable__["[[Enumerable]]"], "[[Value]]": __Configurable__["[[Value]]"], "[[Writable]]": __Configurable__["[[Writable]]"] };
              tmpResultResult = tmpResult(tmpResult17, tmpResult18, tmpResult19, arg0, arg1, obj2);
            }
            tmp67 = IsAccessorDescriptor(__Configurable__);
          }
        }
        return tmp65;
      } else {
        const obj3 = { IsAccessorDescriptor, IsDataDescriptor };
        if (tmpResult20(obj3, prop)) {
          if (!prop["[[Configurable]]"]) {
            if ("[[Configurable]]" in __Configurable__) {
              if (__Configurable__["[[Configurable]]"]) {
                return false;
              }
            }
            if ("[[Enumerable]]" in __Configurable__) {
              if (!SameValue(__Configurable__["[[Enumerable]]"], prop["[[Enumerable]]"])) {
                return false;
              }
            }
            if (!IsGenericDescriptor(__Configurable__)) {
              const tmpResult21 = SameValue;
              if (!tmpResult21(tmp27, IsAccessorDescriptor(prop))) {
                return false;
              }
              tmp27 = IsAccessorDescriptor(__Configurable__);
            }
            if (IsAccessorDescriptor(prop)) {
              if ("[[Get]]" in __Configurable__) {
                if (!SameValue(__Configurable__["[[Get]]"], prop["[[Get]]"])) {
                  return false;
                }
              }
              if ("[[Set]]" in __Configurable__) {
                if (!SameValue(__Configurable__["[[Set]]"], prop["[[Set]]"])) {
                  return false;
                }
              }
            } else if (!prop["[[Writable]]"]) {
              if ("[[Writable]]" in __Configurable__) {
                if (__Configurable__["[[Writable]]"]) {
                  return false;
                }
              }
              if ("[[Value]]" in __Configurable__) {
                if (!SameValue(__Configurable__["[[Value]]"], prop["[[Value]]"])) {
                  return false;
                }
              }
            }
          }
          if ("Undefined" === tmp3) {
            return tmp28;
          } else {
            if (!IsDataDescriptor(prop)) {
              if (IsAccessorDescriptor(prop)) {
                if (IsDataDescriptor(__Configurable__)) {
                  let tmp37 = prop;
                  if ("[[Configurable]]" in __Configurable__) {
                    tmp37 = __Configurable__;
                  }
                  let tmp38 = prop;
                  if ("[[Enumerable]]" in __Configurable__) {
                    tmp38 = __Configurable__;
                  }
                  const tmpResult23 = IsDataDescriptor;
                  const tmpResult24 = SameValue;
                  const tmpResult25 = FromPropertyDescriptor;
                  const obj = { "[[Configurable]]": tmp37["[[Configurable]]"], "[[Enumerable]]": tmp38["[[Enumerable]]"], "[[Value]]": null, "[[Writable]]": null };
                  let tmp43 = prop;
                  if ("[[Value]]" in __Configurable__) {
                    tmp43 = __Configurable__;
                  }
                  obj["[[Value]]"] = tmp43["[[Value]]"];
                  let tmp44 = prop;
                  if ("[[Writable]]" in __Configurable__) {
                    tmp44 = __Configurable__;
                  }
                  obj["[[Writable]]"] = tmp44["[[Writable]]"];
                  let tmpResult6Result = DefineOwnProperty(tmpResult23, tmpResult24, tmpResult25, arg0, arg1, obj);
                  const tmpResult22 = DefineOwnProperty;
                }
              }
              const tmpResult27 = IsDataDescriptor;
              const tmpResult26 = DefineOwnProperty;
              tmpResult6Result = tmpResult26(tmpResult27, SameValue, FromPropertyDescriptor, arg0, arg1, __Configurable__);
              const tmpResult28 = SameValue;
            }
            let tmp51 = prop;
            if ("[[Configurable]]" in __Configurable__) {
              tmp51 = __Configurable__;
            }
            let tmp52 = prop;
            if ("[[Enumerable]]" in __Configurable__) {
              tmp52 = __Configurable__;
            }
            const tmpResult30 = IsDataDescriptor;
            const tmpResult31 = SameValue;
            const tmpResult32 = FromPropertyDescriptor;
            const obj4 = { "[[Configurable]]": tmp51["[[Configurable]]"], "[[Enumerable]]": tmp52["[[Enumerable]]"], "[[Get]]": null, "[[Set]]": null };
            let tmp57 = prop;
            if ("[[Get]]" in __Configurable__) {
              tmp57 = __Configurable__;
            }
            obj4["[[Get]]"] = tmp57["[[Get]]"];
            if ("[[Set]]" in __Configurable__) {
              prop = __Configurable__;
            }
            prop = prop["[[Set]]"];
            obj4["[[Set]]"] = prop;
            tmpResult6Result = DefineOwnProperty(tmpResult30, tmpResult31, tmpResult32, arg0, arg1, obj4);
            const tmpResult29 = DefineOwnProperty;
          }
        } else {
          const tmp24 = new _mod1308("`current`, when present, must be a fully populated and valid Property Descriptor");
          throw tmp24;
        }
        tmpResult20 = _mod6412;
      }
    } else {
      const tmp15 = new _mod1308("Assertion failed: Desc must be a Property Descriptor");
      throw tmp15;
    }
  } else {
    const tmp10 = new _mod1308("Assertion failed: P must be a Property Key");
    throw tmp10;
  }
};