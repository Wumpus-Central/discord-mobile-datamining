// === Module 14900: ? ===

// Module 14900
import _mod14872 from "module_14872" /* 14872 */;
import _mod14898 from "module_14898" /* 14898 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14872[arg0];
    let tmp8;
    if (_mod14898(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14872[arg0];
    if (tmp3) {
      tmp3 = _mod14872[arg0][arg1];
    }
  }
  return tmp3;
};