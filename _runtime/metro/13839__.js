// === Module 13839: ? ===

// Module 13839
import _mod13837 from "module_13837" /* 13837 */;


export default (arg0, arg1) => {
  const tmp = _mod13837(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};