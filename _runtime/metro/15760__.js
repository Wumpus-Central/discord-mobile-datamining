// _runtime/metro/15760__.js
import _mod15732 from "15732__.js";
import _mod15758 from "15758__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15732[arg0];
    let tmp8;
    if (_mod15758(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15732[arg0];
    if (tmp3) {
      tmp3 = _mod15732[arg0][arg1];
    }
  }
  return tmp3;
};
