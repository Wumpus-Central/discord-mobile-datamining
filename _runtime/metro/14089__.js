// _runtime/metro/14089__.js
import _mod14061 from "14061__.js";
import _mod14087 from "14087__.js";

export default function (arg0, arg1) {
  let tmp3;
  if (arguments.length < 2) {
    const tmp7 = _mod14061[arg0];
    let tmp8;
    if (_mod14087(tmp7)) {
      tmp8 = tmp7;
    }
    tmp3 = tmp8;
  } else {
    tmp3 = _mod14061[arg0] && _mod14061[arg0][arg1];
  }
  return tmp3;
}
