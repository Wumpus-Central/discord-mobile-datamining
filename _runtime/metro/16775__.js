// _runtime/metro/16775__.js
import _mod16747 from "16747__.js";
import _mod16773 from "16773__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16747[arg0];
    let tmp8;
    if (_mod16773(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16747[arg0];
    if (tmp3) {
      tmp3 = _mod16747[arg0][arg1];
    }
  }
  return tmp3;
};
