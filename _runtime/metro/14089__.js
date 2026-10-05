// === Module 14089: ? ===

// Module 14089
import _mod14061 from "module_14061" /* 14061 */;
import _mod14087 from "module_14087" /* 14087 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod14061[arg0];
    let tmp8;
    if (_mod14087(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod14061[arg0] && _mod14061[arg0][arg1];
  }
  return tmp3;
};