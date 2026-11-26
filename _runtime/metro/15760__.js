// === Module 15760: ? ===

// Module 15760
import _mod15732 from "module_15732" /* 15732 */;
import _mod15758 from "module_15758" /* 15758 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15732[arg0];
    let tmp8;
    if (_mod15758(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15732[arg0];
    if (tmp3) {
      tmp3 = _mod15732[arg0][arg1];
    }
  }
  return tmp3;
};