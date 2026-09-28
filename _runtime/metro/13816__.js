// === Module 13816: ? ===

// Module 13816
import _mod13788 from "module_13788" /* 13788 */;
import _mod13814 from "module_13814" /* 13814 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod13788[arg0];
    let tmp8;
    if (_mod13814(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod13788[arg0];
    if (tmp3) {
      tmp3 = _mod13788[arg0][arg1];
    }
  }
  return tmp3;
};