// === Module 14413: ? ===

// Module 14413
import _mod14385 from "module_14385" /* 14385 */;
import _mod14411 from "module_14411" /* 14411 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14385[arg0];
    let tmp8;
    if (_mod14411(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14385[arg0];
    if (tmp3) {
      tmp3 = _mod14385[arg0][arg1];
    }
  }
  return tmp3;
};