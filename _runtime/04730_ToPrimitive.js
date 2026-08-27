// _runtime/04730_ToPrimitive.js
import apply from "01421_apply.js";
import isPrimitive from "04731_isPrimitive.js";

let tmp = typeof Symbol === "function";
if (typeof Symbol === "function") {
  let _Symbol = Symbol;
  tmp = typeof Symbol.iterator === "symbol";
}
let closure_2 = tmp;

export default function ToPrimitive(arg0) {
  let tmp22;
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
    if (!closure_2) {
      {
        let tmp16 = "default" === str2;
        if (tmp16) {
          tmp16 = tmp(4733)(arg0) || tmp(4732)(arg0);
          const tmp15 = tmp(4733)(arg0) || tmp(4732)(arg0);
        }
        let str8 = str2;
        if (tmp16) {
          str8 = "string";
        }
        let str10 = "number";
        if ("default" !== str8) {
          str10 = str8;
        }
        if (null == arg0) {
          const _TypeError4 = TypeError;
          const typeError = new TypeError("Cannot call method on " + arg0);
          throw typeError;
        } else {
          if (typeof str10 === "string") {
            const arr = "string" === str10 ? ["toString", "valueOf"] : ["valueOf", "toString"];
            let num2 = 0;
            if (0 < arr.length) {
              while (true) {
                let tmp18 = arg0[arr[num2]];
                let tmp19 = require;
                let tmp20 = dependencyMap;
                let tmp21 = num2;
                if (apply(tmp18)) {
                  let call = tmp18.call;
                  tmp22 = typeof call === "unknown" ? tmp18() : call(arg0);
                  if (tmp19(4731)(tmp22)) {
                    break;
                  }
                }
                num2 = num2 + 1;
              }
              return tmp22;
            }
            const _TypeError2 = TypeError;
            const typeError1 = new TypeError("No default value");
            throw typeError1;
          }
          const _TypeError3 = TypeError;
          const typeError2 = new TypeError("hint must be \"string\" or \"number\"");
          throw typeError2;
        }
      }
    } else {
      const _Symbol = Symbol;
      if (Symbol.toPrimitive) {
        const _Symbol3 = Symbol;
        let tmp8;
        if (null != arg0[toPrimitive]) {
          tmp8 = tmp6;
          if (!tmp(1421)(tmp6)) {
            const _TypeError = TypeError;
            const _String2 = String;
            const text = `${tmp6} returned for property `;
            const typeError3 = new TypeError(`${tmp6} returned for property ` + String(toPrimitive) + " of object " + arg0 + " is not a function");
            throw typeError3;
          }
        }
        let valueOf = tmp8;
      } else if (tmp(4732)(arg0)) {
        const _Symbol2 = Symbol;
        valueOf = Symbol.prototype.valueOf;
      }
    }
  }
};