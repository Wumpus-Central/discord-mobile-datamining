// === Module 16134: ? ===

// Module 16134
import _mod16132 from "module_16132" /* 16132 */;


export default (arg0, arg1) => {
  const tmp = _mod16132(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};