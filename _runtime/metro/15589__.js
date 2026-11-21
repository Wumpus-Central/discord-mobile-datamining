// === Module 15589: ? ===

// Module 15589
import _mod15587 from "module_15587" /* 15587 */;


export default (arg0, arg1) => {
  const tmp = _mod15587(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};