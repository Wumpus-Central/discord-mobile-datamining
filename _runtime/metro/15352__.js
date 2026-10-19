// _runtime/metro/15352__.js
import _mod15324 from "15324__.js";
import _mod15350 from "15350__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15324[arg0];
    let tmp8;
    if (_mod15350(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15324[arg0];
    if (tmp3) {
      tmp3 = _mod15324[arg0][arg1];
    }
  }
  return tmp3;
};
