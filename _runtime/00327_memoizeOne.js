// === Module 327: memoizeOne ===

// Module 327 (memoizeOne)
let closure_3;

function areInputsEqual(arg0, arg1) {
  if (arg0.length !== arg1.length) {
    return false;
  } else {
    let num = 0;
    if (0 < arg0.length) {
      while (true) {
        let tmp = arg0[num];
        let tmp2 = arg1[num];
        if (tmp !== tmp2) {
          if (!ponyfill(tmp)) {
            break;
          } else if (!ponyfill(tmp2)) {
            break;
          }
        }
        num = num + 1;
      }
      return false;
    }
    return true;
  }
}
const ponyfill = Number.isNaN || (function ponyfill(num) {
  let tmp = typeof num === "number";
  if (typeof num === "number") {
    tmp = num != num;
  }
  return tmp;
});

export default function memoizeOne(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  if (undefined === arg1) {
    closure_1 = areInputsEqual;
  }
  let items = [];
  let c5 = false;
  return function memoized() {
    let length;
    items = [];
    let num = 0;
    if (0 < arguments.length) {
      do {
        items[num] = arguments[num];
        num = num + 1;
        length = arguments.length;
      } while (num < length);
    }
    self = this;
    const tmp = c5 && self === self && closure_1(items, items);
    if (!tmp) {
      closure_3 = closure_0.apply(self, items);
      c5 = true;
    }
    return closure_3;
  };
};