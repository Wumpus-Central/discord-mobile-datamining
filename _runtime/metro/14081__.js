// === Module 14081: ? ===

// Module 14081
import _mod14082 from "module_14082" /* 14082 */;
import _mod14084 from "module_14084" /* 14084 */;
import _mod14091 from "module_14091" /* 14091 */;
import _mod14102 from "module_14102" /* 14102 */;
import _mod14112 from "module_14112" /* 14112 */;
import _mod14114 from "module_14114" /* 14114 */;
import _mod14116 from "module_14116" /* 14116 */;
import propertyIsEnumerable from "propertyIsEnumerable" /* 14117 */;

if (!_mod14082) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14084(arg0);
    const tmp4 = _mod14091(arg1);
    if (!_mod14114) {
      if (_mod14102(tmp3, tmp4)) {
        const tmpResult = _mod14116;
        const tmpResult2 = _mod14112;
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