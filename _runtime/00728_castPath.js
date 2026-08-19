// === Module 728: castPath ===

// Module 728 (castPath)
import _mod599 from "module_599" /* 599 */;
import isKey from "isKey" /* 722 */;
import memoizeCapped from "memoizeCapped" /* 729 */;
import toString from "toString" /* 762 */;


export default function castPath(arg0, arg1) {
  if (_mod599(arg0)) {
    return arg0;
  } else if (isKey(arg0, arg1)) {
    const items = [arg0];
    let tmpResultResult = items;
  } else {
    tmpResultResult = memoizeCapped(toString(arg0));
    const tmpResult = memoizeCapped;
  }
};