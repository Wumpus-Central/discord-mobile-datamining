// === Module 14573: ? ===

// Module 14573
import _mod14574 from "module_14574" /* 14574 */;
import _mod14576 from "module_14576" /* 14576 */;
import text from "text" /* 14583 */;
import _mod14594 from "module_14594" /* 14594 */;
import _mod14604 from "module_14604" /* 14604 */;
import _mod14606 from "module_14606" /* 14606 */;
import _mod14608 from "module_14608" /* 14608 */;
import _mod14609 from "module_14609" /* 14609 */;

if (!_mod14574) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14576(arg0);
    const tmp4 = text(arg1);
    if (!_mod14606) {
      if (_mod14594(tmp3, tmp4)) {
        const tmpResult = _mod14608;
        return tmpResult(!_mod14604(_mod14609.f, tmp3, tmp4), tmp3[tmp4]);
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