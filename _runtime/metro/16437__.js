// === Module 16437: ? ===

// Module 16437
import _mod16435 from "module_16435" /* 16435 */;


export default (arg0, arg1) => {
  const tmp = _mod16435(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};