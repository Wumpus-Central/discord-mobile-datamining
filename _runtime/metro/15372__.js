// === Module 15372: ? ===

// Module 15372
import _mod15373 from "module_15373" /* 15373 */;
import _mod15375 from "module_15375" /* 15375 */;
import text from "text" /* 15382 */;
import _mod15393 from "module_15393" /* 15393 */;
import _mod15403 from "module_15403" /* 15403 */;
import _mod15405 from "module_15405" /* 15405 */;
import _mod15407 from "module_15407" /* 15407 */;
import _mod15408 from "module_15408" /* 15408 */;

if (!_mod15373) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15375(arg0);
    const tmp4 = text(arg1);
    if (!_mod15405) {
      if (_mod15393(tmp3, tmp4)) {
        const tmpResult = _mod15407;
        return tmpResult(!_mod15403(_mod15408.f, tmp3, tmp4), tmp3[tmp4]);
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