// === Module 4401: escapeRegExp ===

// Module 4401 (escapeRegExp)
import toString from "toString" /* 626 */;

const tmp = /[\\^$.*+?()[\]{}|]/g;
const re2 = tmp;
let closure_3 = RegExp(tmp.source);

export default function escapeRegExp(arg0) {
  const str = toString(arg0);
  let replaced = str;
  if (str) {
    replaced = str;
    if (regex.test(str)) {
      replaced = str.replace(closure_2, "\\$&");
    }
  }
  return replaced;
};