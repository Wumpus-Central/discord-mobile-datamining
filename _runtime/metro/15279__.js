// === Module 15279: ? ===

// Module 15279
import _mod15251 from "module_15251" /* 15251 */;
import _mod15277 from "module_15277" /* 15277 */;


export default (arg0, arg1) => {
  if (arguments.length < 2) {
    const tmp7 = _mod15251[arg0];
    let tmp8;
    if (_mod15277(tmp7)) {
      tmp8 = tmp7;
    }
    let tmp3 = tmp8;
  } else {
    tmp3 = _mod15251[arg0];
    if (tmp3) {
      tmp3 = _mod15251[arg0][arg1];
    }
  }
  return tmp3;
};