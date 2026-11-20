// === Module 15443: ? ===

// Module 15443
import _mod15415 from "module_15415" /* 15415 */;
import _mod15441 from "module_15441" /* 15441 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15415[arg0];
    let tmp8;
    if (_mod15441(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15415[arg0];
    if (tmp3) {
      tmp3 = _mod15415[arg0][arg1];
    }
  }
  return tmp3;
};