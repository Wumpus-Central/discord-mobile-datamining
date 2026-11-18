// === Module 15493: ? ===

// Module 15493
import _mod15465 from "module_15465" /* 15465 */;
import _mod15491 from "module_15491" /* 15491 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15465[arg0];
    let tmp8;
    if (_mod15491(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15465[arg0];
    if (tmp3) {
      tmp3 = _mod15465[arg0][arg1];
    }
  }
  return tmp3;
};