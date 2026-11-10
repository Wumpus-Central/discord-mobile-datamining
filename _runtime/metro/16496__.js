// === Module 16496: ? ===

// Module 16496
import _mod16468 from "module_16468" /* 16468 */;
import _mod16494 from "module_16494" /* 16494 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16468[arg0];
    let tmp8;
    if (_mod16494(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16468[arg0];
    if (tmp3) {
      tmp3 = _mod16468[arg0][arg1];
    }
  }
  return tmp3;
};