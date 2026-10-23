// === Module 15522: ? ===

// Module 15522
import _mod15523 from "module_15523" /* 15523 */;
import _mod15525 from "module_15525" /* 15525 */;
import text from "text" /* 15532 */;
import _mod15543 from "module_15543" /* 15543 */;
import _mod15553 from "module_15553" /* 15553 */;
import _mod15555 from "module_15555" /* 15555 */;
import _mod15557 from "module_15557" /* 15557 */;
import _mod15558 from "module_15558" /* 15558 */;

if (!_mod15523) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15525(arg0);
    const tmp4 = text(arg1);
    if (!_mod15555) {
      if (_mod15543(tmp3, tmp4)) {
        const tmpResult = _mod15557;
        return tmpResult(!_mod15553(_mod15558.f, tmp3, tmp4), tmp3[tmp4]);
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