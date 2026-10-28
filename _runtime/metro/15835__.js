// _runtime/metro/15835__.js
import _mod15807 from "15807__.js";
import _mod15833 from "15833__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15807[arg0];
    let tmp8;
    if (_mod15833(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15807[arg0];
    if (tmp3) {
      tmp3 = _mod15807[arg0][arg1];
    }
  }
  return tmp3;
};
