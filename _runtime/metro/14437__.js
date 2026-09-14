// === Module 14437: ? ===

// Module 14437
import _mod14435 from "module_14435" /* 14435 */;


export default (arg0, arg1) => {
  const tmp = _mod14435(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};