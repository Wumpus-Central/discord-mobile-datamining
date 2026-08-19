// === Module 4415: defineProperty ===

// Module 4415 (defineProperty)
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1424 */;
import defineDataProperty from "defineDataProperty" /* 1425 */;
import keys from "keys" /* 4416 */;

let tmp = typeof Symbol === "function";
if (typeof Symbol === "function") {
  const _Symbol = Symbol;
  tmp = typeof Symbol("foo") === "symbol";
}
let closure_2 = tmp;
const tmp2 = hasPropertyDescriptors();
let closure_5 = tmp2;
function defineProperty(arg0, arg1, arg2, arg3) {

}
function defineProperties(prototype, ownPropertyDescriptors) {
  const arr = keys(ownPropertyDescriptors);
  if (!closure_2) {
    for (let num = 0; num < arr.length; num = num + 1) {
      let tmp7 = arr[num];
      let tmp8 = ownPropertyDescriptors[arr[num]];
      let tmp9 = tmp[arr[num]];
      if (typeof defineProperty !== "function") {
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
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
    }
  } else {
    const call = concat.call;
    const _Object = Object;
    const ownPropertySymbols = Object.getOwnPropertySymbols(ownPropertyDescriptors);
    typeof call === "unknown" ? concat(ownPropertySymbols) : call(arr, ownPropertySymbols);
  }
  tmp = arguments.length > 2 ? arguments[2] : {};
}
defineProperties.supportsDescriptors = tmp2;

export default defineProperties;