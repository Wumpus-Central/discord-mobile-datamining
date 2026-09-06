// === Module 14299: ? ===

// Module 14299
import _mod14300 from "module_14300" /* 14300 */;
import _mod14302 from "module_14302" /* 14302 */;
import text from "text" /* 14309 */;
import _mod14320 from "module_14320" /* 14320 */;
import _mod14330 from "module_14330" /* 14330 */;
import _mod14332 from "module_14332" /* 14332 */;
import _mod14334 from "module_14334" /* 14334 */;
import _mod14335 from "module_14335" /* 14335 */;

if (!_mod14300) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14302(arg0);
    const tmp4 = text(arg1);
    if (!_mod14332) {
      if (_mod14320(tmp3, tmp4)) {
        const tmpResult = _mod14330;
        return tmpResult(!tmpResult(_mod14335.f, tmp3, tmp4), tmp3[tmp4]);
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