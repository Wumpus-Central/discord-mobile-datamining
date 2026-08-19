// _runtime/00327_areInputsEqual.js
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
let ponyfill = Number.isNaN;
if (!ponyfill) {
  ponyfill = function ponyfill(num) {
    let tmp = typeof num === "number";
    if (typeof num === "number") {
      tmp = num != num;
    }
    return tmp;
  };
}

export default function memoizeOne(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_4 = [];
  c5 = false;
  return function memoized() {
    let length;
    const items = [];
    let num = 0;
    if (0 < arguments.length) {
      do {
        items[num] = arguments[num];
        num = num + 1;
        length = arguments.length;
      } while (num < length);
    }
    const self = this;
    let tmp = c5;
    if (c5) {
      tmp = self === self;
    }
    if (tmp) {
      tmp = callback2(items, items);
    }
    if (!tmp) {
      closure_3 = callback.apply(self, items);
      c5 = true;
    }
    return closure_3;
  };
};