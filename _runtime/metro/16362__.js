// === Module 16362: ? ===

// Module 16362
import _mod16363 from "module_16363" /* 16363 */;
import _mod16365 from "module_16365" /* 16365 */;
import text from "text" /* 16372 */;
import _mod16383 from "module_16383" /* 16383 */;
import _mod16393 from "module_16393" /* 16393 */;
import _mod16395 from "module_16395" /* 16395 */;
import _mod16397 from "module_16397" /* 16397 */;
import _mod16398 from "module_16398" /* 16398 */;

if (!_mod16363) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16365(arg0);
    const tmp4 = text(arg1);
    if (!_mod16395) {
      if (_mod16383(tmp3, tmp4)) {
        const tmpResult = _mod16397;
        return tmpResult(!_mod16393(_mod16398.f, tmp3, tmp4), tmp3[tmp4]);
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