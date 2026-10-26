// === Module 19199: deburr ===

// Module 19199 (deburr)
import _mod637 from "module_637" /* 637 */;
import _mod19200 from "module_19200" /* 19200 */;

const re2 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
let closure_3 = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");

export default function deburr(arg0) {
  const str = _mod637(arg0);
  let replaced = str;
  if (str) {
    replaced = str.replace(re2, _mod19200).replace(closure_3, "");
    const str2 = str.replace(re2, _mod19200);
  }
  return replaced;
};