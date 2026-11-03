// _runtime/metro/16299__.js
import _mod16271 from "16271__.js";
import _mod16297 from "16297__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16271[arg0];
    let tmp8;
    if (_mod16297(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16271[arg0];
    if (tmp3) {
      tmp3 = _mod16271[arg0][arg1];
    }
  }
  return tmp3;
};
