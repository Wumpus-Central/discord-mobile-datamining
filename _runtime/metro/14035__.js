// === Module 14035: ? ===

// Module 14035
import _mod14033 from "module_14033" /* 14033 */;


export default (arg0, arg1) => {
  const tmp = _mod14033(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};