// === Module 15292: ? ===

// Module 15292
import _mod15290 from "module_15290" /* 15290 */;


export default (arg0, arg1) => {
  const tmp = _mod15290(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};