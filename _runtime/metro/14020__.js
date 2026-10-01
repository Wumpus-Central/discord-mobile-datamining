// === Module 14020: ? ===

// Module 14020
import _mod13992 from "module_13992" /* 13992 */;
import _mod14018 from "module_14018" /* 14018 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod13992[arg0];
    let tmp8;
    if (_mod14018(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod13992[arg0];
    if (tmp3) {
      tmp3 = _mod13992[arg0][arg1];
    }
  }
  return tmp3;
};