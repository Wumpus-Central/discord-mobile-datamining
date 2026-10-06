// === Module 14107: ? ===

// Module 14107
import _mod14079 from "module_14079" /* 14079 */;
import _mod14105 from "module_14105" /* 14105 */;


export default function(arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod14079[arg0];
    let tmp8;
    if (_mod14105(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod14079[arg0] && _mod14079[arg0][arg1];
  }
  return tmp3;
};