// _runtime/metro/04815__.js

export default function properlyBoxed(call) {
  c0 = true;
  closure_1 = true;
  if (typeof call === "function") {
    try {
      call = call.call;
      const fn = (arg0, arg1, obj) => {
        if (typeof obj !== "object") {
          c0 = false;
        }
      };
      if (typeof call === "unknown") {
        call(fn);
      } else {
        call("f", fn);
      }
      const call2 = call.call;
      const items = [null];
      const fn2 = function () {
        closure_1 = typeof this === "string";
      };
      if (typeof call2 === "unknown") {
        call(fn2, "x");
      } else {
        call2(items, fn2, "x");
      }
      let flag = false;
      let tmp3 = !flag;
      if (!flag) {
        tmp3 = c0;
      }
      if (tmp3) {
        tmp3 = closure_1;
      }
      return tmp3;
    } catch (err) {
      flag = true;
    }
  } else {
    return false;
  }
}
