// === Module 15790: ? ===

// Module 15790
import _mod15788 from "module_15788" /* 15788 */;


export default (arg0, arg1) => {
  const tmp = _mod15788(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};