// === Module 16680: ? ===

// Module 16680
import _mod16678 from "module_16678" /* 16678 */;


export default (arg0, arg1) => {
  const tmp = _mod16678(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};