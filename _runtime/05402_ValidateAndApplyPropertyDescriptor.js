// _runtime/05402_ValidateAndApplyPropertyDescriptor.js
import _mod1293 from "metro/01293__.js";
import isObject from "05336_isObject.js";
import isPropertyKey from "05383_isPropertyKey.js";
import isPropertyDescriptor from "05387_isPropertyDescriptor.js";
import DefineOwnProperty from "05390_DefineOwnProperty.js";
import IsDataDescriptor from "05391_IsDataDescriptor.js";
import SameValue from "05392_SameValue.js";
import FromPropertyDescriptor from "05393_FromPropertyDescriptor.js";
import IsAccessorDescriptor from "05400_IsAccessorDescriptor.js";
import Type from "05403_Type.js";
import isFullyPopulatedPropertyDescriptor from "05404_isFullyPopulatedPropertyDescriptor.js";
import IsGenericDescriptor from "05405_IsGenericDescriptor.js";

export default function ValidateAndApplyPropertyDescriptor(arg0, arg1, flag, __Configurable__, arg4) {
  let tmp35;
  let tmp36;
  let tmp51;
  const tmp3 = Type(arg0);
  if (undefined !== arg0) {
    if (!isObject(arg0)) {
      const self = this;
      const self2 = this;
      const tmp4 = new _mod1293("Assertion failed: O must be undefined or an Object");
      throw tmp4;
    }
  }
  if (isPropertyKey(arg1)) {
    if (typeof flag !== "boolean") {
      const self11 = this;
      const self12 = this;
      const tmp78 = new _mod1293("Assertion failed: extensible must be a Boolean");
      throw tmp78;
    } else if (isPropertyDescriptor(__Configurable__)) {
      let tmp11 = arg4;
      if (undefined !== arg4) {
        if (!isPropertyDescriptor(tmp11)) {
          const self7 = this;
          const self8 = this;
          const tmp12 = new _mod1293("Assertion failed: current must be a Property Descriptor, or undefined");
          throw tmp12;
        }
      }
      if (undefined === tmp11) {
        let tmp58 = flag;
        if (tmp58) {
          let tmp59 = "Undefined" === tmp3;
          if (!tmp59) {
            let tmpResultResult;
            const tmp60 = IsAccessorDescriptor(__Configurable__);
            const tmpResult = DefineOwnProperty;
            const tmpResult17 = IsDataDescriptor;
            const tmpResult18 = SameValue;
            const tmpResult19 = FromPropertyDescriptor;
            if (tmp60) {
              tmpResultResult = tmpResult(tmpResult17, tmpResult18, tmpResult19, arg0, arg1, __Configurable__);
            } else {
              const obj2 = {
                "[[Configurable]]": __Configurable__["[[Configurable]]"],
                "[[Enumerable]]": __Configurable__["[[Enumerable]]"],
                "[[Value]]": __Configurable__["[[Value]]"],
                "[[Writable]]": __Configurable__["[[Writable]]"],
              };
              tmpResultResult = tmpResult(tmpResult17, tmpResult18, tmpResult19, arg0, arg1, obj2);
            }
            tmp59 = tmpResultResult;
          }
          tmp58 = tmp59;
        }
        return tmp58;
      } else {
        const obj3 = { IsAccessorDescriptor, IsDataDescriptor };
        const tmpResult20 = isFullyPopulatedPropertyDescriptor;
        if (tmpResult20(obj3, tmp11)) {
          if (!tmp11["[[Configurable]]"]) {
            if ("[[Configurable]]" in __Configurable__) {
              if (__Configurable__["[[Configurable]]"]) {
                return false;
              }
            }
            if ("[[Enumerable]]" in __Configurable__) {
              if (!SameValue(__Configurable__["[[Enumerable]]"], tmp11["[[Enumerable]]"])) {
                return false;
              }
            }
            if (!IsGenericDescriptor(__Configurable__)) {
              const tmpResult21 = SameValue;
              const tmp17 = IsAccessorDescriptor(__Configurable__);
              if (!tmpResult21(tmp17, IsAccessorDescriptor(tmp11))) {
                return false;
              }
            }
            if (IsAccessorDescriptor(tmp11)) {
              if ("[[Get]]" in __Configurable__) {
                if (!SameValue(__Configurable__["[[Get]]"], tmp11["[[Get]]"])) {
                  return false;
                }
              }
              if ("[[Set]]" in __Configurable__) {
                if (!SameValue(__Configurable__["[[Set]]"], tmp11["[[Set]]"])) {
                  return false;
                }
              }
            } else if (!tmp11["[[Writable]]"]) {
              if ("[[Writable]]" in __Configurable__) {
                if (__Configurable__["[[Writable]]"]) {
                  return false;
                }
              }
              if ("[[Value]]" in __Configurable__) {
                if (!SameValue(__Configurable__["[[Value]]"], tmp11["[[Value]]"])) {
                  return false;
                }
              }
            }
          }
          let tmp18 = "Undefined" === tmp3;
          if (!tmp18) {
            let tmpResult6Result;
            if (IsDataDescriptor(tmp11)) {
              if (IsAccessorDescriptor(__Configurable__)) {
                let tmp43 = tmp11;
                if ("[[Configurable]]" in __Configurable__) {
                  tmp43 = __Configurable__;
                }
                let tmp45 = tmp11;
                const prop = tmp43["[[Configurable]]"];
                if ("[[Enumerable]]" in __Configurable__) {
                  tmp45 = __Configurable__;
                }
                const prop1 = tmp45["[[Enumerable]]"];
                const tmpResult22 = DefineOwnProperty;
                const tmpResult23 = IsDataDescriptor;
                const tmpResult24 = SameValue;
                const obj4 = {
                  "[[Configurable]]": prop,
                  "[[Enumerable]]": prop1,
                  "[[Get]]": tmp51["[[Get]]"],
                  "[[Set]]": tmp11["[[Set]]"],
                };
                tmp51 = tmp11;
                const tmpResult25 = FromPropertyDescriptor;
                if ("[[Get]]" in __Configurable__) {
                  tmp51 = __Configurable__;
                }
                if ("[[Set]]" in __Configurable__) {
                  tmp11 = __Configurable__;
                }
                tmpResult6Result = tmpResult22(tmpResult23, tmpResult24, tmpResult25, arg0, arg1, obj4);
              }
              tmp18 = tmpResult6Result;
            }
            if (IsAccessorDescriptor(tmp11)) {
              if (IsDataDescriptor(__Configurable__)) {
                let tmp27 = tmp11;
                if ("[[Configurable]]" in __Configurable__) {
                  tmp27 = __Configurable__;
                }
                let tmp29 = tmp11;
                const prop2 = tmp27["[[Configurable]]"];
                if ("[[Enumerable]]" in __Configurable__) {
                  tmp29 = __Configurable__;
                }
                const prop3 = tmp29["[[Enumerable]]"];
                const tmpResult26 = DefineOwnProperty;
                const tmpResult27 = IsDataDescriptor;
                const tmpResult28 = SameValue;
                const obj = {
                  "[[Configurable]]": prop2,
                  "[[Enumerable]]": prop3,
                  "[[Value]]": tmp35["[[Value]]"],
                  "[[Writable]]": tmp36["[[Writable]]"],
                };
                tmp35 = tmp11;
                const tmpResult29 = FromPropertyDescriptor;
                if ("[[Value]]" in __Configurable__) {
                  tmp35 = __Configurable__;
                }
                tmp36 = tmp11;
                if ("[[Writable]]" in __Configurable__) {
                  tmp36 = __Configurable__;
                }
                tmpResult6Result = tmpResult26(tmpResult27, tmpResult28, tmpResult29, arg0, arg1, obj);
              }
            }
            const tmpResult30 = DefineOwnProperty;
            const tmpResult31 = IsDataDescriptor;
            const tmpResult32 = SameValue;
            tmpResult6Result = tmpResult30(
              tmpResult31,
              tmpResult32,
              FromPropertyDescriptor,
              arg0,
              arg1,
              __Configurable__,
            );
          }
          return tmp18;
        } else {
          const self9 = this;
          const self10 = this;
          const tmp14 = new _mod1293(
            "`current`, when present, must be a fully populated and valid Property Descriptor",
          );
          throw tmp14;
        }
      }
    } else {
      const self5 = this;
      const self6 = this;
      const tmp9 = new _mod1293("Assertion failed: Desc must be a Property Descriptor");
      throw tmp9;
    }
  } else {
    const self3 = this;
    const self4 = this;
    const tmp6 = new _mod1293("Assertion failed: P must be a Property Key");
    throw tmp6;
  }
}
