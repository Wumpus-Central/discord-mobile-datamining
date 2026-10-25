// === Module 15596: ? ===

// Module 15596
import _mod15594 from "module_15594" /* 15594 */;


export default (arg0, arg1) => {
  const tmp = _mod15594(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};