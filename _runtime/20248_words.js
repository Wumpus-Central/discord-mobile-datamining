// === Module 20248: words ===

// Module 20248 (words)
import _mod625 from "module_625" /* 625 */;
import _mod20249 from "module_20249" /* 20249 */;
import combined from "combined" /* 20250 */;
import asciiWords from "asciiWords" /* 20251 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod625(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod20249(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};