// === Module 15547: ? ===

// Module 15547
import _mod15548 from "module_15548" /* 15548 */;
import _mod15550 from "module_15550" /* 15550 */;
import text from "text" /* 15557 */;
import _mod15568 from "module_15568" /* 15568 */;
import _mod15578 from "module_15578" /* 15578 */;
import _mod15580 from "module_15580" /* 15580 */;
import _mod15582 from "module_15582" /* 15582 */;
import _mod15583 from "module_15583" /* 15583 */;

if (!_mod15548) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15550(arg0);
    const tmp4 = text(arg1);
    if (!_mod15580) {
      if (_mod15568(tmp3, tmp4)) {
        const tmpResult = _mod15582;
        return tmpResult(!_mod15578(_mod15583.f, tmp3, tmp4), tmp3[tmp4]);
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