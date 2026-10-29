// === Module 16094: ? ===

// Module 16094
import _mod16092 from "module_16092" /* 16092 */;


export default (arg0, arg1) => {
  const tmp = _mod16092(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};