// === Module 15348: ? ===

// Module 15348
import _mod15320 from "module_15320" /* 15320 */;
import _mod15346 from "module_15346" /* 15346 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15320[arg0];
    let tmp8;
    if (_mod15346(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15320[arg0];
    if (tmp3) {
      tmp3 = _mod15320[arg0][arg1];
    }
  }
  return tmp3;
};