// === Module 14302: ? ===

// Module 14302
import _mod14303 from "module_14303" /* 14303 */;
import _mod14305 from "module_14305" /* 14305 */;
import text from "text" /* 14312 */;
import _mod14323 from "module_14323" /* 14323 */;
import _mod14333 from "module_14333" /* 14333 */;
import _mod14335 from "module_14335" /* 14335 */;
import _mod14337 from "module_14337" /* 14337 */;
import _mod14338 from "module_14338" /* 14338 */;

if (!_mod14303) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14305(arg0);
    const tmp4 = text(arg1);
    if (!_mod14335) {
      if (_mod14323(tmp3, tmp4)) {
        const tmpResult = _mod14333;
        return tmpResult(!tmpResult(_mod14338.f, tmp3, tmp4), tmp3[tmp4]);
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