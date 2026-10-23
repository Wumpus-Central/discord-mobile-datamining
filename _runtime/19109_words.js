// _runtime/19109_words.js
import _mod637 from "metro/00637__.js";
import _mod19110 from "metro/19110__.js";
import combined from "19111_combined.js";
import asciiWords from "19112_asciiWords.js";

export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod637(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (_mod19110(str)) {
      tmpResult = combined;
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = asciiWords(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
}
