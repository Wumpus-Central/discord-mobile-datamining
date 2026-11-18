// _runtime/metro/15493__.js
import _mod15465 from "15465__.js";
import _mod15491 from "15491__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15465[arg0];
    let tmp8;
    if (_mod15491(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15465[arg0];
    if (tmp3) {
      tmp3 = _mod15465[arg0][arg1];
    }
  }
  return tmp3;
};
