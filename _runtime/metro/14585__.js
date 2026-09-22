// === Module 14585: ? ===

// Module 14585
import _mod14586 from "module_14586" /* 14586 */;
import _mod14588 from "module_14588" /* 14588 */;
import text from "text" /* 14595 */;
import _mod14606 from "module_14606" /* 14606 */;
import _mod14616 from "module_14616" /* 14616 */;
import _mod14618 from "module_14618" /* 14618 */;
import _mod14620 from "module_14620" /* 14620 */;
import _mod14621 from "module_14621" /* 14621 */;

if (!_mod14586) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14588(arg0);
    const tmp4 = text(arg1);
    if (!_mod14618) {
      if (_mod14606(tmp3, tmp4)) {
        const tmpResult = _mod14620;
        return tmpResult(!_mod14616(_mod14621.f, tmp3, tmp4), tmp3[tmp4]);
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