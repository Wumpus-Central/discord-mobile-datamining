// === Module 14397: ? ===

// Module 14397
import _mod14398 from "module_14398" /* 14398 */;
import _mod14400 from "module_14400" /* 14400 */;
import text from "text" /* 14407 */;
import _mod14418 from "module_14418" /* 14418 */;
import _mod14428 from "module_14428" /* 14428 */;
import _mod14430 from "module_14430" /* 14430 */;
import _mod14432 from "module_14432" /* 14432 */;
import _mod14433 from "module_14433" /* 14433 */;

if (!_mod14398) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14400(arg0);
    const tmp4 = text(arg1);
    if (!_mod14430) {
      if (_mod14418(tmp3, tmp4)) {
        const tmpResult = _mod14432;
        return tmpResult(!_mod14428(_mod14433.f, tmp3, tmp4), tmp3[tmp4]);
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