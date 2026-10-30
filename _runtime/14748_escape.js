// === Module 14748: escape ===

// Module 14748 (escape)
import _mod625 from "module_625" /* 625 */;
import basePropertyOf from "basePropertyOf" /* 14749 */;

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
};