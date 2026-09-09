// === Module 14353: ? ===

// Module 14353
import _mod14325 from "module_14325" /* 14325 */;
import _mod14351 from "module_14351" /* 14351 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14325[arg0];
    let tmp8;
    if (_mod14351(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14325[arg0];
    if (tmp3) {
      tmp3 = _mod14325[arg0][arg1];
    }
  }
  return tmp3;
};