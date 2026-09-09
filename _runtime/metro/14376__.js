// === Module 14376: ? ===

// Module 14376
import _mod14374 from "module_14374" /* 14374 */;


export default (arg0, arg1) => {
  const tmp = _mod14374(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};