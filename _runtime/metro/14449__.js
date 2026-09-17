// === Module 14449: ? ===

// Module 14449
import _mod14421 from "module_14421" /* 14421 */;
import _mod14447 from "module_14447" /* 14447 */;


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