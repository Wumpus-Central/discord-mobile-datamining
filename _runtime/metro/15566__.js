// === Module 15566: ? ===

// Module 15566
import _mod15538 from "module_15538" /* 15538 */;
import _mod15564 from "module_15564" /* 15564 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15538[arg0];
    let tmp8;
    if (_mod15564(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15538[arg0];
    if (tmp3) {
      tmp3 = _mod15538[arg0][arg1];
    }
  }
  return tmp3;
};