// _runtime/metro/13985__.js
import _mod13957 from "13957__.js";
import _mod13983 from "13983__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod13957[arg0];
    let tmp8;
    if (_mod13983(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod13957[arg0];
    if (tmp3) {
      tmp3 = _mod13957[arg0][arg1];
    }
  }
  return tmp3;
};
