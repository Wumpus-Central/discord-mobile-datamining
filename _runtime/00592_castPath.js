// === Module 592: castPath ===

// Module 592 (castPath)
import _mod514 from "module_514" /* 514 */;
import _mod586 from "module_586" /* 586 */;
import memoizeCapped from "memoizeCapped" /* 593 */;
import _mod626 from "module_626" /* 626 */;


export default function castPath(arg0, arg1) {
  if (_mod514(arg0)) {
    return arg0;
  } else if (_mod586(arg0, arg1)) {
    const items = [arg0];
    let tmpResultResult = items;
  } else {
    tmpResultResult = memoizeCapped(_mod626(arg0));
    const tmpResult = memoizeCapped;
  }
};