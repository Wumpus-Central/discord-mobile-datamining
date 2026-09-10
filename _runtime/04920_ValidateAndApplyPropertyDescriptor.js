// === Module 4920: ValidateAndApplyPropertyDescriptor ===

// Module 4920 (ValidateAndApplyPropertyDescriptor)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4854 from "module_4854" /* 4854 */;
import _mod4901 from "module_4901" /* 4901 */;
import _mod4905 from "module_4905" /* 4905 */;
import DefineOwnProperty from "DefineOwnProperty" /* 4908 */;
import IsDataDescriptor from "IsDataDescriptor" /* 4909 */;
import SameValue from "SameValue" /* 4910 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 4911 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 4918 */;
import _mod4921 from "module_4921" /* 4921 */;
import _mod4922 from "module_4922" /* 4922 */;
import IsGenericDescriptor from "IsGenericDescriptor" /* 4923 */;


export default function ValidateAndApplyPropertyDescriptor(arg0, arg1, flag, __Configurable__, arg4) {
  const tmp3 = _mod4921(arg0);
  if (undefined !== arg0) {
    if (!_mod4854(arg0)) {
      const tmp6 = new _mod1283("Assertion failed: O must be undefined or an Object");
      throw tmp6;
    }
  }
  if (_mod4901(arg1)) {
    if (typeof flag !== "boolean") {
      const tmp88 = new _mod1283("Assertion failed: extensible must be a Boolean");
      throw tmp88;
    } else if (_mod4905(__Configurable__)) {
      let prop = arg4;
      if (undefined !== arg4) {
        if (!_mod4905(prop)) {
          const tmp20 = new _mod1283("Assertion failed: current must be a Property Descriptor, or undefined");
          throw tmp20;
        }
      }
      if (undefined === prop) {
        let tmp65 = flag;
        if (tmp65) {
          if ("Undefined" === tmp3) {
            tmp65 = tmp66;
          } else {
            const tmpResult = IsDataDescriptor;
            const tmpResult1 = SameValue;
            const tmpResult2 = FromPropertyDescriptor;
            if (tmp67) {
              let tmpResultResult = tmpResult(tmpResult, tmpResult1, tmpResult2, arg0, arg1, __Configurable__);
            } else {
              let obj = { "[[Configurable]]": __Configurable__["[[Configurable]]"], "[[Enumerable]]": __Configurable__["[[Enumerable]]"], "[[Value]]": __Configurable__["[[Value]]"], "[[Writable]]": __Configurable__["[[Writable]]"] };
              tmpResultResult = tmpResult(tmpResult, tmpResult1, tmpResult2, arg0, arg1, obj);
            }
            tmp67 = IsAccessorDescriptor(__Configurable__);
          }
        }
        return tmp65;
      } else {
        obj = { IsAccessorDescriptor, IsDataDescriptor };
        if (tmpResult3(obj, prop)) {
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
              const tmpResult4 = SameValue;
              if (!tmpResult4(tmp27, IsAccessorDescriptor(prop))) {
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
                  const tmpResult6 = IsDataDescriptor;
                  const tmpResult7 = SameValue;
                  const tmpResult8 = FromPropertyDescriptor;
                  obj = { "[[Configurable]]": tmp37["[[Configurable]]"], "[[Enumerable]]": tmp38["[[Enumerable]]"], "[[Value]]": null, "[[Writable]]": null };
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
                  let tmpResult6Result = DefineOwnProperty(tmpResult6, tmpResult7, tmpResult8, arg0, arg1, obj);
                  const tmpResult5 = DefineOwnProperty;
                }
              }
              const tmpResult10 = IsDataDescriptor;
              const tmpResult9 = DefineOwnProperty;
              tmpResult6Result = tmpResult9(tmpResult10, SameValue, FromPropertyDescriptor, arg0, arg1, __Configurable__);
              const tmpResult11 = SameValue;
            }
            let tmp51 = prop;
            if ("[[Configurable]]" in __Configurable__) {
              tmp51 = __Configurable__;
            }
            let tmp52 = prop;
            if ("[[Enumerable]]" in __Configurable__) {
              tmp52 = __Configurable__;
            }
            const tmpResult13 = IsDataDescriptor;
            const tmpResult14 = SameValue;
            const tmpResult15 = FromPropertyDescriptor;
            const obj1 = { "[[Configurable]]": tmp51["[[Configurable]]"], "[[Enumerable]]": tmp52["[[Enumerable]]"], "[[Get]]": null, "[[Set]]": null };
            let tmp57 = prop;
            if ("[[Get]]" in __Configurable__) {
              tmp57 = __Configurable__;
            }
            obj1["[[Get]]"] = tmp57["[[Get]]"];
            if ("[[Set]]" in __Configurable__) {
              prop = __Configurable__;
            }
            prop = prop["[[Set]]"];
            obj1["[[Set]]"] = prop;
            tmpResult6Result = DefineOwnProperty(tmpResult13, tmpResult14, tmpResult15, arg0, arg1, obj1);
            const tmpResult12 = DefineOwnProperty;
          }
        } else {
          const tmp24 = new _mod1283("`current`, when present, must be a fully populated and valid Property Descriptor");
          throw tmp24;
        }
        tmpResult3 = _mod4922;
      }
    } else {
      const tmp15 = new _mod1283("Assertion failed: Desc must be a Property Descriptor");
      throw tmp15;
    }
  } else {
    const tmp10 = new _mod1283("Assertion failed: P must be a Property Key");
    throw tmp10;
  }
};