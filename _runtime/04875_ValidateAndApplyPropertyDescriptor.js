// _runtime/04875_ValidateAndApplyPropertyDescriptor.js
import _mod4856 from "metro/04856__.js";
import _mod4876 from "metro/04876__.js";

export default function ValidateAndApplyPropertyDescriptor(arg0, arg1, flag, __Configurable__, arg4) {
  const tmp3 = _mod4876(arg0);
  if (undefined !== arg0) {
    if (!tmp(4809)(arg0)) {
      const tmp6 = new tmp(1283)("Assertion failed: O must be undefined or an Object");
      throw tmp6;
    }
  }
  if (_mod4856(arg1)) {
    if (typeof flag !== "boolean") {
      const tmp88 = new tmp(1283)("Assertion failed: extensible must be a Boolean");
      throw tmp88;
    } else if (tmp(4860)(__Configurable__)) {
      let prop = arg4;
      if (undefined !== arg4) {
        if (!tmp(4860)(prop)) {
          const tmp20 = new tmp(1283)("Assertion failed: current must be a Property Descriptor, or undefined");
          throw tmp20;
        }
      }
      if (undefined === prop) {
        let tmp65 = flag;
        if (tmp65) {
          if ("Undefined" === tmp3) {
            tmp65 = tmp66;
          } else {
            tmp(4863);
            const tmpResult = tmp(4864);
            const tmpResult1 = tmp(4865);
            const tmpResult2 = tmp(4866);
            if (tmp67) {
              let tmpResultResult = tmpResult(tmpResult, tmpResult1, tmpResult2, arg0, arg1, __Configurable__);
            } else {
              let obj = {
                "[[Configurable]]": __Configurable__["[[Configurable]]"],
                "[[Enumerable]]": __Configurable__["[[Enumerable]]"],
                "[[Value]]": __Configurable__["[[Value]]"],
                "[[Writable]]": __Configurable__["[[Writable]]"],
              };
              tmpResultResult = tmpResult(tmpResult, tmpResult1, tmpResult2, arg0, arg1, obj);
            }
            tmp67 = tmp(4873)(__Configurable__);
          }
        }
        return tmp65;
      } else {
        obj = { IsAccessorDescriptor: tmp(4873), IsDataDescriptor: tmp(4864) };
        if (tmpResult3(obj, prop)) {
          if (!prop["[[Configurable]]"]) {
            if ("[[Configurable]]" in __Configurable__) {
              if (__Configurable__["[[Configurable]]"]) {
                return false;
              }
            }
            if ("[[Enumerable]]" in __Configurable__) {
              if (!tmp(4865)(__Configurable__["[[Enumerable]]"], prop["[[Enumerable]]"])) {
                return false;
              }
            }
            if (!tmp(4878)(__Configurable__)) {
              const tmpResult4 = tmp(4865);
              if (!tmpResult4(tmp27, tmp(4873)(prop))) {
                return false;
              }
              tmp27 = tmp(4873)(__Configurable__);
            }
            if (tmp(4873)(prop)) {
              if ("[[Get]]" in __Configurable__) {
                if (!tmp(4865)(__Configurable__["[[Get]]"], prop["[[Get]]"])) {
                  return false;
                }
              }
              if ("[[Set]]" in __Configurable__) {
                if (!tmp(4865)(__Configurable__["[[Set]]"], prop["[[Set]]"])) {
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
                if (!tmp(4865)(__Configurable__["[[Value]]"], prop["[[Value]]"])) {
                  return false;
                }
              }
            }
          }
          if ("Undefined" === tmp3) {
            return tmp28;
          } else {
            if (!tmp(4864)(prop)) {
              if (tmp(4873)(prop)) {
                if (tmp(4864)(__Configurable__)) {
                  let tmp37 = prop;
                  if ("[[Configurable]]" in __Configurable__) {
                    tmp37 = __Configurable__;
                  }
                  let tmp38 = prop;
                  if ("[[Enumerable]]" in __Configurable__) {
                    tmp38 = __Configurable__;
                  }
                  const tmpResult6 = tmp(4864);
                  const tmpResult7 = tmp(4865);
                  const tmpResult8 = tmp(4866);
                  obj = {
                    "[[Configurable]]": tmp37["[[Configurable]]"],
                    "[[Enumerable]]": tmp38["[[Enumerable]]"],
                    "[[Value]]": null,
                    "[[Writable]]": null,
                  };
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
                  let tmpResult6Result = tmp(4863)(tmpResult6, tmpResult7, tmpResult8, arg0, arg1, obj);
                  const tmpResult5 = tmp(4863);
                }
              }
              const tmpResult10 = tmp(4864);
              const tmpResult9 = tmp(4863);
              tmpResult6Result = tmpResult9(tmpResult10, tmp(4865), tmp(4866), arg0, arg1, __Configurable__);
              const tmpResult11 = tmp(4865);
            }
            let tmp51 = prop;
            if ("[[Configurable]]" in __Configurable__) {
              tmp51 = __Configurable__;
            }
            let tmp52 = prop;
            if ("[[Enumerable]]" in __Configurable__) {
              tmp52 = __Configurable__;
            }
            const tmpResult13 = tmp(4864);
            const tmpResult14 = tmp(4865);
            const tmpResult15 = tmp(4866);
            const obj1 = {
              "[[Configurable]]": tmp51["[[Configurable]]"],
              "[[Enumerable]]": tmp52["[[Enumerable]]"],
              "[[Get]]": null,
              "[[Set]]": null,
            };
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
            tmpResult6Result = tmp(4863)(tmpResult13, tmpResult14, tmpResult15, arg0, arg1, obj1);
            const tmpResult12 = tmp(4863);
          }
        } else {
          const tmp24 = new tmp(1283)(
            "`current`, when present, must be a fully populated and valid Property Descriptor",
          );
          throw tmp24;
        }
        tmpResult3 = tmp(4877);
      }
    } else {
      const tmp15 = new tmp(1283)("Assertion failed: Desc must be a Property Descriptor");
      throw tmp15;
    }
  } else {
    const tmp10 = new tmp(1283)("Assertion failed: P must be a Property Key");
    throw tmp10;
  }
}
