// === Module 13936: ? ===

// Module 13936
import _mod13934 from "module_13934" /* 13934 */;


export default (arg0, arg1) => {
  const tmp = _mod13934(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};