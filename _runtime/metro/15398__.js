// === Module 15398: ? ===

// Module 15398
import _mod15370 from "module_15370" /* 15370 */;
import _mod15396 from "module_15396" /* 15396 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15370[arg0];
    let tmp8;
    if (_mod15396(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15370[arg0];
    if (tmp3) {
      tmp3 = _mod15370[arg0][arg1];
    }
  }
  return tmp3;
};