// === Module 14700: ? ===

// Module 14700
import _mod14672 from "module_14672" /* 14672 */;
import _mod14698 from "module_14698" /* 14698 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14672[arg0];
    let tmp8;
    if (_mod14698(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14672[arg0];
    if (tmp3) {
      tmp3 = _mod14672[arg0][arg1];
    }
  }
  return tmp3;
};