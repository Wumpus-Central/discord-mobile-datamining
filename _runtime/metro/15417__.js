// === Module 15417: ? ===

// Module 15417
import _mod15418 from "module_15418" /* 15418 */;
import _mod15420 from "module_15420" /* 15420 */;
import text from "text" /* 15427 */;
import _mod15438 from "module_15438" /* 15438 */;
import _mod15448 from "module_15448" /* 15448 */;
import _mod15450 from "module_15450" /* 15450 */;
import _mod15452 from "module_15452" /* 15452 */;
import _mod15453 from "module_15453" /* 15453 */;

if (!_mod15418) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15420(arg0);
    const tmp4 = text(arg1);
    if (!_mod15450) {
      if (_mod15438(tmp3, tmp4)) {
        const tmpResult = _mod15452;
        return tmpResult(!_mod15448(_mod15453.f, tmp3, tmp4), tmp3[tmp4]);
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