// _runtime/metro/14406__.js
import _mod14378 from "14378__.js";
import _mod14404 from "14404__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14378[arg0];
    let tmp8;
    if (_mod14404(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14378[arg0];
    if (tmp3) {
      tmp3 = _mod14378[arg0][arg1];
    }
  }
  return tmp3;
};
