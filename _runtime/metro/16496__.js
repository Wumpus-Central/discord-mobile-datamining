// _runtime/metro/16496__.js
import _mod16468 from "16468__.js";
import _mod16494 from "16494__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16468[arg0];
    let tmp8;
    if (_mod16494(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16468[arg0];
    if (tmp3) {
      tmp3 = _mod16468[arg0][arg1];
    }
  }
  return tmp3;
};
