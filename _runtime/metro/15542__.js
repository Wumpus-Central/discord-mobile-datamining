// === Module 15542: ? ===

// Module 15542
import _mod15543 from "module_15543" /* 15543 */;
import _mod15545 from "module_15545" /* 15545 */;
import text from "text" /* 15552 */;
import _mod15563 from "module_15563" /* 15563 */;
import _mod15573 from "module_15573" /* 15573 */;
import _mod15575 from "module_15575" /* 15575 */;
import _mod15577 from "module_15577" /* 15577 */;
import _mod15578 from "module_15578" /* 15578 */;

if (!_mod15543) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15545(arg0);
    const tmp4 = text(arg1);
    if (!_mod15575) {
      if (_mod15563(tmp3, tmp4)) {
        const tmpResult = _mod15577;
        return tmpResult(!_mod15573(_mod15578.f, tmp3, tmp4), tmp3[tmp4]);
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