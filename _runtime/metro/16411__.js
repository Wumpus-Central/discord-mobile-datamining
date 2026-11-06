// === Module 16411: ? ===

// Module 16411
import _mod16383 from "module_16383" /* 16383 */;
import _mod16409 from "module_16409" /* 16409 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16383[arg0];
    let tmp8;
    if (_mod16409(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16383[arg0];
    if (tmp3) {
      tmp3 = _mod16383[arg0][arg1];
    }
  }
  return tmp3;
};