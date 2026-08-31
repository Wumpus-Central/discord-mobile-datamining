// === Module 13970: ? ===

// Module 13970
import _mod13968 from "module_13968" /* 13968 */;


export default (arg0, arg1) => {
  const tmp = _mod13968(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};