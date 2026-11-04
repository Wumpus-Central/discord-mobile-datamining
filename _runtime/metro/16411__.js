// === Module 16411: ? ===

// Module 16411
import _mod16409 from "module_16409" /* 16409 */;


export default (arg0, arg1) => {
  const tmp = _mod16409(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};