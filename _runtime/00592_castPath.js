// _runtime/00592_castPath.js
import _mod514 from "metro/00514__.js";
import _mod586 from "metro/00586__.js";
import memoizeCapped from "00593_memoizeCapped.js";
import _mod626 from "metro/00626__.js";

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
}
