// === Module 14063: ? ===

// Module 14063
import _mod14064 from "module_14064" /* 14064 */;
import _mod14066 from "module_14066" /* 14066 */;
import _mod14073 from "module_14073" /* 14073 */;
import _mod14084 from "module_14084" /* 14084 */;
import _mod14094 from "module_14094" /* 14094 */;
import _mod14096 from "module_14096" /* 14096 */;
import _mod14098 from "module_14098" /* 14098 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 14099 */;

if (!_mod14064) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14066(arg0);
    const tmp4 = _mod14073(arg1);
    if (!_mod14096) {
      if (_mod14084(tmp3, tmp4)) {
        const tmpResult = _mod14098;
        const tmpResult2 = _mod14094;
        return tmpResult(!tmpResult2(propertyIsEnumerable.f, tmp3, tmp4), tmp3[tmp4]);
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