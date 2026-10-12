// === Module 14553: ? ===

// Module 14553
import _mod14554 from "module_14554" /* 14554 */;
import _mod14556 from "module_14556" /* 14556 */;
import text from "text" /* 14563 */;
import _mod14574 from "module_14574" /* 14574 */;
import _mod14584 from "module_14584" /* 14584 */;
import _mod14586 from "module_14586" /* 14586 */;
import _mod14588 from "module_14588" /* 14588 */;
import _mod14589 from "module_14589" /* 14589 */;

if (!_mod14554) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14556(arg0);
    const tmp4 = text(arg1);
    if (!_mod14586) {
      if (_mod14574(tmp3, tmp4)) {
        const tmpResult = _mod14588;
        return tmpResult(!_mod14584(_mod14589.f, tmp3, tmp4), tmp3[tmp4]);
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