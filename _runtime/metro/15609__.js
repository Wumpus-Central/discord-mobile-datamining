// === Module 15609: ? ===

// Module 15609
import _mod15581 from "module_15581" /* 15581 */;
import _mod15607 from "module_15607" /* 15607 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15581[arg0];
    let tmp8;
    if (_mod15607(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15581[arg0];
    if (tmp3) {
      tmp3 = _mod15581[arg0][arg1];
    }
  }
  return tmp3;
};