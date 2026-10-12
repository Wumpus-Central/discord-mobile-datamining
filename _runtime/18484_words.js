// _runtime/18484_words.js
import _mod637 from "metro/00637__.js";
import _mod18485 from "metro/18485__.js";
import combined from "18486_combined.js";
import asciiWords from "18487_asciiWords.js";

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
}
