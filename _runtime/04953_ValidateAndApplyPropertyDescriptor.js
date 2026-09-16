// === Module 4953: ValidateAndApplyPropertyDescriptor ===

// Module 4953 (ValidateAndApplyPropertyDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4887 from "module_4887" /* 4887 */;
import _mod4934 from "module_4934" /* 4934 */;
import _mod4938 from "module_4938" /* 4938 */;
import DefineOwnProperty from "DefineOwnProperty" /* 4941 */;
import IsDataDescriptor from "IsDataDescriptor" /* 4942 */;
import SameValue from "SameValue" /* 4943 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 4944 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 4951 */;
import _mod4954 from "module_4954" /* 4954 */;
import _mod4955 from "module_4955" /* 4955 */;
import IsGenericDescriptor from "IsGenericDescriptor" /* 4956 */;


export default function ValidateAndApplyPropertyDescriptor(arg0, arg1, flag, __Configurable__, arg4) {
  const tmp3 = _mod4954(arg0);
  if (undefined !== arg0) {
    if (!_mod4887(arg0)) {
      const tmp6 = new _mod1282("Assertion failed: O must be undefined or an Object");
      throw tmp6;
    }
  }
  if (_mod4934(arg1)) {
    if (typeof flag !== "boolean") {
      const tmp88 = new _mod1282("Assertion failed: extensible must be a Boolean");
      throw tmp88;
    } else if (_mod4938(__Configurable__)) {
      let prop = arg4;
      if (undefined !== arg4) {
        if (!_mod4938(prop)) {
          const tmp20 = new _mod1282("Assertion failed: current must be a Property Descriptor, or undefined");
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
          const tmp24 = new _mod1282("`current`, when present, must be a fully populated and valid Property Descriptor");
          throw tmp24;
        }
        tmpResult20 = _mod4955;
      }
    } else {
      const tmp15 = new _mod1282("Assertion failed: Desc must be a Property Descriptor");
      throw tmp15;
    }
  } else {
    const tmp10 = new _mod1282("Assertion failed: P must be a Property Key");
    throw tmp10;
  }
};