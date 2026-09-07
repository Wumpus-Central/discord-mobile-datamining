// === Module 14328: ? ===

// Module 14328
import _mod14300 from "module_14300" /* 14300 */;
import _mod14326 from "module_14326" /* 14326 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14300[arg0];
    let tmp8;
    if (_mod14326(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14300[arg0];
    if (tmp3) {
      tmp3 = _mod14300[arg0][arg1];
    }
  }
  return tmp3;
};