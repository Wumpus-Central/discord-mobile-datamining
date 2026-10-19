// === Module 15352: ? ===

// Module 15352
import _mod15324 from "module_15324" /* 15324 */;
import _mod15350 from "module_15350" /* 15350 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15324[arg0];
    let tmp8;
    if (_mod15350(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15324[arg0];
    if (tmp3) {
      tmp3 = _mod15324[arg0][arg1];
    }
  }
  return tmp3;
};