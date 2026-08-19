// === Module 740: isMasked ===

// Module 740 (isMasked)
import _mod741 from "module_741" /* 741 */;

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