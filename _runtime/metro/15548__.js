// _runtime/metro/15548__.js
import _mod15520 from "15520__.js";
import _mod15546 from "15546__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15520[arg0];
    let tmp8;
    if (_mod15546(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15520[arg0];
    if (tmp3) {
      tmp3 = _mod15520[arg0][arg1];
    }
  }
  return tmp3;
};
