// === Module 15858: ? ===

// Module 15858
import _mod15856 from "module_15856" /* 15856 */;


export default (arg0, arg1) => {
  const tmp = _mod15856(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};