// _runtime/metro/15709__.js
import _mod15681 from "15681__.js";
import _mod15707 from "15707__.js";

export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15681[arg0];
    let tmp8;
    if (_mod15707(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15681[arg0];
    if (tmp3) {
      tmp3 = _mod15681[arg0][arg1];
    }
  }
  return tmp3;
};
