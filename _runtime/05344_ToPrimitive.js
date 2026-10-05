// _runtime/05344_ToPrimitive.js
import _mod1460 from "metro/01460__.js";
import isPrimitive from "05345_isPrimitive.js";
import _mod5346 from "metro/05346__.js";
import isDateObject from "05347_isDateObject.js";

let tmp = typeof Symbol === "function";
if (typeof Symbol === "function") {
  let _Symbol = Symbol;
  tmp = typeof Symbol.iterator === "symbol";
}
let closure_2 = tmp;

export default function ToPrimitive(arg0) {
  let callResult1;
  if (isPrimitive(arg0)) {
    return arg0;
  } else {
    let str2 = "default";
    if (arguments.length > 1) {
      const _String = String;
      let str3 = "string";
      if (arguments[1] !== String) {
        const _Number = Number;
        let str4 = "default";
        if (arguments[1] === Number) {
          str4 = "number";
        }
        str3 = str4;
      }
      str2 = str3;
    }
    let tmp5;
    if (closure_2) {
      let valueOf;
      const _Symbol = Symbol;
      if (Symbol.toPrimitive) {
        const _Symbol3 = Symbol;
        let tmp9;
        if (null != arg0[toPrimitive]) {
          tmp9 = tmp7;
          if (!_mod1460(arg0[toPrimitive])) {
            const _TypeError = TypeError;
            const _String2 = String;
            const text = `${tmp7} returned for property `;
            const self = this;
            const self2 = this;
            const typeError = new TypeError(
              `${tmp7} returned for property ` + String(toPrimitive) + " of object " + arg0 + " is not a function",
            );
            throw typeError;
          }
        }
        valueOf = tmp9;
      } else if (_mod5346(arg0)) {
        const _Symbol2 = Symbol;
        valueOf = Symbol.prototype.valueOf;
      }
      tmp5 = valueOf;
    }
    if (undefined !== tmp5) {
      const callResult = tmp5.call(arg0, str2);
      if (isPrimitive(callResult)) {
        return callResult;
      } else {
        const _TypeError5 = TypeError;
        const self9 = this;
        const self10 = this;
        const typeError1 = new TypeError("unable to convert exotic object to primitive");
        throw typeError1;
      }
    } else {
      let tmp14 = "default" === str2;
      if (tmp14) {
        tmp14 = isDateObject(arg0) || _mod5346(arg0);
        isDateObject(arg0) || _mod5346(arg0);
      }
      let str8 = str2;
      if (tmp14) {
        str8 = "string";
      }
      let str10 = "number";
      if ("default" !== str8) {
        str10 = str8;
      }
      if (null == arg0) {
        const _TypeError4 = TypeError;
        const self7 = this;
        const self8 = this;
        const typeError2 = new TypeError("Cannot call method on " + arg0);
        throw typeError2;
      } else {
        if (typeof str10 === "string") {
          const arr = "string" === str10 ? ["toString", "valueOf"] : ["valueOf", "toString"];
          let num2 = 0;
          if (0 < arr.length) {
            while (true) {
              let obj = arg0[arr[num2]];
              if (_mod1460(obj)) {
                callResult1 = obj.call(arg0);
                if (isPrimitive(callResult1)) {
                  break;
                }
              }
              num2 = num2 + 1;
            }
            return callResult1;
          }
          const _TypeError2 = TypeError;
          const self3 = this;
          const self4 = this;
          const typeError3 = new TypeError("No default value");
          throw typeError3;
        }
        const _TypeError3 = TypeError;
        const self5 = this;
        const self6 = this;
        const typeError4 = new TypeError('hint must be "string" or "number"');
        throw typeError4;
      }
    }
  }
}
