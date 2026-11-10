// === Module 16470: ? ===

// Module 16470
import _mod16471 from "module_16471" /* 16471 */;
import _mod16473 from "module_16473" /* 16473 */;
import text from "text" /* 16480 */;
import _mod16491 from "module_16491" /* 16491 */;
import _mod16501 from "module_16501" /* 16501 */;
import _mod16503 from "module_16503" /* 16503 */;
import _mod16505 from "module_16505" /* 16505 */;
import _mod16506 from "module_16506" /* 16506 */;

if (!_mod16471) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16473(arg0);
    const tmp4 = text(arg1);
    if (!_mod16503) {
      if (_mod16491(tmp3, tmp4)) {
        const tmpResult = _mod16505;
        return tmpResult(!_mod16501(_mod16506.f, tmp3, tmp4), tmp3[tmp4]);
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