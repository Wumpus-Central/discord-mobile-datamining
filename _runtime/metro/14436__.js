// === Module 14436: ? ===

// Module 14436
import _mod14434 from "module_14434" /* 14434 */;


export default (arg0, arg1) => {
  const tmp = _mod14434(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};