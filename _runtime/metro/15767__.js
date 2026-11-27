// === Module 15767: ? ===

// Module 15767
import _mod15739 from "module_15739" /* 15739 */;
import _mod15765 from "module_15765" /* 15765 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15739[arg0];
    let tmp8;
    if (_mod15765(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15739[arg0];
    if (tmp3) {
      tmp3 = _mod15739[arg0][arg1];
    }
  }
  return tmp3;
};