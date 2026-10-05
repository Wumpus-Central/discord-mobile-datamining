// _runtime/00615_isMasked.js
import _mod616 from "metro/00616__.js";

const tmp = /[^.]+$/;
const exec = tmp.exec;
const tmp2 = (_mod616 && _mod616.keys && _mod616.keys.IE_PROTO) || "";
const match = exec(tmp2);
let str = "";
if (match) {
  str = `Symbol(src)_1.${tmp3}`;
}

export default function isMasked(arg0) {
  return str && tmp in arg0;
}
