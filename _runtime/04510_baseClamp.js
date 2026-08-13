// _runtime/04510_baseClamp.js

export default function baseClamp(arg0, arg1, arg2) {
  let tmp = arg0;
  if (arg0 == arg0) {
    let tmp2 = arg2;
    let tmp3 = arg0;
    if (undefined !== arg2) {
      if (arg0 <= tmp2) {
        tmp2 = arg0;
      }
      tmp3 = tmp2;
    }
    let tmp4 = arg1;
    let tmp5 = tmp3;
    if (undefined !== arg1) {
      if (tmp3 >= tmp4) {
        tmp4 = tmp3;
      }
      tmp5 = tmp4;
    }
    tmp = tmp5;
  }
  return tmp;
};