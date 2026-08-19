// _runtime/04457_ValidateAndApplyPropertyDescriptor.js
import _mod541 from "metro/00541__.js";
import isObject from "04391_isObject.js";
import isPropertyKey from "04438_isPropertyKey.js";
import isPropertyDescriptor from "04442_isPropertyDescriptor.js";
import result from "04445_result.js";
import IsDataDescriptor from "04446_IsDataDescriptor.js";
import SameValue from "04447_SameValue.js";
import FromPropertyDescriptor from "04448_FromPropertyDescriptor.js";
import IsAccessorDescriptor from "04455_IsAccessorDescriptor.js";
import Type from "04458_Type.js";
import isFullyPopulatedPropertyDescriptor from "04459_isFullyPopulatedPropertyDescriptor.js";
import IsGenericDescriptor from "04460_IsGenericDescriptor.js";


export default function ValidateAndApplyPropertyDescriptor(arg0, arg1, flag, __Configurable__) {
  const tmp3 = Type(arg0);
  if (undefined !== arg0) {
    if (!isObject(arg0)) {
      const tmp6 = new _mod541("Assertion failed: O must be undefined or an Object");
      throw tmp6;
    }
  }
  if (isPropertyKey(arg1)) {
    if (typeof flag !== "boolean") {
      const tmp88 = new _mod541("Assertion failed: extensible must be a Boolean");
      throw tmp88;
    } else if (isPropertyDescriptor(__Configurable__)) {
      let prop = arg4;
      if (undefined !== arg4) {
        if (!isPropertyDescriptor(prop)) {
          const tmp20 = new _mod541("Assertion failed: current must be a Property Descriptor, or undefined");
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
              let obj = { "[[Configurable]]": null, "[[Enumerable]]": null, "[[Value]]": null, "[[Writable]]": null };
              obj[0] = __Configurable__["[[Configurable]]"];
              obj[1] = __Configurable__["[[Enumerable]]"];
              obj[2] = __Configurable__["[[Value]]"];
              obj[3] = __Configurable__["[[Writable]]"];
              tmpResultResult = tmpResult(tmpResult, tmpResult1, tmpResult2, arg0, arg1, obj);
            }
            tmp67 = IsAccessorDescriptor(__Configurable__);
          }
        }
        return tmp65;
      } else {
        obj = { IsAccessorDescriptor: null, IsDataDescriptor: null };
        obj[0] = IsAccessorDescriptor;
        obj[1] = IsDataDescriptor;
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
                  obj = { "[[Configurable]]": null, "[[Enumerable]]": null, "[[Value]]": null, "[[Writable]]": null };
                  obj[0] = tmp37["[[Configurable]]"];
                  obj[1] = tmp38["[[Enumerable]]"];
                  let tmp43 = prop;
                  if ("[[Value]]" in __Configurable__) {
                    tmp43 = __Configurable__;
                  }
                  obj[2] = tmp43["[[Value]]"];
                  let tmp44 = prop;
                  if ("[[Writable]]" in __Configurable__) {
                    tmp44 = __Configurable__;
                  }
                  obj[3] = tmp44["[[Writable]]"];
                  let tmpResult6Result = result(tmpResult6, tmpResult7, tmpResult8, arg0, arg1, obj);
                  const tmpResult5 = result;
                }
              }
              const tmpResult10 = IsDataDescriptor;
              const tmpResult9 = result;
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
            obj1 = { "[[Configurable]]": null, "[[Enumerable]]": null, "[[Get]]": null, "[[Set]]": null };
            obj1[0] = tmp51["[[Configurable]]"];
            obj1[1] = tmp52["[[Enumerable]]"];
            let tmp57 = prop;
            if ("[[Get]]" in __Configurable__) {
              tmp57 = __Configurable__;
            }
            obj1[2] = tmp57["[[Get]]"];
            if ("[[Set]]" in __Configurable__) {
              prop = __Configurable__;
            }
            prop = prop["[[Set]]"];
            obj1[3] = prop;
            tmpResult6Result = result(tmpResult13, tmpResult14, tmpResult15, arg0, arg1, obj1);
            const tmpResult12 = result;
          }
        } else {
          const tmp24 = new _mod541("`current`, when present, must be a fully populated and valid Property Descriptor");
          throw tmp24;
        }
        tmpResult3 = isFullyPopulatedPropertyDescriptor;
      }
    } else {
      const tmp15 = new _mod541("Assertion failed: Desc must be a Property Descriptor");
      throw tmp15;
    }
  } else {
    const tmp10 = new _mod541("Assertion failed: P must be a Property Key");
    throw tmp10;
  }
};