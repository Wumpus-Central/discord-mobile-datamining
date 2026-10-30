// === Module 16085: ? ===

// Module 16085
import _mod16086 from "module_16086" /* 16086 */;
import _mod16088 from "module_16088" /* 16088 */;
import text from "text" /* 16095 */;
import _mod16106 from "module_16106" /* 16106 */;
import _mod16116 from "module_16116" /* 16116 */;
import _mod16118 from "module_16118" /* 16118 */;
import _mod16120 from "module_16120" /* 16120 */;
import _mod16121 from "module_16121" /* 16121 */;

if (!_mod16086) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16088(arg0);
    const tmp4 = text(arg1);
    if (!_mod16118) {
      if (_mod16106(tmp3, tmp4)) {
        const tmpResult = _mod16120;
        return tmpResult(!_mod16116(_mod16121.f, tmp3, tmp4), tmp3[tmp4]);
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