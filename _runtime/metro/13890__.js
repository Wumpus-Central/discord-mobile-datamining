// === Module 13890: ? ===

// Module 13890
import _mod13888 from "module_13888" /* 13888 */;


export default (arg0, arg1) => {
  const tmp = _mod13888(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};