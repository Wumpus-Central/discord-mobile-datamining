// === Module 16443: ? ===

// Module 16443
import _mod16444 from "module_16444" /* 16444 */;
import _mod16446 from "module_16446" /* 16446 */;
import text from "text" /* 16453 */;
import _mod16464 from "module_16464" /* 16464 */;
import _mod16474 from "module_16474" /* 16474 */;
import _mod16476 from "module_16476" /* 16476 */;
import _mod16478 from "module_16478" /* 16478 */;
import _mod16479 from "module_16479" /* 16479 */;

if (!_mod16444) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16446(arg0);
    const tmp4 = text(arg1);
    if (!_mod16476) {
      if (_mod16464(tmp3, tmp4)) {
        const tmpResult = _mod16478;
        return tmpResult(!_mod16474(_mod16479.f, tmp3, tmp4), tmp3[tmp4]);
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