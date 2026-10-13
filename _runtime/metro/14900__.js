// _runtime/metro/14900__.js
import _mod14872 from "14872__.js";
import _mod14898 from "14898__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14872[arg0];
    let tmp8;
    if (_mod14898(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14872[arg0];
    if (tmp3) {
      tmp3 = _mod14872[arg0][arg1];
    }
  }
  return tmp3;
};
