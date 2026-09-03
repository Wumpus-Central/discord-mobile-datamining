// === Module 14242: ? ===

// Module 14242
import _mod14240 from "module_14240" /* 14240 */;


export default (arg0, arg1) => {
  const tmp = _mod14240(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};