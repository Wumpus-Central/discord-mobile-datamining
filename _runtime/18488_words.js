// === Module 18488: words ===

// Module 18488 (words)
import _mod637 from "module_637" /* 637 */;
import _mod18489 from "module_18489" /* 18489 */;
import combined from "combined" /* 18490 */;
import asciiWords from "asciiWords" /* 18491 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod637(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod18489(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};