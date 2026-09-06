// === Module 4684: ? ===

// Module 4684
import _mod552 from "module_552" /* 552 */;
import baseClamp from "baseClamp" /* 4685 */;


export default function clamp(arg0, arg1, arg2) {
  let tmp = arg2;
  if (undefined === arg2) {
    tmp = arg1;
  }
  let tmp3 = tmp;
  if (undefined !== tmp) {
    const tmp6 = _mod552(tmp);
    let num = 0;
    if (tmp6 == tmp6) {
      num = tmp6;
    }
    tmp3 = num;
  }
  let tmp7 = tmp2;
  if (undefined !== arg1) {
    const tmp10 = _mod552(tmp2);
    let num2 = 0;
    if (tmp10 == tmp10) {
      num2 = tmp10;
    }
    tmp7 = num2;
  }
  return baseClamp(_mod552(arg0), tmp7, tmp3);
};