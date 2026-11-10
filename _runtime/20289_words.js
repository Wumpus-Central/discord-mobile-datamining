// === Module 20289: words ===

// Module 20289 (words)
import _mod625 from "module_625" /* 625 */;
import _mod20290 from "module_20290" /* 20290 */;
import combined from "combined" /* 20291 */;
import asciiWords from "asciiWords" /* 20292 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod625(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod20290(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};