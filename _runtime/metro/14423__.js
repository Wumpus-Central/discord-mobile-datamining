// _runtime/metro/14423__.js
import _mod14395 from "14395__.js";
import _mod14421 from "14421__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14395[arg0];
    let tmp8;
    if (_mod14421(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14395[arg0];
    if (tmp3) {
      tmp3 = _mod14395[arg0][arg1];
    }
  }
  return tmp3;
};
