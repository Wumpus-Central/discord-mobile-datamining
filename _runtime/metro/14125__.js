// === Module 14125: ? ===

// Module 14125
import _mod14084 from "module_14084" /* 14084 */;
import _mod14126 from "module_14126" /* 14126 */;
import _mod14130 from "module_14130" /* 14130 */;

const f116062 = (arg0, arg1, arg2) => {
  const tmp3 = _mod14084(arg0);
  const tmp4 = _mod14126(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod14130(arg2, tmp4);
    if (c0) {
      if (arg1 != arg1) {
        if (tmp4 > sum) {
          while (tmp3[+sum] == tmp3[+sum]) {
            sum = tmp7 + 1;
          }
          return true;
        }
      }
      return !c0 && -1;
    }
    let sum1 = sum;
    if (tmp4 > sum) {
      let num;
      while (true) {
        num = c0;
        if (c0) {
          if (tmp3[sum1] === arg1) {
            break;
          }
        }
        sum1 = sum1 + 1;
      }
      if (!num) {
        num = sum1;
      }
      if (!num) {
        num = 0;
      }
      return num;
    }
  }
};
let c0 = false;
const obj = { includes: f116062, indexOf: f116062 };

export default obj;