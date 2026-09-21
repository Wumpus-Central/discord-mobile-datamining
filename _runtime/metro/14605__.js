// === Module 14605: ? ===

// Module 14605
import _mod14577 from "module_14577" /* 14577 */;
import _mod14603 from "module_14603" /* 14603 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14577[arg0];
    let tmp8;
    if (_mod14603(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14577[arg0];
    if (tmp3) {
      tmp3 = _mod14577[arg0][arg1];
    }
  }
  return tmp3;
};