// === Module 18805: words ===

// Module 18805 (words)
import _mod637 from "module_637" /* 637 */;
import _mod18806 from "module_18806" /* 18806 */;
import combined from "combined" /* 18807 */;
import asciiWords from "asciiWords" /* 18808 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod637(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod18806(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};