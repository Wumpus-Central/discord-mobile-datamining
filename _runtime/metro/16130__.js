// === Module 16130: ? ===

// Module 16130
import _mod16131 from "module_16131" /* 16131 */;
import _mod16133 from "module_16133" /* 16133 */;
import text from "text" /* 16140 */;
import _mod16151 from "module_16151" /* 16151 */;
import _mod16161 from "module_16161" /* 16161 */;
import _mod16163 from "module_16163" /* 16163 */;
import _mod16165 from "module_16165" /* 16165 */;
import _mod16166 from "module_16166" /* 16166 */;

if (!_mod16131) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16133(arg0);
    const tmp4 = text(arg1);
    if (!_mod16163) {
      if (_mod16151(tmp3, tmp4)) {
        const tmpResult = _mod16165;
        return tmpResult(!_mod16161(_mod16166.f, tmp3, tmp4), tmp3[tmp4]);
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