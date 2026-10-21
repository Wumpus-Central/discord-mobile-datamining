// _runtime/metro/15470__.js
import _mod15442 from "15442__.js";
import _mod15468 from "15468__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15442[arg0];
    let tmp8;
    if (_mod15468(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15442[arg0];
    if (tmp3) {
      tmp3 = _mod15442[arg0][arg1];
    }
  }
  return tmp3;
};
