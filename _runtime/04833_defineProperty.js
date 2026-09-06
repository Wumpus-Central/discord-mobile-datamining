// _runtime/04833_defineProperty.js
import _mod1456 from "metro/01456__.js";
import defineDataProperty from "01457_defineDataProperty.js";
import keys2 from "04834_keys2.js";

let tmp = typeof Symbol === "function";
if (typeof Symbol === "function") {
  const _Symbol = Symbol;
  tmp = typeof Symbol("foo") === "symbol";
}
let closure_2 = tmp;
const tmp2 = _mod1456();
let closure_5 = tmp2;
function defineProperty(arg0, arg1, arg2, arg3) {}
function defineProperties(prototype, ownPropertyDescriptors) {
  const arr = keys2(ownPropertyDescriptors);
  if (!closure_2) {
    let num = 0;
    if (0 < arr.length) {
      while (typeof defineProperty === "function") {
        if (!(tmp7 in prototype)) {
          let tmp14 = defineDataProperty;
          if (closure_5) {
            let flag2 = true;
            let tmp14Result = tmp14(prototype, tmp7, tmp8, true);
          } else {
            tmp14Result = tmp14(prototype, tmp7, tmp8);
          }
        } else if (true !== tmp9) {
          if (typeof tmp9 === "function") {
            let call2 = toString.call;
          }
        }
        num = num + 1;
      }
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    const call = concat.call;
    const _Object = Object;
    const ownPropertySymbols = Object.getOwnPropertySymbols(ownPropertyDescriptors);
    typeof call === "unknown" ? concat(ownPropertySymbols) : call(arr, ownPropertySymbols);
  }
  const tmp = arguments.length > 2 ? arguments[2] : {};
}
defineProperties.supportsDescriptors = tmp2;

export default defineProperties;
