// === Module 14352: ? ===

// Module 14352
import _mod14353 from "module_14353" /* 14353 */;
import _mod14355 from "module_14355" /* 14355 */;
import text from "text" /* 14362 */;
import _mod14373 from "module_14373" /* 14373 */;
import _mod14383 from "module_14383" /* 14383 */;
import _mod14385 from "module_14385" /* 14385 */;
import _mod14387 from "module_14387" /* 14387 */;
import _mod14388 from "module_14388" /* 14388 */;

if (!_mod14353) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14355(arg0);
    const tmp4 = text(arg1);
    if (!_mod14385) {
      if (_mod14373(tmp3, tmp4)) {
        const tmpResult = _mod14383;
        return tmpResult(!tmpResult(_mod14388.f, tmp3, tmp4), tmp3[tmp4]);
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