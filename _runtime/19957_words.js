// === Module 19957: words ===

// Module 19957 (words)
import _mod625 from "module_625" /* 625 */;
import _mod19958 from "module_19958" /* 19958 */;
import combined from "combined" /* 19959 */;
import asciiWords from "asciiWords" /* 19960 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod625(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod19958(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};