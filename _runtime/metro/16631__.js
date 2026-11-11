// === Module 16631: ? ===

// Module 16631
import _mod16632 from "module_16632" /* 16632 */;
import _mod16634 from "module_16634" /* 16634 */;
import text from "text" /* 16641 */;
import _mod16652 from "module_16652" /* 16652 */;
import _mod16662 from "module_16662" /* 16662 */;
import _mod16664 from "module_16664" /* 16664 */;
import _mod16666 from "module_16666" /* 16666 */;
import _mod16667 from "module_16667" /* 16667 */;

if (!_mod16632) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16634(arg0);
    const tmp4 = text(arg1);
    if (!_mod16664) {
      if (_mod16652(tmp3, tmp4)) {
        const tmpResult = _mod16666;
        return tmpResult(!_mod16662(_mod16667.f, tmp3, tmp4), tmp3[tmp4]);
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