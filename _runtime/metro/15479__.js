// === Module 15479: ? ===

// Module 15479
import _mod15451 from "module_15451" /* 15451 */;
import _mod15477 from "module_15477" /* 15477 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15451[arg0];
    let tmp8;
    if (_mod15477(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15451[arg0];
    if (tmp3) {
      tmp3 = _mod15451[arg0][arg1];
    }
  }
  return tmp3;
};