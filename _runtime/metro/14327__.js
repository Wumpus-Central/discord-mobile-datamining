// === Module 14327: ? ===

// Module 14327
import _mod14328 from "module_14328" /* 14328 */;
import _mod14330 from "module_14330" /* 14330 */;
import text from "text" /* 14337 */;
import _mod14348 from "module_14348" /* 14348 */;
import _mod14358 from "module_14358" /* 14358 */;
import _mod14360 from "module_14360" /* 14360 */;
import _mod14362 from "module_14362" /* 14362 */;
import _mod14363 from "module_14363" /* 14363 */;

if (!_mod14328) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14330(arg0);
    const tmp4 = text(arg1);
    if (!_mod14360) {
      if (_mod14348(tmp3, tmp4)) {
        const tmpResult = _mod14358;
        return tmpResult(!tmpResult(_mod14363.f, tmp3, tmp4), tmp3[tmp4]);
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