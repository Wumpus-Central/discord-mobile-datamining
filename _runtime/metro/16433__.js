// === Module 16433: ? ===

// Module 16433
import _mod16434 from "module_16434" /* 16434 */;
import _mod16436 from "module_16436" /* 16436 */;
import text from "text" /* 16443 */;
import _mod16454 from "module_16454" /* 16454 */;
import _mod16464 from "module_16464" /* 16464 */;
import _mod16466 from "module_16466" /* 16466 */;
import _mod16468 from "module_16468" /* 16468 */;
import _mod16469 from "module_16469" /* 16469 */;

if (!_mod16434) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16436(arg0);
    const tmp4 = text(arg1);
    if (!_mod16466) {
      if (_mod16454(tmp3, tmp4)) {
        const tmpResult = _mod16468;
        return tmpResult(!_mod16464(_mod16469.f, tmp3, tmp4), tmp3[tmp4]);
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