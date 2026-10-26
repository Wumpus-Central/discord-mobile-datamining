// === Module 19185: words ===

// Module 19185 (words)
import _mod637 from "module_637" /* 637 */;
import _mod19186 from "module_19186" /* 19186 */;
import combined from "combined" /* 19187 */;
import asciiWords from "asciiWords" /* 19188 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod637(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod19186(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};