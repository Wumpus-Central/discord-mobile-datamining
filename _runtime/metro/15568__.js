// === Module 15568: ? ===

// Module 15568
import _mod15540 from "module_15540" /* 15540 */;
import _mod15566 from "module_15566" /* 15566 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15540[arg0];
    let tmp8;
    if (_mod15566(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15540[arg0];
    if (tmp3) {
      tmp3 = _mod15540[arg0][arg1];
    }
  }
  return tmp3;
};