// === Module 15322: ? ===

// Module 15322
import _mod15323 from "module_15323" /* 15323 */;
import _mod15325 from "module_15325" /* 15325 */;
import text from "text" /* 15332 */;
import _mod15343 from "module_15343" /* 15343 */;
import _mod15353 from "module_15353" /* 15353 */;
import _mod15355 from "module_15355" /* 15355 */;
import _mod15357 from "module_15357" /* 15357 */;
import _mod15358 from "module_15358" /* 15358 */;

if (!_mod15323) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15325(arg0);
    const tmp4 = text(arg1);
    if (!_mod15355) {
      if (_mod15343(tmp3, tmp4)) {
        const tmpResult = _mod15357;
        return tmpResult(!_mod15353(_mod15358.f, tmp3, tmp4), tmp3[tmp4]);
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