// === Module 18200: words ===

// Module 18200 (words)
import _mod626 from "module_626" /* 626 */;
import _mod18201 from "module_18201" /* 18201 */;
import combined from "combined" /* 18202 */;
import asciiWords from "asciiWords" /* 18203 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod18201(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};