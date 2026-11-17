// _runtime/20684_words.js
import _mod625 from "metro/00625__.js";
import _mod20685 from "metro/20685__.js";
import combined from "20686_combined.js";
import asciiWords from "20687_asciiWords.js";

export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod625(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod20685(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
}
