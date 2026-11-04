// === Module 16388: ? ===

// Module 16388
import _mod16360 from "module_16360" /* 16360 */;
import _mod16386 from "module_16386" /* 16386 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16360[arg0];
    let tmp8;
    if (_mod16386(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16360[arg0];
    if (tmp3) {
      tmp3 = _mod16360[arg0][arg1];
    }
  }
  return tmp3;
};