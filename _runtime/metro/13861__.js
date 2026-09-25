// === Module 13861: ? ===

// Module 13861
import _mod13833 from "module_13833" /* 13833 */;
import _mod13859 from "module_13859" /* 13859 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod13833[arg0];
    let tmp8;
    if (_mod13859(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod13833[arg0];
    if (tmp3) {
      tmp3 = _mod13833[arg0][arg1];
    }
  }
  return tmp3;
};