// === Module 14579: ? ===

// Module 14579
import _mod14577 from "module_14577" /* 14577 */;


export default (arg0, arg1) => {
  const tmp = _mod14577(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};