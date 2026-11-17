// === Module 20684: words ===

// Module 20684 (words)
import _mod625 from "module_625" /* 625 */;
import _mod20685 from "module_20685" /* 20685 */;
import combined from "combined" /* 20686 */;
import asciiWords from "asciiWords" /* 20687 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod625(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod20685(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};