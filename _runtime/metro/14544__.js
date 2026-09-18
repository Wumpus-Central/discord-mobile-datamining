// === Module 14544: ? ===

// Module 14544
import _mod14516 from "module_14516" /* 14516 */;
import _mod14542 from "module_14542" /* 14542 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod14516[arg0];
    let tmp8;
    if (_mod14542(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod14516[arg0];
    if (tmp3) {
      tmp3 = _mod14516[arg0][arg1];
    }
  }
  return tmp3;
};