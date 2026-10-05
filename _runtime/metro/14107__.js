// === Module 14107: ? ===

// Module 14107
import _mod14066 from "module_14066" /* 14066 */;
import _mod14108 from "module_14108" /* 14108 */;
import _mod14112 from "module_14112" /* 14112 */;

const f115902 = (arg0, arg1, arg2) => {
  const tmp3 = _mod14066(arg0);
  const tmp4 = _mod14108(tmp3);
  if (0 === tmp4) {
    return !c0 && -1;
  } else {
    let sum = _mod14112(arg2, tmp4);
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
const obj = { includes: f115902, indexOf: f115902 };

export default obj;