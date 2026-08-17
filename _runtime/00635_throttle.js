// _runtime/00635_throttle.js
import isObject from "isObject" /* 606 */;
import debounce from "debounce" /* 636 */;


export default function throttle(fn, arg1, leading) {
  if (typeof fn !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a function");
    throw typeError;
  } else {
    let flag3 = true;
    let flag4 = true;
    if (isObject(leading)) {
      let flag = true;
      if ("leading" in leading) {
        flag = leading.leading;
      }
      let flag2 = true;
      if ("trailing" in leading) {
        flag2 = leading.trailing;
      }
      flag3 = flag2;
      flag4 = flag;
    }
    const obj = { leading: null, maxWait: null, trailing: null };
    obj[0] = flag4;
    obj[1] = arg1;
    obj[2] = flag3;
    return debounce(fn, arg1, obj);
  }
};