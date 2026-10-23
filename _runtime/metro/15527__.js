// === Module 15527: ? ===

// Module 15527
import _mod15499 from "module_15499" /* 15499 */;
import _mod15525 from "module_15525" /* 15525 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15499[arg0];
    let tmp8;
    if (_mod15525(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15499[arg0];
    if (tmp3) {
      tmp3 = _mod15499[arg0][arg1];
    }
  }
  return tmp3;
};