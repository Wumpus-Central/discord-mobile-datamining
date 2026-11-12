// === Module 16675: ? ===

// Module 16675
import _mod16673 from "module_16673" /* 16673 */;


export default (arg0, arg1) => {
  const tmp = _mod16673(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};