// === Module 737: isMasked ===

// Module 737 (isMasked)
import _mod738 from "module_738" /* 738 */;

const match = /[^.]+$/.exec(_mod738 && _mod738.keys && _mod738.keys.IE_PROTO || "");
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