// _runtime/metro/14107__.js
import _mod14066 from "14066__.js";
import _mod14108 from "14108__.js";
import _mod14112 from "14112__.js";

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
