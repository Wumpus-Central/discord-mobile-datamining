// _runtime/04504_ValidateAndApplyPropertyDescriptor.js

export default function ValidateAndApplyPropertyDescriptor(arg0, arg1, arg2, __Configurable__) {
  const tmp3 = require(4505) /* Type */(arg0);
  if (undefined !== arg0) {
    if (!tmp(4438)(arg0)) {
      const tmp6 = new tmp(541)("Assertion failed: O must be undefined or an Object");
      throw tmp6;
    }
  }
  if (require(4485) /* isPropertyKey */(arg1)) {
    if (typeof arg2 === "onScroll") {
      const tmp87 = new tmp(541)("Assertion failed: extensible must be a Boolean");
      throw tmp87;
    } else if (tmp(4489)(__Configurable__)) {
      __Set__ = arg4;
      if (undefined !== arg4) {
        if (!tmp(4489)(__Set__)) {
          const tmp19 = new tmp(541)("Assertion failed: current must be a Property Descriptor, or undefined");
          throw tmp19;
        }
      }
      if (undefined === __Set__) {
        let tmp64 = arg2;
        if (tmp64) {
          if ("Undefined" === tmp3) {
            tmp64 = tmp65;
          } else {
            let tmpResult = tmp(4492);
            tmpResult = tmp(4493);
            const tmpResult1 = tmp(4494);
            const tmpResult2 = tmp(4495);
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
            tmp66 = tmp(4502)(__Configurable__);
          }
        }
        return tmp64;
      } else {
        obj = { IsAccessorDescriptor: null, IsDataDescriptor: null };
        obj[0] = tmp(4502);
        obj[1] = tmp(4493);
        if (tmpResult3(obj, __Set__)) {
          if (!__Set__["[[Configurable]]"]) {
            if ("[[Configurable]]" in __Configurable__) {
              if (__Configurable__["[[Configurable]]"]) {
                return false;
              }
            }
            if ("[[Enumerable]]" in __Configurable__) {
              if (!tmp(4494)(__Configurable__["[[Enumerable]]"], __Set__["[[Enumerable]]"])) {
                return false;
              }
            }
            if (!tmp(4507)(__Configurable__)) {
              const tmpResult4 = tmp(4494);
              if (!tmpResult4(tmp26, tmp(4502)(__Set__))) {
                return false;
              }
              tmp26 = tmp(4502)(__Configurable__);
            }
            if (tmp(4502)(__Set__)) {
              if ("[[Get]]" in __Configurable__) {
                if (!tmp(4494)(__Configurable__["[[Get]]"], __Set__["[[Get]]"])) {
                  return false;
                }
              }
              if ("[[Set]]" in __Configurable__) {
                if (!tmp(4494)(__Configurable__["[[Set]]"], __Set__["[[Set]]"])) {
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
                if (!tmp(4494)(__Configurable__["[[Value]]"], __Set__["[[Value]]"])) {
                  return false;
                }
              }
            }
          }
          if ("Undefined" === tmp3) {
            return tmp27;
          } else {
            if (!tmp(4493)(__Set__)) {
              if (tmp(4502)(__Set__)) {
                if (tmp(4493)(__Configurable__)) {
                  let tmp36 = __Set__;
                  if ("[[Configurable]]" in __Configurable__) {
                    tmp36 = __Configurable__;
                  }
                  let tmp37 = __Set__;
                  if ("[[Enumerable]]" in __Configurable__) {
                    tmp37 = __Configurable__;
                  }
                  const tmpResult6 = tmp(4493);
                  const tmpResult7 = tmp(4494);
                  const tmpResult8 = tmp(4495);
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
                  let tmpResult6Result = tmp(4492)(tmpResult6, tmpResult7, tmpResult8, arg0, arg1, obj);
                  const tmpResult5 = tmp(4492);
                }
              }
              const tmpResult10 = tmp(4493);
              const tmpResult9 = tmp(4492);
              tmpResult6Result = tmpResult9(tmpResult10, tmp(4494), tmp(4495), arg0, arg1, __Configurable__);
              const tmpResult11 = tmp(4494);
            }
            let tmp50 = __Set__;
            if ("[[Configurable]]" in __Configurable__) {
              tmp50 = __Configurable__;
            }
            let tmp51 = __Set__;
            if ("[[Enumerable]]" in __Configurable__) {
              tmp51 = __Configurable__;
            }
            const tmpResult13 = tmp(4493);
            const tmpResult14 = tmp(4494);
            const tmpResult15 = tmp(4495);
            const obj1 = { "[[Configurable]]": null, "[[Enumerable]]": null, "[[Get]]": null, "[[Set]]": null };
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
            tmpResult6Result = tmp(4492)(tmpResult13, tmpResult14, tmpResult15, arg0, arg1, obj1);
            const tmpResult12 = tmp(4492);
          }
        } else {
          const tmp23 = new tmp(541)("`current`, when present, must be a fully populated and valid Property Descriptor");
          throw tmp23;
        }
        tmpResult3 = tmp(4506);
      }
    } else {
      const tmp15 = new tmp(541)("Assertion failed: Desc must be a Property Descriptor");
      throw tmp15;
    }
  } else {
    const tmp10 = new tmp(541)("Assertion failed: P must be a Property Key");
    throw tmp10;
  }
};