// === Module 15734: ? ===

// Module 15734
import _mod15735 from "module_15735" /* 15735 */;
import _mod15737 from "module_15737" /* 15737 */;
import text from "text" /* 15744 */;
import _mod15755 from "module_15755" /* 15755 */;
import _mod15765 from "module_15765" /* 15765 */;
import _mod15767 from "module_15767" /* 15767 */;
import _mod15769 from "module_15769" /* 15769 */;
import _mod15770 from "module_15770" /* 15770 */;

if (!_mod15735) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15737(arg0);
    const tmp4 = text(arg1);
    if (!_mod15767) {
      if (_mod15755(tmp3, tmp4)) {
        const tmpResult = _mod15769;
        return tmpResult(!_mod15765(_mod15770.f, tmp3, tmp4), tmp3[tmp4]);
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