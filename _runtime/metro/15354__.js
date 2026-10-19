// === Module 15354: ? ===

// Module 15354
import _mod15355 from "module_15355" /* 15355 */;
import _mod15357 from "module_15357" /* 15357 */;
import text from "text" /* 15364 */;
import _mod15375 from "module_15375" /* 15375 */;
import _mod15385 from "module_15385" /* 15385 */;
import _mod15387 from "module_15387" /* 15387 */;
import _mod15389 from "module_15389" /* 15389 */;
import _mod15390 from "module_15390" /* 15390 */;

if (!_mod15355) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15357(arg0);
    const tmp4 = text(arg1);
    if (!_mod15387) {
      if (_mod15375(tmp3, tmp4)) {
        const tmpResult = _mod15389;
        return tmpResult(!_mod15385(_mod15390.f, tmp3, tmp4), tmp3[tmp4]);
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