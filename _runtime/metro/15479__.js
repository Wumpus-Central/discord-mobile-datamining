// _runtime/metro/15479__.js
import _mod15451 from "15451__.js";
import _mod15477 from "15477__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15451[arg0];
    let tmp8;
    if (_mod15477(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15451[arg0];
    if (tmp3) {
      tmp3 = _mod15451[arg0][arg1];
    }
  }
  return tmp3;
};
