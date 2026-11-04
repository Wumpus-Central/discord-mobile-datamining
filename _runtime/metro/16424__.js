// === Module 16424: ? ===

// Module 16424
import _mod16422 from "module_16422" /* 16422 */;


export default (arg0, arg1) => {
  const tmp = _mod16422(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};