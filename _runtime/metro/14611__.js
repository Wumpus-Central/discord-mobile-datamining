// === Module 14611: ? ===

// Module 14611
import _mod14583 from "module_14583" /* 14583 */;
import _mod14609 from "module_14609" /* 14609 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14583[arg0];
    let tmp8;
    if (_mod14609(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14583[arg0];
    if (tmp3) {
      tmp3 = _mod14583[arg0][arg1];
    }
  }
  return tmp3;
};