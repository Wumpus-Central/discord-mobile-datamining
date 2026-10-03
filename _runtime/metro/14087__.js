// === Module 14087: ? ===

// Module 14087
import _mod14059 from "module_14059" /* 14059 */;
import _mod14085 from "module_14085" /* 14085 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14059[arg0];
    let tmp8;
    if (_mod14085(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14059[arg0];
    if (tmp3) {
      tmp3 = _mod14059[arg0][arg1];
    }
  }
  return tmp3;
};