// === Module 19788: words ===

// Module 19788 (words)
import _mod625 from "module_625" /* 625 */;
import _mod19789 from "module_19789" /* 19789 */;
import combined from "combined" /* 19790 */;
import asciiWords from "asciiWords" /* 19791 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod625(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod19789(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};