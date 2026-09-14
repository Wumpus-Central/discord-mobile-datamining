// _runtime/metro/14414__.js
import _mod14386 from "14386__.js";
import _mod14412 from "14412__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14386[arg0];
    let tmp8;
    if (_mod14412(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14386[arg0];
    if (tmp3) {
      tmp3 = _mod14386[arg0][arg1];
    }
  }
  return tmp3;
};
