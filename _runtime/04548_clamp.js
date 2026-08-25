// _runtime/04548_clamp.js
import toNumber from "00637_toNumber.js";
import baseClamp from "04549_baseClamp.js";


export default function clamp(arg0, arg1, arg2) {
  let tmp = arg2;
  if (undefined === arg2) {
    tmp = arg1;
  }
  let tmp3 = tmp;
  if (undefined !== tmp) {
    const tmp6 = toNumber(tmp);
    let num = 0;
    if (tmp6 == tmp6) {
      num = tmp6;
    }
    tmp3 = num;
  }
  let tmp7 = tmp2;
  if (undefined !== arg1) {
    const tmp10 = toNumber(tmp2);
    let num2 = 0;
    if (tmp10 == tmp10) {
      num2 = tmp10;
    }
    tmp7 = num2;
  }
  return baseClamp(toNumber(arg0), tmp7, tmp3);
};