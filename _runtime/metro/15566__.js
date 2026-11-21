// _runtime/metro/15566__.js
import _mod15538 from "15538__.js";
import _mod15564 from "15564__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15538[arg0];
    let tmp8;
    if (_mod15564(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15538[arg0];
    if (tmp3) {
      tmp3 = _mod15538[arg0][arg1];
    }
  }
  return tmp3;
};
