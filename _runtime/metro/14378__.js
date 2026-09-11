// _runtime/metro/14378__.js
import _mod14350 from "14350__.js";
import _mod14376 from "14376__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14350[arg0];
    let tmp8;
    if (_mod14376(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14350[arg0];
    if (tmp3) {
      tmp3 = _mod14350[arg0][arg1];
    }
  }
  return tmp3;
};
