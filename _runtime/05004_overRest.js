// === Module 5004: overRest ===

// Module 5004 (overRest)
import apply from "apply" /* 5005 */;


export default function overRest(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let diff = arg1;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let tmp2 = closure_2;
  if (undefined === arg1) {
    let num = 1;
    diff = arg0.length - 1;
  }
  closure_1 = tmp2(diff, 0);
  return function() {
    let tmp = closure_1;
    const tmp2 = max(arguments.length - closure_1, 0);
    const ArrayResult = Array(tmp2);
    let num = 0;
    if (0 < tmp2) {
      do {
        ArrayResult[num] = arguments[closure_1 + num];
        num = num + 1;
        tmp = closure_1;
      } while (num < tmp2);
    }
    const ArrayResult1 = Array(tmp + 1);
    let num2 = 0;
    if (0 < tmp) {
      do {
        ArrayResult1[num2] = arguments[num2];
        num2 = num2 + 1;
        tmp = closure_1;
      } while (num2 < closure_1);
    }
    ArrayResult1[tmp] = closure_2(ArrayResult);
    return apply(closure_0, this, ArrayResult1);
  };
};