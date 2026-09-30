// === Module 17712: words ===

// Module 17712 (words)
import _mod626 from "module_626" /* 626 */;
import _mod17713 from "module_17713" /* 17713 */;
import combined from "combined" /* 17714 */;
import asciiWords from "asciiWords" /* 17715 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod17713(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};