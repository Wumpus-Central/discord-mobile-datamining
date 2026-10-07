// === Module 17903: words ===

// Module 17903 (words)
import _mod637 from "module_637" /* 637 */;
import _mod17904 from "module_17904" /* 17904 */;
import combined from "combined" /* 17905 */;
import asciiWords from "asciiWords" /* 17906 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod637(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod17904(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};