// === Module 15571: ? ===

// Module 15571
import _mod15569 from "module_15569" /* 15569 */;


export default (arg0, arg1) => {
  const tmp = _mod15569(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};