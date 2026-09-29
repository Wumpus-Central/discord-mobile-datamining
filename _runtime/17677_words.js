// === Module 17677: words ===

// Module 17677 (words)
import _mod626 from "module_626" /* 626 */;
import _mod17678 from "module_17678" /* 17678 */;
import combined from "combined" /* 17679 */;
import asciiWords from "asciiWords" /* 17680 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod17678(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};