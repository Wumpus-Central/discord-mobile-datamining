// === Module 15595: ? ===

// Module 15595
import _mod15593 from "module_15593" /* 15593 */;


export default (arg0, arg1) => {
  const tmp = _mod15593(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};