// _runtime/metro/14441__.js
import _mod14413 from "14413__.js";
import _mod14439 from "14439__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14413[arg0];
    let tmp8;
    if (_mod14439(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14413[arg0];
    if (tmp3) {
      tmp3 = _mod14413[arg0][arg1];
    }
  }
  return tmp3;
};
