// === Module 14061: ? ===

// Module 14061
import _mod14062 from "module_14062" /* 14062 */;
import _mod14064 from "module_14064" /* 14064 */;
import text from "text" /* 14071 */;
import _mod14082 from "module_14082" /* 14082 */;
import _mod14092 from "module_14092" /* 14092 */;
import _mod14094 from "module_14094" /* 14094 */;
import _mod14096 from "module_14096" /* 14096 */;
import _mod14097 from "module_14097" /* 14097 */;

if (!_mod14062) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14064(arg0);
    const tmp4 = text(arg1);
    if (!_mod14094) {
      if (_mod14082(tmp3, tmp4)) {
        const tmpResult = _mod14096;
        return tmpResult(!_mod14092(_mod14097.f, tmp3, tmp4), tmp3[tmp4]);
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