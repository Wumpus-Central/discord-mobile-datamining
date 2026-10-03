// === Module 17833: words ===

// Module 17833 (words)
import _mod637 from "module_637" /* 637 */;
import _mod17834 from "module_17834" /* 17834 */;
import combined from "combined" /* 17835 */;
import asciiWords from "asciiWords" /* 17836 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod637(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod17834(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};