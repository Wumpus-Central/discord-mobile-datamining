
export default function isIterateeCall(arg0, num) {
  if (require(606) /* isObject */(arg2)) {
    if (typeof num === "number") {
      let tmp5 = tmp(603)(arg2) && tmp(628)(num, arg2.length);
      const tmp4 = tmp(603)(arg2) && tmp(628)(num, arg2.length);
    } else {
      tmp5 = typeof num === "string";
      if (typeof num === "string") {
        tmp5 = num in arg2;
      }
    }
    let tmp6 = tmp5;
    if (tmp6) {
      tmp6 = tmp(752)(arg2[num], arg0);
    }
    return tmp6;
  } else {
    return false;
  }
};