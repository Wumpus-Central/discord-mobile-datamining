// _runtime/metro/14611__.js
import _mod14583 from "14583__.js";
import _mod14609 from "14609__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14583[arg0];
    let tmp8;
    if (_mod14609(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14583[arg0];
    if (tmp3) {
      tmp3 = _mod14583[arg0][arg1];
    }
  }
  return tmp3;
};
