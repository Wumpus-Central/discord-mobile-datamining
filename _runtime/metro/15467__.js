// === Module 15467: ? ===

// Module 15467
import _mod15468 from "module_15468" /* 15468 */;
import _mod15470 from "module_15470" /* 15470 */;
import text from "text" /* 15477 */;
import _mod15488 from "module_15488" /* 15488 */;
import _mod15498 from "module_15498" /* 15498 */;
import _mod15500 from "module_15500" /* 15500 */;
import _mod15502 from "module_15502" /* 15502 */;
import _mod15503 from "module_15503" /* 15503 */;

if (!_mod15468) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15470(arg0);
    const tmp4 = text(arg1);
    if (!_mod15500) {
      if (_mod15488(tmp3, tmp4)) {
        const tmpResult = _mod15502;
        return tmpResult(!_mod15498(_mod15503.f, tmp3, tmp4), tmp3[tmp4]);
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