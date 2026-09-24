// === Module 14674: ? ===

// Module 14674
import _mod14675 from "module_14675" /* 14675 */;
import _mod14677 from "module_14677" /* 14677 */;
import text from "text" /* 14684 */;
import _mod14695 from "module_14695" /* 14695 */;
import _mod14705 from "module_14705" /* 14705 */;
import _mod14707 from "module_14707" /* 14707 */;
import _mod14709 from "module_14709" /* 14709 */;
import _mod14710 from "module_14710" /* 14710 */;

if (!_mod14675) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14677(arg0);
    const tmp4 = text(arg1);
    if (!_mod14707) {
      if (_mod14695(tmp3, tmp4)) {
        const tmpResult = _mod14709;
        return tmpResult(!_mod14705(_mod14710.f, tmp3, tmp4), tmp3[tmp4]);
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