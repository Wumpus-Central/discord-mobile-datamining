// === Module 15538: ? ===

// Module 15538
import _mod15539 from "module_15539" /* 15539 */;
import _mod15541 from "module_15541" /* 15541 */;
import text from "text" /* 15548 */;
import _mod15559 from "module_15559" /* 15559 */;
import _mod15569 from "module_15569" /* 15569 */;
import _mod15571 from "module_15571" /* 15571 */;
import _mod15573 from "module_15573" /* 15573 */;
import _mod15574 from "module_15574" /* 15574 */;

if (!_mod15539) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15541(arg0);
    const tmp4 = text(arg1);
    if (!_mod15571) {
      if (_mod15559(tmp3, tmp4)) {
        const tmpResult = _mod15573;
        return tmpResult(!_mod15569(_mod15574.f, tmp3, tmp4), tmp3[tmp4]);
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