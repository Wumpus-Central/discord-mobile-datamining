// _runtime/metro/15398__.js
import _mod15370 from "15370__.js";
import _mod15396 from "15396__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15370[arg0];
    let tmp8;
    if (_mod15396(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15370[arg0];
    if (tmp3) {
      tmp3 = _mod15370[arg0][arg1];
    }
  }
  return tmp3;
};
