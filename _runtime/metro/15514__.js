// === Module 15514: ? ===

// Module 15514
import _mod15486 from "module_15486" /* 15486 */;
import _mod15512 from "module_15512" /* 15512 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15486[arg0];
    let tmp8;
    if (_mod15512(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15486[arg0];
    if (tmp3) {
      tmp3 = _mod15486[arg0][arg1];
    }
  }
  return tmp3;
};