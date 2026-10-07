// === Module 520: ? ===

// Module 520
import _mod521 from "module_521" /* 521 */;
import _mod522 from "module_522" /* 522 */;


export default function isFunction(arg0) {
  if (_mod521(arg0)) {
    const tmp3 = _mod522(arg0);
    let tmp4 = "[object Function]" == tmp3;
    if (!tmp4) {
      tmp4 = "[object GeneratorFunction]" == tmp3;
    }
    if (!tmp4) {
      tmp4 = "[object AsyncFunction]" == tmp3;
    }
    if (!tmp4) {
      tmp4 = "[object Proxy]" == tmp3;
    }
    return tmp4;
  } else {
    return false;
  }
};