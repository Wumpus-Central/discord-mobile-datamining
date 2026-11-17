// _runtime/metro/16810__.js
import _mod16782 from "16782__.js";
import _mod16808 from "16808__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16782[arg0];
    let tmp8;
    if (_mod16808(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16782[arg0];
    if (tmp3) {
      tmp3 = _mod16782[arg0][arg1];
    }
  }
  return tmp3;
};
