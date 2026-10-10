// === Module 14530: ? ===

// Module 14530
import _mod14531 from "module_14531" /* 14531 */;
import _mod14533 from "module_14533" /* 14533 */;
import text from "text" /* 14540 */;
import _mod14551 from "module_14551" /* 14551 */;
import _mod14561 from "module_14561" /* 14561 */;
import _mod14563 from "module_14563" /* 14563 */;
import _mod14565 from "module_14565" /* 14565 */;
import _mod14566 from "module_14566" /* 14566 */;

if (!_mod14531) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14533(arg0);
    const tmp4 = text(arg1);
    if (!_mod14563) {
      if (_mod14551(tmp3, tmp4)) {
        const tmpResult = _mod14565;
        return tmpResult(!_mod14561(_mod14566.f, tmp3, tmp4), tmp3[tmp4]);
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