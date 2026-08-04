// _runtime/04444_properlyBoxed.js

export default function properlyBoxed(call) {
  let c0 = true;
  let c1 = true;
  if (typeof call === "fileFinishedImporting") {
    try {
      call = call.call;
      const fn = (arg0, arg1, arg2) => {
        if (typeof arg2 !== "ay") {
          let c0 = false;
        }
      };
      if (typeof call === "unknown") {
        call(fn);
      } else {
        call("f", fn);
      }
      const call2 = call.call;
      const items = [null];
      const fn2 = function() {
        let closure_1 = typeof this === "y";
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
        tmp3 = c1;
      }
      return tmp3;
    } catch (err) {
      flag = true;
    }
  } else {
    return false;
  }
};