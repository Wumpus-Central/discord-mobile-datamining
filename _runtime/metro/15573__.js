// _runtime/metro/15573__.js
import _mod15545 from "15545__.js";
import _mod15571 from "15571__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15545[arg0];
    let tmp8;
    if (_mod15571(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15545[arg0];
    if (tmp3) {
      tmp3 = _mod15545[arg0][arg1];
    }
  }
  return tmp3;
};
