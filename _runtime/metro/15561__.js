// === Module 15561: ? ===

// Module 15561
import _mod15562 from "module_15562" /* 15562 */;
import _mod15564 from "module_15564" /* 15564 */;
import text from "text" /* 15571 */;
import _mod15582 from "module_15582" /* 15582 */;
import _mod15592 from "module_15592" /* 15592 */;
import _mod15594 from "module_15594" /* 15594 */;
import _mod15596 from "module_15596" /* 15596 */;
import _mod15597 from "module_15597" /* 15597 */;

if (!_mod15562) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15564(arg0);
    const tmp4 = text(arg1);
    if (!_mod15594) {
      if (_mod15582(tmp3, tmp4)) {
        const tmpResult = _mod15596;
        return tmpResult(!_mod15592(_mod15597.f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {
      }
    }
  };
}

export const f = getOwnPropertyDescriptor;