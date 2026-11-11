// _runtime/metro/16657__.js
import _mod16629 from "16629__.js";
import _mod16655 from "16655__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16629[arg0];
    let tmp8;
    if (_mod16655(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16629[arg0];
    if (tmp3) {
      tmp3 = _mod16629[arg0][arg1];
    }
  }
  return tmp3;
};
