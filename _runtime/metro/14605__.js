// _runtime/metro/14605__.js
import _mod14577 from "14577__.js";
import _mod14603 from "14603__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14577[arg0];
    let tmp8;
    if (_mod14603(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14577[arg0];
    if (tmp3) {
      tmp3 = _mod14577[arg0][arg1];
    }
  }
  return tmp3;
};
