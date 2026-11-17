// === Module 20637: words ===

// Module 20637 (words)
import _mod625 from "module_625" /* 625 */;
import _mod20638 from "module_20638" /* 20638 */;
import combined from "combined" /* 20639 */;
import asciiWords from "asciiWords" /* 20640 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod625(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod20638(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};