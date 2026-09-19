// === Module 18108: words ===

// Module 18108 (words)
import _mod626 from "module_626" /* 626 */;
import _mod18109 from "module_18109" /* 18109 */;
import combined from "combined" /* 18110 */;
import asciiWords from "asciiWords" /* 18111 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod18109(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};