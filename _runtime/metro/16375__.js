// === Module 16375: ? ===

// Module 16375
import _mod16376 from "module_16376" /* 16376 */;
import _mod16378 from "module_16378" /* 16378 */;
import text from "text" /* 16385 */;
import _mod16396 from "module_16396" /* 16396 */;
import _mod16406 from "module_16406" /* 16406 */;
import _mod16408 from "module_16408" /* 16408 */;
import _mod16410 from "module_16410" /* 16410 */;
import _mod16411 from "module_16411" /* 16411 */;

if (!_mod16376) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16378(arg0);
    const tmp4 = text(arg1);
    if (!_mod16408) {
      if (_mod16396(tmp3, tmp4)) {
        const tmpResult = _mod16410;
        return tmpResult(!_mod16406(_mod16411.f, tmp3, tmp4), tmp3[tmp4]);
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