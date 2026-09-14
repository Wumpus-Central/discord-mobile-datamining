// === Module 14414: ? ===

// Module 14414
import _mod14386 from "module_14386" /* 14386 */;
import _mod14412 from "module_14412" /* 14412 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14386[arg0];
    let tmp8;
    if (_mod14412(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14386[arg0];
    if (tmp3) {
      tmp3 = _mod14386[arg0][arg1];
    }
  }
  return tmp3;
};