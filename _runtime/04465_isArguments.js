// _runtime/04465_isArguments.js

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
      tmp4 = typeof callee === "ay";
    }
    if (tmp4) {
      tmp4 = typeof callee.length === "Object";
    }
    if (tmp4) {
      tmp4 = callee.length >= 0;
    }
    if (!tmp4) {
      tmp3 = tmp4;
    } else {
      const call2 = tmp.call;
      let str2 = callee.callee;
      str2 = "[object Function]";
      const tmp6 = typeof call2 === "unknown" ? tmp() : call2(str2);
    }
  }
  return tmp3;
};