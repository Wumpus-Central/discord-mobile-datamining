// === Module 17857: words ===

// Module 17857 (words)
import _mod637 from "module_637" /* 637 */;
import _mod17858 from "module_17858" /* 17858 */;
import combined from "combined" /* 17859 */;
import asciiWords from "asciiWords" /* 17860 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod637(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod17858(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};