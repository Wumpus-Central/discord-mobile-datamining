// _runtime/metro/00615__.js
import _mod616 from "00616__.js";

const match = /[^.]+$/.exec((_mod616 && _mod616.keys && _mod616.keys.IE_PROTO) || "");
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
