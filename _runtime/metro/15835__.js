// === Module 15835: ? ===

// Module 15835
import _mod15807 from "module_15807" /* 15807 */;
import _mod15833 from "module_15833" /* 15833 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15807[arg0];
    let tmp8;
    if (_mod15833(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15807[arg0];
    if (tmp3) {
      tmp3 = _mod15807[arg0][arg1];
    }
  }
  return tmp3;
};