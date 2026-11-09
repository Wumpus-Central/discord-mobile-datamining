// === Module 16469: ? ===

// Module 16469
import _mod16441 from "module_16441" /* 16441 */;
import _mod16467 from "module_16467" /* 16467 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16441[arg0];
    let tmp8;
    if (_mod16467(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16441[arg0];
    if (tmp3) {
      tmp3 = _mod16441[arg0][arg1];
    }
  }
  return tmp3;
};