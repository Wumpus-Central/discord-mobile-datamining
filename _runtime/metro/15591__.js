// === Module 15591: ? ===

// Module 15591
import _mod15589 from "module_15589" /* 15589 */;


export default (arg0, arg1) => {
  const tmp = _mod15589(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};