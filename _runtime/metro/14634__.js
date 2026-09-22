// === Module 14634: ? ===

// Module 14634
import _mod14632 from "module_14632" /* 14632 */;


export default (arg0, arg1) => {
  const tmp = _mod14632(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};