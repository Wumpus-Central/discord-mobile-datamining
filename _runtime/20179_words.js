// === Module 20179: words ===

// Module 20179 (words)
import _mod625 from "module_625" /* 625 */;
import _mod20180 from "module_20180" /* 20180 */;
import combined from "combined" /* 20181 */;
import asciiWords from "asciiWords" /* 20182 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod625(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod20180(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};