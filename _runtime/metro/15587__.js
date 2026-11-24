// _runtime/metro/15587__.js
import _mod15559 from "15559__.js";
import _mod15585 from "15585__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15559[arg0];
    let tmp8;
    if (_mod15585(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15559[arg0];
    if (tmp3) {
      tmp3 = _mod15559[arg0][arg1];
    }
  }
  return tmp3;
};
