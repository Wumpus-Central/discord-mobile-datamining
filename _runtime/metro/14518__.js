// === Module 14518: ? ===

// Module 14518
import _mod14519 from "module_14519" /* 14519 */;
import _mod14521 from "module_14521" /* 14521 */;
import text from "text" /* 14528 */;
import _mod14539 from "module_14539" /* 14539 */;
import _mod14549 from "module_14549" /* 14549 */;
import _mod14551 from "module_14551" /* 14551 */;
import _mod14553 from "module_14553" /* 14553 */;
import _mod14554 from "module_14554" /* 14554 */;

if (!_mod14519) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14521(arg0);
    const tmp4 = text(arg1);
    if (!_mod14551) {
      if (_mod14539(tmp3, tmp4)) {
        const tmpResult = _mod14553;
        return tmpResult(!_mod14549(_mod14554.f, tmp3, tmp4), tmp3[tmp4]);
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