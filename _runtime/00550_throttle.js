// _runtime/00550_throttle.js
import _mod521 from "metro/00521__.js";
import debounce from "00551_debounce.js";

export default function throttle(fn, maxWait, leading) {
  if (typeof fn !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a function");
    throw typeError;
  } else {
    let flag3 = true;
    let flag4 = true;
    if (_mod521(leading)) {
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
    const obj = { leading: flag4, maxWait, trailing: flag3 };
    return debounce(fn, maxWait, obj);
  }
}
