// === Module 14415: ? ===

// Module 14415
import _mod14416 from "module_14416" /* 14416 */;
import _mod14418 from "module_14418" /* 14418 */;
import text from "text" /* 14425 */;
import _mod14436 from "module_14436" /* 14436 */;
import _mod14446 from "module_14446" /* 14446 */;
import _mod14448 from "module_14448" /* 14448 */;
import _mod14450 from "module_14450" /* 14450 */;
import _mod14451 from "module_14451" /* 14451 */;

if (!_mod14416) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14418(arg0);
    const tmp4 = text(arg1);
    if (!_mod14448) {
      if (_mod14436(tmp3, tmp4)) {
        const tmpResult = _mod14450;
        return tmpResult(!_mod14446(_mod14451.f, tmp3, tmp4), tmp3[tmp4]);
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