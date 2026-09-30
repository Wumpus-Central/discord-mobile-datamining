// === Module 14012: ? ===

// Module 14012
import _mod13984 from "module_13984" /* 13984 */;
import _mod14010 from "module_14010" /* 14010 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod13984[arg0];
    let tmp8;
    if (_mod14010(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod13984[arg0];
    if (tmp3) {
      tmp3 = _mod13984[arg0][arg1];
    }
  }
  return tmp3;
};