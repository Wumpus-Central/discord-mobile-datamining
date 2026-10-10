// _runtime/metro/14556__.js
import _mod14528 from "14528__.js";
import _mod14554 from "14554__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14528[arg0];
    let tmp8;
    if (_mod14554(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14528[arg0];
    if (tmp3) {
      tmp3 = _mod14528[arg0][arg1];
    }
  }
  return tmp3;
};
