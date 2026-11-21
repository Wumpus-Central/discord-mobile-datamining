// === Module 15540: ? ===

// Module 15540
import _mod15541 from "module_15541" /* 15541 */;
import _mod15543 from "module_15543" /* 15543 */;
import text from "text" /* 15550 */;
import _mod15561 from "module_15561" /* 15561 */;
import _mod15571 from "module_15571" /* 15571 */;
import _mod15573 from "module_15573" /* 15573 */;
import _mod15575 from "module_15575" /* 15575 */;
import _mod15576 from "module_15576" /* 15576 */;

if (!_mod15541) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15543(arg0);
    const tmp4 = text(arg1);
    if (!_mod15573) {
      if (_mod15561(tmp3, tmp4)) {
        const tmpResult = _mod15575;
        return tmpResult(!_mod15571(_mod15576.f, tmp3, tmp4), tmp3[tmp4]);
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