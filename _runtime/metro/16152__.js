// _runtime/metro/16152__.js
import _mod16124 from "16124__.js";
import _mod16150 from "16150__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16124[arg0];
    let tmp8;
    if (_mod16150(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16124[arg0];
    if (tmp3) {
      tmp3 = _mod16124[arg0][arg1];
    }
  }
  return tmp3;
};
