// === Module 17454: words ===

// Module 17454 (words)
import _mod626 from "module_626" /* 626 */;
import _mod17455 from "module_17455" /* 17455 */;
import combined from "combined" /* 17456 */;
import asciiWords from "asciiWords" /* 17457 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod17455(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};