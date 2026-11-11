// === Module 16657: ? ===

// Module 16657
import _mod16629 from "module_16629" /* 16629 */;
import _mod16655 from "module_16655" /* 16655 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16629[arg0];
    let tmp8;
    if (_mod16655(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16629[arg0];
    if (tmp3) {
      tmp3 = _mod16629[arg0][arg1];
    }
  }
  return tmp3;
};