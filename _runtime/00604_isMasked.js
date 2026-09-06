// _runtime/00604_isMasked.js
import _mod605 from "metro/00605__.js";

const match = /[^.]+$/.exec((_mod605 && _mod605.keys && _mod605.keys.IE_PROTO) || "");
let str = "";
if (match) {
  str = `Symbol(src)_1.${tmp2}`;
}

export default function isMasked(arg0) {
  let tmp2 = str;
  if (tmp2) {
    tmp2 = tmp in arg0;
  }
  return tmp2;
}
