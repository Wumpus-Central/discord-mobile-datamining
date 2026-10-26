// === Module 15572: ? ===

// Module 15572
import _mod15544 from "module_15544" /* 15544 */;
import _mod15570 from "module_15570" /* 15570 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15544[arg0];
    let tmp8;
    if (_mod15570(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15544[arg0];
    if (tmp3) {
      tmp3 = _mod15544[arg0][arg1];
    }
  }
  return tmp3;
};