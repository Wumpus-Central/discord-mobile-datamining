// === Module 15453: ? ===

// Module 15453
import _mod15454 from "module_15454" /* 15454 */;
import _mod15456 from "module_15456" /* 15456 */;
import text from "text" /* 15463 */;
import _mod15474 from "module_15474" /* 15474 */;
import _mod15484 from "module_15484" /* 15484 */;
import _mod15486 from "module_15486" /* 15486 */;
import _mod15488 from "module_15488" /* 15488 */;
import _mod15489 from "module_15489" /* 15489 */;

if (!_mod15454) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15456(arg0);
    const tmp4 = text(arg1);
    if (!_mod15486) {
      if (_mod15474(tmp3, tmp4)) {
        const tmpResult = _mod15488;
        return tmpResult(!_mod15484(_mod15489.f, tmp3, tmp4), tmp3[tmp4]);
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