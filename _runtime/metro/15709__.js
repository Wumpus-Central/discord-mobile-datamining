// === Module 15709: ? ===

// Module 15709
import _mod15681 from "module_15681" /* 15681 */;
import _mod15707 from "module_15707" /* 15707 */;


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