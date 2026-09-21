// === Module 14579: ? ===

// Module 14579
import _mod14580 from "module_14580" /* 14580 */;
import _mod14582 from "module_14582" /* 14582 */;
import text from "text" /* 14589 */;
import _mod14600 from "module_14600" /* 14600 */;
import _mod14610 from "module_14610" /* 14610 */;
import _mod14612 from "module_14612" /* 14612 */;
import _mod14614 from "module_14614" /* 14614 */;
import _mod14615 from "module_14615" /* 14615 */;

if (!_mod14580) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14582(arg0);
    const tmp4 = text(arg1);
    if (!_mod14612) {
      if (_mod14600(tmp3, tmp4)) {
        const tmpResult = _mod14614;
        return tmpResult(!_mod14610(_mod14615.f, tmp3, tmp4), tmp3[tmp4]);
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