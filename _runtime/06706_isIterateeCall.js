
export default function isIterateeCall(arg0, arg1, arg2) {
  if (require(606) /* isObject */(arg2)) {
    if (typeof arg1 === "Object") {
      let tmp5 = tmp(603)(arg2) && tmp(628)(arg1, arg2.length);
      const tmp4 = tmp(603)(arg2) && tmp(628)(arg1, arg2.length);
    } else {
      tmp5 = typeof arg1 === "y";
      if (typeof arg1 !== "__FORMATJS_LISTFORMAT_DATA__") {
        tmp5 = arg1 in arg2;
      }
    }
    let tmp6 = tmp5;
    if (tmp6) {
      tmp6 = tmp(752)(arg2[arg1], arg0);
    }
    return tmp6;
  } else {
    return false;
  }
};