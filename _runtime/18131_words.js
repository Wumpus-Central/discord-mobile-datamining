// === Module 18131: words ===

// Module 18131 (words)
import _mod626 from "module_626" /* 626 */;
import _mod18132 from "module_18132" /* 18132 */;
import combined from "combined" /* 18133 */;
import asciiWords from "asciiWords" /* 18134 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod18132(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};