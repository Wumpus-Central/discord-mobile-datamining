// === Module 15208: ? ===

// Module 15208
import _mod15209 from "module_15209" /* 15209 */;
import _mod15211 from "module_15211" /* 15211 */;
import text from "text" /* 15218 */;
import _mod15229 from "module_15229" /* 15229 */;
import _mod15239 from "module_15239" /* 15239 */;
import _mod15241 from "module_15241" /* 15241 */;
import _mod15243 from "module_15243" /* 15243 */;
import _mod15244 from "module_15244" /* 15244 */;

if (!_mod15209) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15211(arg0);
    const tmp4 = text(arg1);
    if (!_mod15241) {
      if (_mod15229(tmp3, tmp4)) {
        const tmpResult = _mod15243;
        return tmpResult(!_mod15239(_mod15244.f, tmp3, tmp4), tmp3[tmp4]);
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