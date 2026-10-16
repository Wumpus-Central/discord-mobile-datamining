// === Module 18818: words ===

// Module 18818 (words)
import _mod637 from "module_637" /* 637 */;
import _mod18819 from "module_18819" /* 18819 */;
import combined from "combined" /* 18820 */;
import asciiWords from "asciiWords" /* 18821 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod637(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod18819(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};