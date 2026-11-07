// _runtime/metro/16459__.js
import _mod16431 from "16431__.js";
import _mod16457 from "16457__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16431[arg0];
    let tmp8;
    if (_mod16457(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16431[arg0];
    if (tmp3) {
      tmp3 = _mod16431[arg0][arg1];
    }
  }
  return tmp3;
};
