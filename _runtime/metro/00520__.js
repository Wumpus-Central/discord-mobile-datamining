// _runtime/metro/00520__.js
import _mod521 from "00521__.js";
import _mod522 from "00522__.js";

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
}
