// _runtime/04289_escapeRegExp.js
import toString from "00762_toString.js";

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