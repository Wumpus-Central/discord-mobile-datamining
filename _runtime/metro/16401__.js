// _runtime/metro/16401__.js
import _mod16373 from "16373__.js";
import _mod16399 from "16399__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16373[arg0];
    let tmp8;
    if (_mod16399(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16373[arg0];
    if (tmp3) {
      tmp3 = _mod16373[arg0][arg1];
    }
  }
  return tmp3;
};
