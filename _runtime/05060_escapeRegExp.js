// === Module 5060: escapeRegExp ===

// Module 5060 (escapeRegExp)
import _mod625 from "module_625" /* 625 */;

const tmp = /[\\^$.*+?()[\]{}|]/g;
const re2 = tmp;
const regex = RegExp(tmp.source);

export default function escapeRegExp(arg0) {
  const str = _mod625(arg0);
  let replaced = str;
  if (str) {
    replaced = str;
    if (regex.test(str)) {
      replaced = str.replace(re2, "\\$&");
    }
  }
  return replaced;
};