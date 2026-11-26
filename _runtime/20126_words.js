// === Module 20126: words ===

// Module 20126 (words)
import _mod625 from "module_625" /* 625 */;
import _mod20127 from "module_20127" /* 20127 */;
import combined from "combined" /* 20128 */;
import asciiWords from "asciiWords" /* 20129 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod625(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod20127(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};