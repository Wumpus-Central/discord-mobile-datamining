// === Module 15573: ? ===

// Module 15573
import _mod15545 from "module_15545" /* 15545 */;
import _mod15571 from "module_15571" /* 15571 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15545[arg0];
    let tmp8;
    if (_mod15571(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15545[arg0];
    if (tmp3) {
      tmp3 = _mod15545[arg0][arg1];
    }
  }
  return tmp3;
};