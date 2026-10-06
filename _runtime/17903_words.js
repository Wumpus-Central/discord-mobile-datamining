// _runtime/17903_words.js
import toString from "00637_toString.js";
import hasUnicodeWord from "17904_hasUnicodeWord.js";
import unicodeWords from "17905_unicodeWords.js";
import asciiWords from "17906_asciiWords.js";

export default function words(arg0, arg1, arg2) {
  let tmp4;
  const str = toString(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    let tmp5;
    if (hasUnicodeWord(str)) {
      tmp5 = unicodeWords(str);
    } else {
      tmp5 = asciiWords(str);
    }
    tmp4 = tmp5;
  } else {
    tmp4 = str.match(tmp3) || [];
  }
  return tmp4;
}
