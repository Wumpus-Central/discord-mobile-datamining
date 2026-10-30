// _runtime/metro/00603__.js
import _mod604 from "00604__.js";

const match = /[^.]+$/.exec((_mod604 && _mod604.keys && _mod604.keys.IE_PROTO) || "");
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
