// _runtime/18805_words.js
import _mod637 from "metro/00637__.js";
import _mod18806 from "metro/18806__.js";
import combined from "18807_combined.js";
import asciiWords from "18808_asciiWords.js";

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
}
