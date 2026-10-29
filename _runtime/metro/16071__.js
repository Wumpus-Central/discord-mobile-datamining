// _runtime/metro/16071__.js
import _mod16043 from "16043__.js";
import _mod16069 from "16069__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod16043[arg0];
    let tmp8;
    if (_mod16069(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod16043[arg0];
    if (tmp3) {
      tmp3 = _mod16043[arg0][arg1];
    }
  }
  return tmp3;
};
