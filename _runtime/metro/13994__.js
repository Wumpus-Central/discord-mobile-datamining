// === Module 13994: ? ===

// Module 13994
import _mod13995 from "module_13995" /* 13995 */;
import _mod13997 from "module_13997" /* 13997 */;
import text from "text" /* 14004 */;
import _mod14015 from "module_14015" /* 14015 */;
import _mod14025 from "module_14025" /* 14025 */;
import _mod14027 from "module_14027" /* 14027 */;
import _mod14029 from "module_14029" /* 14029 */;
import _mod14030 from "module_14030" /* 14030 */;

if (!_mod13995) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13997(arg0);
    const tmp4 = text(arg1);
    if (!_mod14027) {
      if (_mod14015(tmp3, tmp4)) {
        const tmpResult = _mod14029;
        return tmpResult(!_mod14025(_mod14030.f, tmp3, tmp4), tmp3[tmp4]);
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