// === Module 14348: ? ===

// Module 14348
import _mod14346 from "module_14346" /* 14346 */;


export default (arg0, arg1) => {
  const tmp = _mod14346(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};