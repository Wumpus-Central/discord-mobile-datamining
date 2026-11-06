// === Module 16434: ? ===

// Module 16434
import _mod16432 from "module_16432" /* 16432 */;


export default (arg0, arg1) => {
  const tmp = _mod16432(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};