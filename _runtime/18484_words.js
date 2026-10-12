// === Module 18484: words ===

// Module 18484 (words)
import _mod637 from "module_637" /* 637 */;
import _mod18485 from "module_18485" /* 18485 */;
import combined from "combined" /* 18486 */;
import asciiWords from "asciiWords" /* 18487 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod637(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod18485(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};