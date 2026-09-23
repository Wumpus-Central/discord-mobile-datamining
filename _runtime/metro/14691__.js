// === Module 14691: ? ===

// Module 14691
import _mod14663 from "module_14663" /* 14663 */;
import _mod14689 from "module_14689" /* 14689 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14663[arg0];
    let tmp8;
    if (_mod14689(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14663[arg0];
    if (tmp3) {
      tmp3 = _mod14663[arg0][arg1];
    }
  }
  return tmp3;
};