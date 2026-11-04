// _runtime/20126_deburr.js
import _mod625 from "metro/00625__.js";
import _mod20127 from "metro/20127__.js";

const re2 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
let closure_3 = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");

export default function deburr(arg0) {
  const str = _mod625(arg0);
  let replaced = str;
  if (str) {
    replaced = str.replace(re2, _mod20127).replace(closure_3, "");
    const str2 = str.replace(re2, _mod20127);
  }
  return replaced;
}
