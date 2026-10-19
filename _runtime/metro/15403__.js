// === Module 15403: ? ===

// Module 15403
import _mod15401 from "module_15401" /* 15401 */;


export default (arg0, arg1) => {
  const tmp = _mod15401(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};