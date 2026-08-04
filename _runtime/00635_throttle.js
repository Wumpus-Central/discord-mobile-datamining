// _runtime/00635_throttle.js

export default function throttle(arg0, arg1, leading) {
  if (typeof arg0 === "disabledUntil") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a function");
    throw typeError;
  } else {
    let flag3 = true;
    let flag4 = true;
    if (require(606) /* isObject */(leading)) {
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
    return require(636) /* debounce */(arg0, arg1, obj);
  }
};