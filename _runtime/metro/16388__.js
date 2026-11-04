// _runtime/metro/16388__.js
import _mod16360 from "16360__.js";
import _mod16386 from "16386__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16360[arg0];
    let tmp8;
    if (_mod16386(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16360[arg0];
    if (tmp3) {
      tmp3 = _mod16360[arg0][arg1];
    }
  }
  return tmp3;
};
