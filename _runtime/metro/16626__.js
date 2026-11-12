// === Module 16626: ? ===

// Module 16626
import _mod16627 from "module_16627" /* 16627 */;
import _mod16629 from "module_16629" /* 16629 */;
import text from "text" /* 16636 */;
import _mod16647 from "module_16647" /* 16647 */;
import _mod16657 from "module_16657" /* 16657 */;
import _mod16659 from "module_16659" /* 16659 */;
import _mod16661 from "module_16661" /* 16661 */;
import _mod16662 from "module_16662" /* 16662 */;

if (!_mod16627) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16629(arg0);
    const tmp4 = text(arg1);
    if (!_mod16659) {
      if (_mod16647(tmp3, tmp4)) {
        const tmpResult = _mod16661;
        return tmpResult(!_mod16657(_mod16662.f, tmp3, tmp4), tmp3[tmp4]);
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