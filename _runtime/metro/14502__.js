// _runtime/metro/14502__.js
import _mod14474 from "14474__.js";
import _mod14500 from "14500__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14474[arg0];
    let tmp8;
    if (_mod14500(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14474[arg0];
    if (tmp3) {
      tmp3 = _mod14474[arg0][arg1];
    }
  }
  return tmp3;
};
