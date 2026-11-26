// === Module 15783: ? ===

// Module 15783
import _mod15781 from "module_15781" /* 15781 */;


export default (arg0, arg1) => {
  const tmp = _mod15781(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};