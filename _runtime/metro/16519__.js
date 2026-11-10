// === Module 16519: ? ===

// Module 16519
import _mod16517 from "module_16517" /* 16517 */;


export default (arg0, arg1) => {
  const tmp = _mod16517(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};