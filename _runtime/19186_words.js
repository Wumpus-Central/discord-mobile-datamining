// === Module 19186: words ===

// Module 19186 (words)
import _mod637 from "module_637" /* 637 */;
import _mod19187 from "module_19187" /* 19187 */;
import combined from "combined" /* 19188 */;
import asciiWords from "asciiWords" /* 19189 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod637(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod19187(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};