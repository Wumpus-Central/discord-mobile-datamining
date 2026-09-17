// === Module 14423: ? ===

// Module 14423
import _mod14424 from "module_14424" /* 14424 */;
import _mod14426 from "module_14426" /* 14426 */;
import text from "text" /* 14433 */;
import _mod14444 from "module_14444" /* 14444 */;
import _mod14454 from "module_14454" /* 14454 */;
import _mod14456 from "module_14456" /* 14456 */;
import _mod14458 from "module_14458" /* 14458 */;
import _mod14459 from "module_14459" /* 14459 */;

if (!_mod14424) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14426(arg0);
    const tmp4 = text(arg1);
    if (!_mod14456) {
      if (_mod14444(tmp3, tmp4)) {
        const tmpResult = _mod14458;
        return tmpResult(!_mod14454(_mod14459.f, tmp3, tmp4), tmp3[tmp4]);
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