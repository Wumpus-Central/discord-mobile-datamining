// _runtime/04418_isArguments.js

export default function isArguments(callee) {
  const call = toString.call;
  const tmp2 = typeof call === "unknown" ? toString() : call(callee);
  let tmp3 = "[object Arguments]" === tmp2;
  if (!tmp3) {
    let tmp4 = "[object Array]" !== tmp2;
    if (tmp4) {
      tmp4 = null !== callee;
    }
    if (tmp4) {
      tmp4 = typeof callee === "object";
    }
    if (tmp4) {
      tmp4 = typeof callee.length === "number";
    }
    if (tmp4) {
      tmp4 = callee.length >= 0;
    }
    if (!tmp4) {
      tmp3 = tmp4;
    } else {
      const call2 = toString.call;
      const str2 = "[object Function]";
      const tmp6 = typeof call2 === "unknown" ? toString() : call2(str2);
    }
  }
  return tmp3;
};