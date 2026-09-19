// _runtime/metro/14599__.js
import _mod14571 from "14571__.js";
import _mod14597 from "14597__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14571[arg0];
    let tmp8;
    if (_mod14597(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14571[arg0];
    if (tmp3) {
      tmp3 = _mod14571[arg0][arg1];
    }
  }
  return tmp3;
};
