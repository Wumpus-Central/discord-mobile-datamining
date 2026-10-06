// _runtime/metro/14107__.js
import _mod14079 from "14079__.js";
import _mod14105 from "14105__.js";

export default function (arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod14079[arg0];
    let tmp8;
    if (_mod14105(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod14079[arg0] && _mod14079[arg0][arg1];
  }
  return tmp3;
}
