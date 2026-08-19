// === Module 13701: all ===

// Module 13701 (all)
import _mod13673 from "module_13673" /* 13673 */;
import all from "all" /* 13699 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod13673[arg0];
    let tmp8;
    if (all(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod13673[arg0];
    if (tmp3) {
      tmp3 = _mod13673[arg0][arg1];
    }
  }
  return tmp3;
};