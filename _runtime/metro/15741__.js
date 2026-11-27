// === Module 15741: ? ===

// Module 15741
import _mod15742 from "module_15742" /* 15742 */;
import _mod15744 from "module_15744" /* 15744 */;
import text from "text" /* 15751 */;
import _mod15762 from "module_15762" /* 15762 */;
import _mod15772 from "module_15772" /* 15772 */;
import _mod15774 from "module_15774" /* 15774 */;
import _mod15776 from "module_15776" /* 15776 */;
import _mod15777 from "module_15777" /* 15777 */;

if (!_mod15742) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15744(arg0);
    const tmp4 = text(arg1);
    if (!_mod15774) {
      if (_mod15762(tmp3, tmp4)) {
        const tmpResult = _mod15776;
        return tmpResult(!_mod15772(_mod15777.f, tmp3, tmp4), tmp3[tmp4]);
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