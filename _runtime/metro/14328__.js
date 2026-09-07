// _runtime/metro/14328__.js
import _mod14300 from "14300__.js";
import _mod14326 from "14326__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14300[arg0];
    let tmp8;
    if (_mod14326(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14300[arg0];
    if (tmp3) {
      tmp3 = _mod14300[arg0][arg1];
    }
  }
  return tmp3;
};
