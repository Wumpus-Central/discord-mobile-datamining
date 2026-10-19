// === Module 18919: words ===

// Module 18919 (words)
import _mod637 from "module_637" /* 637 */;
import _mod18920 from "module_18920" /* 18920 */;
import combined from "combined" /* 18921 */;
import asciiWords from "asciiWords" /* 18922 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod637(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod18920(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};