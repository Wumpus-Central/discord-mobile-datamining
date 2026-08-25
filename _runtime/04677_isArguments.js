// === Module 4677: isArguments ===

// Module 4677 (isArguments)

export default function isArguments(obj) {
  const call = toString.call;
  const tmp2 = typeof call === "unknown" ? toString() : call(obj);
  let tmp3 = "[object Arguments]" === tmp2;
  if (!tmp3) {
    let tmp4 = "[object Array]" !== tmp2;
    if (tmp4) {
      tmp4 = null !== obj;
    }
    if (tmp4) {
      tmp4 = typeof obj === "object";
    }
    if (tmp4) {
      tmp4 = typeof obj.length === "number";
    }
    if (tmp4) {
      tmp4 = obj.length >= 0;
    }
    if (!tmp4) {
      tmp3 = tmp4;
    } else {
      const call2 = tmp.call;
      let str2 = obj.callee;
      str2 = "[object Function]";
      const tmp6 = typeof call2 === "unknown" ? tmp() : call2(str2);
    }
  }
  return tmp3;
};