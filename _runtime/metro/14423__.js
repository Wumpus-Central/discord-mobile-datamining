// === Module 14423: ? ===

// Module 14423
import _mod14395 from "module_14395" /* 14395 */;
import _mod14421 from "module_14421" /* 14421 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14395[arg0];
    let tmp8;
    if (_mod14421(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14395[arg0];
    if (tmp3) {
      tmp3 = _mod14395[arg0][arg1];
    }
  }
  return tmp3;
};