// === Module 14229: escape ===

// Module 14229 (escape)
import _mod637 from "module_637" /* 637 */;
import basePropertyOf from "basePropertyOf" /* 14230 */;

const tmp = /[&<>"']/g;
const re2 = tmp;
const regex = RegExp(tmp.source);

export default function escape(arg0) {
  const str = _mod637(arg0);
  let replaced = str;
  if (str) {
    replaced = str;
    if (regex.test(str)) {
      replaced = str.replace(re2, basePropertyOf);
    }
  }
  return replaced;
};