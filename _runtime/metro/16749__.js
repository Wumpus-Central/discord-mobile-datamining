// === Module 16749: ? ===

// Module 16749
import _mod16750 from "module_16750" /* 16750 */;
import _mod16752 from "module_16752" /* 16752 */;
import text from "text" /* 16759 */;
import _mod16770 from "module_16770" /* 16770 */;
import _mod16780 from "module_16780" /* 16780 */;
import _mod16782 from "module_16782" /* 16782 */;
import _mod16784 from "module_16784" /* 16784 */;
import _mod16785 from "module_16785" /* 16785 */;

if (!_mod16750) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16752(arg0);
    const tmp4 = text(arg1);
    if (!_mod16782) {
      if (_mod16770(tmp3, tmp4)) {
        const tmpResult = _mod16784;
        return tmpResult(!_mod16780(_mod16785.f, tmp3, tmp4), tmp3[tmp4]);
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