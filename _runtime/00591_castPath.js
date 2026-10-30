// === Module 591: castPath ===

// Module 591 (castPath)
import _mod514 from "module_514" /* 514 */;
import _mod585 from "module_585" /* 585 */;
import memoizeCapped from "memoizeCapped" /* 592 */;
import _mod625 from "module_625" /* 625 */;


export default function castPath(arg0, arg1) {
  if (_mod514(arg0)) {
    return arg0;
  } else if (_mod585(arg0, arg1)) {
    const items = [arg0];
    let tmpResultResult = items;
  } else {
    tmpResultResult = memoizeCapped(_mod625(arg0));
    const tmpResult = memoizeCapped;
  }
};