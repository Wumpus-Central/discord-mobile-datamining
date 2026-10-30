// === Module 16111: ? ===

// Module 16111
import _mod16083 from "module_16083" /* 16083 */;
import _mod16109 from "module_16109" /* 16109 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16083[arg0];
    let tmp8;
    if (_mod16109(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16083[arg0];
    if (tmp3) {
      tmp3 = _mod16083[arg0][arg1];
    }
  }
  return tmp3;
};