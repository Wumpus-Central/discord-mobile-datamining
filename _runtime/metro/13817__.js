// === Module 13817: ? ===

// Module 13817
import _mod13789 from "module_13789" /* 13789 */;
import _mod13815 from "module_13815" /* 13815 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod13789[arg0];
    let tmp8;
    if (_mod13815(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod13789[arg0];
    if (tmp3) {
      tmp3 = _mod13789[arg0][arg1];
    }
  }
  return tmp3;
};