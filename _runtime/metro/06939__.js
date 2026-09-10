// === Module 6939: ? ===

// Module 6939
import _mod6937 from "module_6937" /* 6937 */;


export default function _superPropBase(arg0, key10009) {
  hasOwnProperty = {}.hasOwnProperty;
  const call = hasOwnProperty.call;
  let tmp = arg0;
  if (!(typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg0, key10009))) {
    let tmp4 = _mod6937(arg0);
    tmp = tmp4;
    if (null !== tmp4) {
      while (true) {
        let hasOwnProperty2 = {}.hasOwnProperty;
        let call2 = hasOwnProperty2.call;
        tmp = tmp4;
        if (typeof call2 === "unknown" ? hasOwnProperty2(key10009) : call2(tmp4, key10009)) {
          break;
        } else {
          tmp4 = _mod6937(tmp4);
          tmp = tmp4;
          if (null === tmp4) {
            break;
          }
        }
      }
    }
  }
  return tmp;
};