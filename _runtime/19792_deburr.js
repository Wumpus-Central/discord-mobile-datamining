// === Module 19792: deburr ===

// Module 19792 (deburr)
import _mod625 from "module_625" /* 625 */;
import _mod19793 from "module_19793" /* 19793 */;

const re2 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
let closure_3 = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");

export default function deburr(arg0) {
  const str = _mod625(arg0);
  let replaced = str;
  if (str) {
    replaced = str.replace(re2, _mod19793).replace(closure_3, "");
    const str2 = str.replace(re2, _mod19793);
  }
  return replaced;
};