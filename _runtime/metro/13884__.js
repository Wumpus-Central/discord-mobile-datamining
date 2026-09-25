// === Module 13884: ? ===

// Module 13884
import _mod13882 from "module_13882" /* 13882 */;


export default (arg0, arg1) => {
  const tmp = _mod13882(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};