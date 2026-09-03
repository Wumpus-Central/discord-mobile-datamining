// _runtime/04769_properlyBoxed.js

export default function properlyBoxed(fn) {
  c0 = true;
  c1 = true;
  if (typeof fn === "function") {
    try {
      const call = fn.call;
      fn = (arg0, arg1, obj) => {
        if (typeof obj !== "object") {
          c0 = false;
        }
      };
      if (typeof call === "unknown") {
        fn(fn);
      } else {
        call("f", fn);
      }
      const call2 = fn.call;
      const items = [null];
      const fn2 = function () {
        closure_1 = typeof this === "string";
      };
      if (typeof call2 === "unknown") {
        fn(fn2, "x");
      } else {
        call2(items, fn2, "x");
      }
      let flag = false;
      let tmp3 = !flag;
      if (!flag) {
        tmp3 = c0;
      }
      if (tmp3) {
        tmp3 = c1;
      }
      return tmp3;
    } catch (err) {
      flag = true;
    }
  } else {
    return false;
  }
}
