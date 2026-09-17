// _runtime/metro/14449__.js
import _mod14421 from "14421__.js";
import _mod14447 from "14447__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14421[arg0];
    let tmp8;
    if (_mod14447(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14421[arg0];
    if (tmp3) {
      tmp3 = _mod14421[arg0][arg1];
    }
  }
  return tmp3;
};
