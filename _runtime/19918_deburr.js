// === Module 19918: deburr ===

// Module 19918 (deburr)
import _mod625 from "module_625" /* 625 */;
import _mod19919 from "module_19919" /* 19919 */;

const re2 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
let closure_3 = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");

export default function deburr(arg0) {
  const str = _mod625(arg0);
  let replaced = str;
  if (str) {
    replaced = str.replace(re2, _mod19919).replace(closure_3, "");
    const str2 = str.replace(re2, _mod19919);
  }
  return replaced;
};