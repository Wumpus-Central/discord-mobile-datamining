// === Module 16459: ? ===

// Module 16459
import _mod16431 from "module_16431" /* 16431 */;
import _mod16457 from "module_16457" /* 16457 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16431[arg0];
    let tmp8;
    if (_mod16457(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16431[arg0];
    if (tmp3) {
      tmp3 = _mod16431[arg0][arg1];
    }
  }
  return tmp3;
};