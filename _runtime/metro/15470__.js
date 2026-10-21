// === Module 15470: ? ===

// Module 15470
import _mod15442 from "module_15442" /* 15442 */;
import _mod15468 from "module_15468" /* 15468 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15442[arg0];
    let tmp8;
    if (_mod15468(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15442[arg0];
    if (tmp3) {
      tmp3 = _mod15442[arg0][arg1];
    }
  }
  return tmp3;
};