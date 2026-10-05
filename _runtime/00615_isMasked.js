// === Module 615: isMasked ===

// Module 615 (isMasked)
import _mod616 from "module_616" /* 616 */;

const tmp = /[^.]+$/;
const exec = tmp.exec;
const tmp2 = _mod616 && _mod616.keys && _mod616.keys.IE_PROTO || "";
const match = exec(tmp2);
let str = "";
if (match) {
  str = `Symbol(src)_1.${tmp3}`;
}

export default function isMasked(arg0) {
  return str && tmp in arg0;
};