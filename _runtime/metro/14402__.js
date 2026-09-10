// _runtime/metro/14402__.js
import _mod14374 from "14374__.js";
import _mod14400 from "14400__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14374[arg0];
    let tmp8;
    if (_mod14400(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14374[arg0];
    if (tmp3) {
      tmp3 = _mod14374[arg0][arg1];
    }
  }
  return tmp3;
};
