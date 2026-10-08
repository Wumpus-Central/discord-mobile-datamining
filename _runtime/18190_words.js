// === Module 18190: words ===

// Module 18190 (words)
import _mod637 from "module_637" /* 637 */;
import _mod18191 from "module_18191" /* 18191 */;
import combined from "combined" /* 18192 */;
import asciiWords from "asciiWords" /* 18193 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod637(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod18191(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};