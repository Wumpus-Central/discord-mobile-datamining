// === Module 19856: words ===

// Module 19856 (words)
import _mod625 from "module_625" /* 625 */;
import _mod19857 from "module_19857" /* 19857 */;
import combined from "combined" /* 19858 */;
import asciiWords from "asciiWords" /* 19859 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod625(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod19857(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};