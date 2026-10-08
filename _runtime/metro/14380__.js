// === Module 14380: ? ===

// Module 14380
import _mod14381 from "module_14381" /* 14381 */;
import _mod14383 from "module_14383" /* 14383 */;
import text from "text" /* 14390 */;
import _mod14401 from "module_14401" /* 14401 */;
import _mod14411 from "module_14411" /* 14411 */;
import _mod14413 from "module_14413" /* 14413 */;
import _mod14415 from "module_14415" /* 14415 */;
import _mod14416 from "module_14416" /* 14416 */;

if (!_mod14381) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14383(arg0);
    const tmp4 = text(arg1);
    if (!_mod14413) {
      if (_mod14401(tmp3, tmp4)) {
        const tmpResult = _mod14415;
        return tmpResult(!_mod14411(_mod14416.f, tmp3, tmp4), tmp3[tmp4]);
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