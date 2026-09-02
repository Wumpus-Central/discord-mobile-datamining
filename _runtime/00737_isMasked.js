// _runtime/00737_isMasked.js
import _mod738 from "metro/00738__.js";

const match = /[^.]+$/.exec((_mod738 && _mod738.keys && _mod738.keys.IE_PROTO) || "");
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
