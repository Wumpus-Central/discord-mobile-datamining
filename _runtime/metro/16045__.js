// === Module 16045: ? ===

// Module 16045
import _mod16046 from "module_16046" /* 16046 */;
import _mod16048 from "module_16048" /* 16048 */;
import text from "text" /* 16055 */;
import _mod16066 from "module_16066" /* 16066 */;
import _mod16076 from "module_16076" /* 16076 */;
import _mod16078 from "module_16078" /* 16078 */;
import _mod16080 from "module_16080" /* 16080 */;
import _mod16081 from "module_16081" /* 16081 */;

if (!_mod16046) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16048(arg0);
    const tmp4 = text(arg1);
    if (!_mod16078) {
      if (_mod16066(tmp3, tmp4)) {
        const tmpResult = _mod16080;
        return tmpResult(!_mod16076(_mod16081.f, tmp3, tmp4), tmp3[tmp4]);
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