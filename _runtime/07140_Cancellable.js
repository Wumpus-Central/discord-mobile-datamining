// === Module 7140: Cancellable ===

// Module 7140 (Cancellable)
import _createClassDefault from "_createClass" /* 7089 */;
import Cancellable from "_classCallCheck" /* 7088 */;

class Cancellable {
  constructor() {
    tmp = Cancellable(this, Cancellable);
    this._isCancelled = false;
    return;
  }
}
const items = [
  {
    key: "cancel",
    value: function cancel() {
      this._isCancelled = true;
    }
  },
  {
    key: "isCancelled",
    value: function isCancelled() {
      return this._isCancelled;
    }
  }
];
const tmp2 = _createClassDefault(Cancellable, items);
let closure_1 = tmp2;

export const autoScroll = function autoScroll(c6, c4, c5, diff, diff1, closure_2, closure_1) {
  closure_0 = c6;
  closure_1 = c4;
  closure_2 = c5;
  closure_3 = diff;
  closure_4 = diff1;
  let num = closure_2;
  if (closure_2 === undefined) {
    num = 1;
  }
  let tmp = closure_1;
  if (closure_1 === undefined) {
    tmp = new closure_1();
  }
  closure_6 = tmp;
  return new Promise((arg0) => {
    c6 = arg0;
    c6(closure_1, num2, false);
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
      if (closure_1_6.isCancelled()) {
        callback(false);
      } else {
        let _Date = Date;
        timestamp = Date.now();
        let result = closure_1 * (timestamp - timestamp);
        closure_8 = closure_8 + result * closure_3;
        sum = sum + result * closure_2;
        closure_1_0(callback2(closure_1_3, sum), callback3(closure_1_4, closure_8), false);
        if (callback2(closure_1_3, sum) === closure_1_3) {
          if (callback3(tmp16, closure_8) === tmp16) {
            callback(true);
          }
        }
        if (typeof closure_9 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let _requestAnimationFrame = requestAnimationFrame;
        let animationFrame = requestAnimationFrame(() => {
          if (closure_1_6.isCancelled()) {
            callback(false);
          } else {
            let _Date = Date;
            timestamp = Date.now();
            let result = closure_1 * (timestamp - timestamp);
            closure_8 = closure_8 + result * closure_3;
            sum = sum + result * closure_2;
            closure_1_0(callback2(closure_1_3, sum), callback3(closure_1_4, closure_8), false);
            if (callback2(closure_1_3, sum) === closure_1_3) {
              if (callback3(tmp16, closure_8) === tmp16) {
                callback(true);
              }
            }
            if (typeof closure_9 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            let _requestAnimationFrame = requestAnimationFrame;
            let animationFrame = requestAnimationFrame(() => {
              if (closure_1_6.isCancelled()) {
                callback(false);
              } else {
                let _Date = Date;
                timestamp = Date.now();
                let result = closure_1 * (timestamp - timestamp);
                closure_8 = closure_8 + result * closure_3;
                sum = sum + result * closure_2;
                closure_1_0(callback2(closure_1_3, sum), callback3(closure_1_4, closure_8), false);
                if (callback2(closure_1_3, sum) === closure_1_3) {
                  if (callback3(tmp16, closure_8) === tmp16) {
                    callback(true);
                  }
                }
                if (typeof closure_9 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                let _requestAnimationFrame = requestAnimationFrame;
                let animationFrame = requestAnimationFrame(() => { ... });
              }
            });
          }
        });
      }
    });
  });
};
export const Cancellable = tmp2;