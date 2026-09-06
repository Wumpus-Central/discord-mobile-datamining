// === Module 604: isMasked ===

// Module 604 (isMasked)
import _mod605 from "module_605" /* 605 */;

const match = /[^.]+$/.exec(_mod605 && _mod605.keys && _mod605.keys.IE_PROTO || "");
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