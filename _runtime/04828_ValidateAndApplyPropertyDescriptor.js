// === Module 4828: ValidateAndApplyPropertyDescriptor ===

// Module 4828 (ValidateAndApplyPropertyDescriptor)
import isPropertyKey from "isPropertyKey" /* 4809 */;
import Type from "Type" /* 4829 */;


export default function ValidateAndApplyPropertyDescriptor(arg0, arg1, flag, __Configurable__) {
  const tmp3 = Type(arg0);
  if (undefined !== arg0) {
    if (!tmp(4762)(arg0)) {
      const tmp6 = new tmp(538)("Assertion failed: O must be undefined or an Object");
      throw tmp6;
    }
  }
  if (isPropertyKey(arg1)) {
    if (typeof flag !== "boolean") {
      const tmp87 = new tmp(538)("Assertion failed: extensible must be a Boolean");
      throw tmp87;
    } else if (tmp(4813)(__Configurable__)) {
      __Set__ = arg4;
      if (undefined !== arg4) {
        if (!tmp(4813)(__Set__)) {
          const tmp19 = new tmp(538)("Assertion failed: current must be a Property Descriptor, or undefined");
          throw tmp19;
        }
      }
      if (undefined === __Set__) {
        let tmp64 = flag;
        if (tmp64) {
          if ("Undefined" === tmp3) {
            tmp64 = tmp65;
          } else {
            let tmpResult = tmp(4816);
            tmpResult = tmp(4817);
            const tmpResult1 = tmp(4818);
            const tmpResult2 = tmp(4819);
            if (tmp66) {
              let tmpResultResult = tmpResult(tmpResult, tmpResult1, tmpResult2, arg0, arg1, __Configurable__);
            } else {
              let obj = { "[[Configurable]]": null, "[[Enumerable]]": null, "[[Value]]": null, "[[Writable]]": null };
              obj[0] = __Configurable__["[[Configurable]]"];
              obj[1] = __Configurable__["[[Enumerable]]"];
              obj[2] = __Configurable__["[[Value]]"];
              obj[3] = __Configurable__["[[Writable]]"];
              tmpResultResult = tmpResult(tmpResult, tmpResult1, tmpResult2, arg0, arg1, obj);
            }
            tmp66 = tmp(4826)(__Configurable__);
          }
        }
        return tmp64;
      } else {
        obj = { IsAccessorDescriptor: null, IsDataDescriptor: null };
        obj[0] = tmp(4826);
        obj[1] = tmp(4817);
        if (tmpResult3(obj, __Set__)) {
          if (!__Set__["[[Configurable]]"]) {
            if ("[[Configurable]]" in __Configurable__) {
              if (__Configurable__["[[Configurable]]"]) {
                return false;
              }
            }
            if ("[[Enumerable]]" in __Configurable__) {
              if (!tmp(4818)(__Configurable__["[[Enumerable]]"], __Set__["[[Enumerable]]"])) {
                return false;
              }
            }
            if (!tmp(4831)(__Configurable__)) {
              const tmpResult4 = tmp(4818);
              if (!tmpResult4(tmp26, tmp(4826)(__Set__))) {
                return false;
              }
              tmp26 = tmp(4826)(__Configurable__);
            }
            if (tmp(4826)(__Set__)) {
              if ("[[Get]]" in __Configurable__) {
                if (!tmp(4818)(__Configurable__["[[Get]]"], __Set__["[[Get]]"])) {
                  return false;
                }
              }
              if ("[[Set]]" in __Configurable__) {
                if (!tmp(4818)(__Configurable__["[[Set]]"], __Set__["[[Set]]"])) {
                  return false;
                }
              }
            } else if (!__Set__["[[Writable]]"]) {
              if ("[[Writable]]" in __Configurable__) {
                if (__Configurable__["[[Writable]]"]) {
                  return false;
                }
              }
              if ("[[Value]]" in __Configurable__) {
                if (!tmp(4818)(__Configurable__["[[Value]]"], __Set__["[[Value]]"])) {
                  return false;
                }
              }
            }
          }
          if ("Undefined" === tmp3) {
            return tmp27;
          } else {
            if (!tmp(4817)(__Set__)) {
              if (tmp(4826)(__Set__)) {
                if (tmp(4817)(__Configurable__)) {
                  let tmp36 = __Set__;
                  if ("[[Configurable]]" in __Configurable__) {
                    tmp36 = __Configurable__;
                  }
                  let tmp37 = __Set__;
                  if ("[[Enumerable]]" in __Configurable__) {
                    tmp37 = __Configurable__;
                  }
                  const tmpResult6 = tmp(4817);
                  const tmpResult7 = tmp(4818);
                  const tmpResult8 = tmp(4819);
                  obj = { "[[Configurable]]": null, "[[Enumerable]]": null, "[[Value]]": null, "[[Writable]]": null };
                  obj[0] = tmp36["[[Configurable]]"];
                  obj[1] = tmp37["[[Enumerable]]"];
                  let tmp42 = __Set__;
                  if ("[[Value]]" in __Configurable__) {
                    tmp42 = __Configurable__;
                  }
                  obj[2] = tmp42["[[Value]]"];
                  let tmp43 = __Set__;
                  if ("[[Writable]]" in __Configurable__) {
                    tmp43 = __Configurable__;
                  }
                  obj[3] = tmp43["[[Writable]]"];
                  let tmpResult6Result = tmp(4816)(tmpResult6, tmpResult7, tmpResult8, arg0, arg1, obj);
                  const tmpResult5 = tmp(4816);
                }
              }
              const tmpResult10 = tmp(4817);
              const tmpResult9 = tmp(4816);
              tmpResult6Result = tmpResult9(tmpResult10, tmp(4818), tmp(4819), arg0, arg1, __Configurable__);
              const tmpResult11 = tmp(4818);
            }
            let tmp50 = __Set__;
            if ("[[Configurable]]" in __Configurable__) {
              tmp50 = __Configurable__;
            }
            let tmp51 = __Set__;
            if ("[[Enumerable]]" in __Configurable__) {
              tmp51 = __Configurable__;
            }
            const tmpResult13 = tmp(4817);
            const tmpResult14 = tmp(4818);
            const tmpResult15 = tmp(4819);
            obj1 = { "[[Configurable]]": null, "[[Enumerable]]": null, "[[Get]]": null, "[[Set]]": null };
            obj1[0] = tmp50["[[Configurable]]"];
            obj1[1] = tmp51["[[Enumerable]]"];
            let tmp56 = __Set__;
            if ("[[Get]]" in __Configurable__) {
              tmp56 = __Configurable__;
            }
            obj1[2] = tmp56["[[Get]]"];
            if ("[[Set]]" in __Configurable__) {
              __Set__ = __Configurable__;
            }
            __Set__ = __Set__["[[Set]]"];
            obj1[3] = __Set__;
            tmpResult6Result = tmp(4816)(tmpResult13, tmpResult14, tmpResult15, arg0, arg1, obj1);
            const tmpResult12 = tmp(4816);
          }
        } else {
          const tmp23 = new tmp(538)("`current`, when present, must be a fully populated and valid Property Descriptor");
          throw tmp23;
        }
        tmpResult3 = tmp(4830);
      }
    } else {
      const tmp15 = new tmp(538)("Assertion failed: Desc must be a Property Descriptor");
      throw tmp15;
    }
  } else {
    const tmp10 = new tmp(538)("Assertion failed: P must be a Property Key");
    throw tmp10;
  }
};