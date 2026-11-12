// _runtime/metro/16652__.js
import _mod16624 from "16624__.js";
import _mod16650 from "16650__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16624[arg0];
    let tmp8;
    if (_mod16650(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16624[arg0];
    if (tmp3) {
      tmp3 = _mod16624[arg0][arg1];
    }
  }
  return tmp3;
};
