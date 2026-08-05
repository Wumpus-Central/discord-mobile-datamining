// _runtime/04122_escapeRegExp.js
const tmp = /[\\^$.*+?()[\]{}|]/g;
let closure_3 = RegExp(tmp.source);

export default function escapeRegExp(arg0) {
  const str = require("00762_toString.js") /* toString */(arg0);
  let replaced = str;
  if (str) {
    replaced = str;
    if (regex.test(str)) {
      replaced = str.replace(closure_2, "\\$&");
    }
  }
  return replaced;
};