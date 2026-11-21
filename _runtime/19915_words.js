// === Module 19915: words ===

// Module 19915 (words)
import _mod625 from "module_625" /* 625 */;
import _mod19916 from "module_19916" /* 19916 */;
import combined from "combined" /* 19917 */;
import asciiWords from "asciiWords" /* 19918 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod625(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod19916(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};