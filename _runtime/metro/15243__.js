// === Module 15243: ? ===

// Module 15243
import _mod15244 from "module_15244" /* 15244 */;
import _mod15246 from "module_15246" /* 15246 */;
import text from "text" /* 15253 */;
import _mod15264 from "module_15264" /* 15264 */;
import _mod15274 from "module_15274" /* 15274 */;
import _mod15276 from "module_15276" /* 15276 */;
import _mod15278 from "module_15278" /* 15278 */;
import _mod15279 from "module_15279" /* 15279 */;

if (!_mod15244) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15246(arg0);
    const tmp4 = text(arg1);
    if (!_mod15276) {
      if (_mod15264(tmp3, tmp4)) {
        const tmpResult = _mod15278;
        return tmpResult(!_mod15274(_mod15279.f, tmp3, tmp4), tmp3[tmp4]);
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