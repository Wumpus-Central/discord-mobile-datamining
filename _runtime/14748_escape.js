// _runtime/14748_escape.js
import _mod625 from "metro/00625__.js";
import basePropertyOf from "14749_basePropertyOf.js";

const tmp = /[&<>"']/g;
const re2 = tmp;
const regex = RegExp(tmp.source);

export default function escape(arg0) {
  const str = _mod625(arg0);
  let replaced = str;
  if (str) {
    replaced = str;
    if (regex.test(str)) {
      replaced = str.replace(re2, basePropertyOf);
    }
  }
  return replaced;
}
