// === Module 16388: ? ===

// Module 16388
import _mod16389 from "module_16389" /* 16389 */;
import _mod16391 from "module_16391" /* 16391 */;
import text from "text" /* 16398 */;
import _mod16409 from "module_16409" /* 16409 */;
import _mod16419 from "module_16419" /* 16419 */;
import _mod16421 from "module_16421" /* 16421 */;
import _mod16423 from "module_16423" /* 16423 */;
import _mod16424 from "module_16424" /* 16424 */;

if (!_mod16389) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16391(arg0);
    const tmp4 = text(arg1);
    if (!_mod16421) {
      if (_mod16409(tmp3, tmp4)) {
        const tmpResult = _mod16423;
        return tmpResult(!_mod16419(_mod16424.f, tmp3, tmp4), tmp3[tmp4]);
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