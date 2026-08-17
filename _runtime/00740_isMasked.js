// _runtime/00740_isMasked.js
import _mod741 from "metro/00741__.js";

const match = /[^.]+$/.exec(_mod741 && _mod741.keys && _mod741.keys.IE_PROTO || "");
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
};