// _runtime/metro/15564__.js
import _mod15536 from "15536__.js";
import _mod15562 from "15562__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15536[arg0];
    let tmp8;
    if (_mod15562(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15536[arg0];
    if (tmp3) {
      tmp3 = _mod15536[arg0][arg1];
    }
  }
  return tmp3;
};
