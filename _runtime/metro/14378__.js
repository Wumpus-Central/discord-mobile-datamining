// === Module 14378: ? ===

// Module 14378
import _mod14350 from "module_14350" /* 14350 */;
import _mod14376 from "module_14376" /* 14376 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14350[arg0];
    let tmp8;
    if (_mod14376(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14350[arg0];
    if (tmp3) {
      tmp3 = _mod14350[arg0][arg1];
    }
  }
  return tmp3;
};