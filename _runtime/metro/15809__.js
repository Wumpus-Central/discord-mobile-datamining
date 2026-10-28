// === Module 15809: ? ===

// Module 15809
import _mod15810 from "module_15810" /* 15810 */;
import _mod15812 from "module_15812" /* 15812 */;
import text from "text" /* 15819 */;
import _mod15830 from "module_15830" /* 15830 */;
import _mod15840 from "module_15840" /* 15840 */;
import _mod15842 from "module_15842" /* 15842 */;
import _mod15844 from "module_15844" /* 15844 */;
import _mod15845 from "module_15845" /* 15845 */;

if (!_mod15810) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15812(arg0);
    const tmp4 = text(arg1);
    if (!_mod15842) {
      if (_mod15830(tmp3, tmp4)) {
        const tmpResult = _mod15844;
        return tmpResult(!_mod15840(_mod15845.f, tmp3, tmp4), tmp3[tmp4]);
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