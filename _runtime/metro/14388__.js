// === Module 14388: ? ===

// Module 14388
import _mod14389 from "module_14389" /* 14389 */;
import _mod14391 from "module_14391" /* 14391 */;
import text from "text" /* 14398 */;
import _mod14409 from "module_14409" /* 14409 */;
import _mod14419 from "module_14419" /* 14419 */;
import _mod14421 from "module_14421" /* 14421 */;
import _mod14423 from "module_14423" /* 14423 */;
import _mod14424 from "module_14424" /* 14424 */;

if (!_mod14389) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14391(arg0);
    const tmp4 = text(arg1);
    if (!_mod14421) {
      if (_mod14409(tmp3, tmp4)) {
        const tmpResult = _mod14423;
        return tmpResult(!_mod14419(_mod14424.f, tmp3, tmp4), tmp3[tmp4]);
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