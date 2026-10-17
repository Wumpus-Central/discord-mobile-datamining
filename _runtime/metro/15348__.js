// _runtime/metro/15348__.js
import _mod15320 from "15320__.js";
import _mod15346 from "15346__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15320[arg0];
    let tmp8;
    if (_mod15346(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15320[arg0];
    if (tmp3) {
      tmp3 = _mod15320[arg0][arg1];
    }
  }
  return tmp3;
};
