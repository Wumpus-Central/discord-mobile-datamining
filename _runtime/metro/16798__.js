// === Module 16798: ? ===

// Module 16798
import _mod16796 from "module_16796" /* 16796 */;


export default (arg0, arg1) => {
  const tmp = _mod16796(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};