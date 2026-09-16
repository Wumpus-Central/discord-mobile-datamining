// === Module 14441: ? ===

// Module 14441
import _mod14413 from "module_14413" /* 14413 */;
import _mod14439 from "module_14439" /* 14439 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14413[arg0];
    let tmp8;
    if (_mod14439(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14413[arg0];
    if (tmp3) {
      tmp3 = _mod14413[arg0][arg1];
    }
  }
  return tmp3;
};