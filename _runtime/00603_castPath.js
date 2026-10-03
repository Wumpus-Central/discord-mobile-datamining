// === Module 603: castPath ===

// Module 603 (castPath)
import _mod514 from "module_514" /* 514 */;
import _mod597 from "module_597" /* 597 */;
import memoizeCapped from "memoizeCapped" /* 604 */;
import _mod637 from "module_637" /* 637 */;


export default function castPath(arg0, arg1) {
  if (_mod514(arg0)) {
    return arg0;
  } else if (_mod597(arg0, arg1)) {
    const items = [arg0];
    let tmpResultResult = items;
  } else {
    tmpResultResult = memoizeCapped(_mod637(arg0));
    const tmpResult = memoizeCapped;
  }
};