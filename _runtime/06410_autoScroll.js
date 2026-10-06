// === Module 6410: autoScroll ===

// Module 6410 (autoScroll)
import _createClassDefault from "_createClass" /* 6359 */;
import _classCallCheck from "_classCallCheck" /* 6358 */;

class Cancellable {
  constructor() {
    _classCallCheck(this, Cancellable);
    this._isCancelled = false;
  }
}
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
let tmp2 = _createClassDefault(Cancellable, items);
let closure_1 = tmp2;
const Cancellable_export = tmp2;

export const autoScroll = function autoScroll(scrollNow, c4, diff1, diff, diff12, arg5, arg6) {
  let closure_0 = scrollNow;
  closure_1 = c4;
  let closure_2 = diff1;
  let closure_3 = diff;
  let closure_4 = diff12;
  let num = arg5;
  if (arg5 === undefined) {
    num = 1;
  }
  let tmp = arg6;
  if (arg6 === undefined) {
    const tmp2 = closure_1;
    const self = this;
    const self2 = this;
    tmp = new closure_1();
  }
  let closure_6 = tmp;
  const promise = new Promise((arg0) => {
    let max;
    let max2;
    let num2;
    let sum;
    const f151247 = () => {
      if (timestamp.isCancelled()) {
        closure_0(false);
      } else {
        const _Date = Date;
        timestamp = Date.now();
        const result = closure_1 * (timestamp - timestamp);
        closure_8 = closure_8 + result * num;
        closure_7 = closure_7 + result * num2;
        const tmp14 = max(closure_3, closure_7);
        closure_0(tmp14, max2(closure_4, closure_8), false);
        if (max(closure_3, closure_7) === closure_3) {
          if (max2(closure_4, closure_8) === closure_4) {
            closure_0(true);
          }
        }
        if (typeof animationLoop === "function") {
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(f151247);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    };
    closure_0 = arg0;
    closure_0(closure_1, num2, false);
    closure_1 = 7 * max2;
    num = -1;
    num2 = -1;
    const tmp4 = num;
    if (num > closure_1) {
      num2 = 1;
    }
    const tmp5 = max;
    if (max > num2) {
      num = 1;
    }
    if (tmp4 > closure_1) {
      const _Math2 = Math;
      max = Math.min;
    } else {
      const _Math = Math;
      max = Math.max;
    }
    if (tmp5 > num2) {
      const _Math4 = Math;
      max2 = Math.min;
    } else {
      const _Math3 = Math;
      max2 = Math.max;
    }
    let timestamp = Date.now();
    let closure_7 = tmp;
    let closure_8 = tmp2;
    function animationLoop() {

    }
    let animationFrame = requestAnimationFrame(f151247);
  });
  return promise;
};
export { Cancellable_export as Cancellable };