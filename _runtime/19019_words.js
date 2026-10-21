// === Module 19019: words ===

// Module 19019 (words)
import _mod637 from "module_637" /* 637 */;
import _mod19020 from "module_19020" /* 19020 */;
import combined from "combined" /* 19021 */;
import asciiWords from "asciiWords" /* 19022 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod637(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod19020(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};