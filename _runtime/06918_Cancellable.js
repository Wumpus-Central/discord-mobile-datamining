// _runtime/06918_Cancellable.js
import _modDef6867 from "metro/06867__.js";
import _classCallCheck from "metro/06866__.js";

class Cancellable {
  constructor() {
    tmp = closure_0(this, Cancellable);
    this._isCancelled = false;
    return;
  }
}
_classCallCheck = Cancellable;
const entry = {
  key: "cancel",
  value: function cancel() {
    this._isCancelled = true;
  }
};
const items = [
  entry,
  {
    key: "isCancelled",
    value: function isCancelled() {
      return this._isCancelled;
    }
  }
];
const tmp2 = _modDef6867(Cancellable, items);
let closure_1 = tmp2;

export const autoScroll = function autoScroll(scrollNow, arg1, arg2, diff, diff1, arg5, arg6) {
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = diff;
  closure_4 = diff1;
  let tmp = arg6;
  if (arg6 === undefined) {
    tmp = new closure_1();
  }
  closure_6 = tmp;
  return new Promise((arg0) => {
    scrollNow = arg0;
    scrollNow(closure_1, num2, false);
    closure_1 = 7 * max2;
    num = -1;
    num2 = -1;
    if (num > closure_1) {
      num2 = 1;
    }
    if (max > num2) {
      num = 1;
    }
    if (num > closure_1) {
      const _Math2 = Math;
      max = Math.min;
    } else {
      const _Math = Math;
      max = Math.max;
    }
    if (max > num2) {
      const _Math4 = Math;
      max2 = Math.min;
    } else {
      const _Math3 = Math;
      max2 = Math.max;
    }
    closure_6 = Date.now();
    closure_7 = tmp;
    closure_8 = tmp2;
    function animationLoop() {

    }
    const animationFrame = requestAnimationFrame(() => {
      if (closure_2_6.isCancelled()) {
        closure_1_0(false);
      } else {
        let _Date = Date;
        let timestamp = Date.now();
        let result = closure_1_1 * (timestamp - closure_1_6);
        closure_1_8 = closure_1_8 + result * closure_1_3;
        let sum = closure_1_7 + result * closure_1_2;
        closure_1_7 = sum;
        closure_2_0(closure_1_4(closure_2_3, sum), closure_1_5(closure_2_4, closure_1_8), false);
        closure_1_6 = timestamp;
        if (closure_1_4(closure_2_3, closure_1_7) === closure_2_3) {
          if (tmp15(tmp16, closure_1_8) === tmp16) {
            closure_1_0(true);
          }
        }
        if (typeof closure_1_9 === "function") {
          let _requestAnimationFrame = requestAnimationFrame;
          let animationFrame = requestAnimationFrame(() => {
            if (closure_2_6.isCancelled()) {
              closure_1_0(false);
            } else {
              let _Date = Date;
              let timestamp = Date.now();
              let result = closure_1_1 * (timestamp - closure_1_6);
              closure_1_8 = closure_1_8 + result * closure_1_3;
              let sum = closure_1_7 + result * closure_1_2;
              closure_1_7 = sum;
              closure_2_0(closure_1_4(closure_2_3, sum), closure_1_5(closure_2_4, closure_1_8), false);
              closure_1_6 = timestamp;
              if (closure_1_4(closure_2_3, closure_1_7) === closure_2_3) {
                if (tmp15(tmp16, closure_1_8) === tmp16) {
                  closure_1_0(true);
                }
              }
              if (typeof closure_1_9 === "function") {
                let _requestAnimationFrame = requestAnimationFrame;
                let animationFrame = requestAnimationFrame(() => {
                  if (closure_2_6.isCancelled()) {
                    closure_1_0(false);
                  } else {
                    let _Date = Date;
                    let timestamp = Date.now();
                    let result = closure_1_1 * (timestamp - closure_1_6);
                    closure_1_8 = closure_1_8 + result * closure_1_3;
                    let sum = closure_1_7 + result * closure_1_2;
                    closure_1_7 = sum;
                    closure_2_0(closure_1_4(closure_2_3, sum), closure_1_5(closure_2_4, closure_1_8), false);
                    closure_1_6 = timestamp;
                    if (closure_1_4(closure_2_3, closure_1_7) === closure_2_3) {
                      if (tmp15(tmp16, closure_1_8) === tmp16) {
                        closure_1_0(true);
                      }
                    }
                    if (typeof closure_1_9 === "function") {
                      let _requestAnimationFrame = requestAnimationFrame;
                      let animationFrame = requestAnimationFrame(() => { ... });
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                    let tmp14 = closure_1_4(closure_2_3, sum);
                    tmp15 = closure_1_5;
                  }
                });
              } else {
                throw new TypeError("Trying to call a non-function");
              }
              let tmp14 = closure_1_4(closure_2_3, sum);
              tmp15 = closure_1_5;
            }
          });
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        let tmp14 = closure_1_4(closure_2_3, sum);
        tmp15 = closure_1_5;
      }
    });
  });
};
export const Cancellable = tmp2;