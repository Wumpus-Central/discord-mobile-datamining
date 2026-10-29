// === Module 16071: ? ===

// Module 16071
import _mod16043 from "module_16043" /* 16043 */;
import _mod16069 from "module_16069" /* 16069 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16043[arg0];
    let tmp8;
    if (_mod16069(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16043[arg0];
    if (tmp3) {
      tmp3 = _mod16043[arg0][arg1];
    }
  }
  return tmp3;
};