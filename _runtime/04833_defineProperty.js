// === Module 4833: defineProperty ===

// Module 4833 (defineProperty)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1456 */;
import defineDataProperty from "defineDataProperty" /* 1457 */;
import keys from "keys" /* 4834 */;

let tmp = typeof Symbol === "function";
if (typeof Symbol === "function") {
  const _Symbol = Symbol;
  tmp = typeof Symbol("foo") === "symbol";
}
let closure_2 = tmp;
let tmp2 = hasPropertyDescriptors();
let closure_5 = tmp2;
function defineProperty(arg0, arg1, arg2, arg3) {

}
function defineProperties(prototype, ownPropertyDescriptors) {
  const arr = keys(ownPropertyDescriptors);
  if (!closure_2) {
    for (let num = 0; num < arr.length; num = num + 1) {
      let tmp6 = defineProperty;
      let tmp7 = arr[num];
      let tmp8 = ownPropertyDescriptors[arr[num]];
      let tmp9 = tmp[arr[num]];
      let tmp10 = num;
      if (typeof defineProperty !== "function") {
        let str2 = "Trying to call a non-function";
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      if (!(tmp7 in prototype)) {
        let tmp11 = closure_5;
        let tmp12 = require;
        let tmp13 = dependencyMap;
        let tmp14 = defineDataProperty;
        if (closure_5) {
          let tmp16 = prototype;
          let tmp17 = tmp7;
          let tmp18 = tmp8;
          let flag2 = true;
          let tmp14Result = tmp14(prototype, tmp7, tmp8, true);
        } else {
          tmp14Result = tmp14(prototype, tmp7, tmp8);
        }
      } else if (true !== tmp9) {
        if (typeof tmp9 === "function") {
          let tmp21 = toString;
          let call2 = toString.call;
        }
      }
    }
  } else {
    const call = concat.call;
    const _Object = Object;
    const ownPropertySymbols = Object.getOwnPropertySymbols(ownPropertyDescriptors);
    typeof call === "unknown" ? concat(ownPropertySymbols) : call(arr, ownPropertySymbols);
    const tmp2 = concat;
  }
}
defineProperties.supportsDescriptors = tmp2;

export default defineProperties;