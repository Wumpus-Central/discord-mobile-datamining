// === Module 16414: ? ===

// Module 16414
import _mod16386 from "module_16386" /* 16386 */;
import _mod16412 from "module_16412" /* 16412 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16386[arg0];
    let tmp8;
    if (_mod16412(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16386[arg0];
    if (tmp3) {
      tmp3 = _mod16386[arg0][arg1];
    }
  }
  return tmp3;
};