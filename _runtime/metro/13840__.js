// === Module 13840: ? ===

// Module 13840
import _mod13838 from "module_13838" /* 13838 */;


export default (arg0, arg1) => {
  const tmp = _mod13838(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};