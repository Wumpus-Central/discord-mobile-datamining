// _runtime/metro/14691__.js
import _mod14663 from "14663__.js";
import _mod14689 from "14689__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14663[arg0];
    let tmp8;
    if (_mod14689(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14663[arg0];
    if (tmp3) {
      tmp3 = _mod14663[arg0][arg1];
    }
  }
  return tmp3;
};
