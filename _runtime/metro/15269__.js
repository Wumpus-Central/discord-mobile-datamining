// _runtime/metro/15269__.js
import _mod15241 from "15241__.js";
import _mod15267 from "15267__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15241[arg0];
    let tmp8;
    if (_mod15267(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15241[arg0];
    if (tmp3) {
      tmp3 = _mod15241[arg0][arg1];
    }
  }
  return tmp3;
};
