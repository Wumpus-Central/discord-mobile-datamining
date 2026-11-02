// === Module 16156: ? ===

// Module 16156
import _mod16128 from "module_16128" /* 16128 */;
import _mod16154 from "module_16154" /* 16154 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16128[arg0];
    let tmp8;
    if (_mod16154(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16128[arg0];
    if (tmp3) {
      tmp3 = _mod16128[arg0][arg1];
    }
  }
  return tmp3;
};