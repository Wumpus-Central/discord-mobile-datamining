// === Module 15326: ? ===

// Module 15326
import _mod15327 from "module_15327" /* 15327 */;
import _mod15329 from "module_15329" /* 15329 */;
import text from "text" /* 15336 */;
import _mod15347 from "module_15347" /* 15347 */;
import _mod15357 from "module_15357" /* 15357 */;
import _mod15359 from "module_15359" /* 15359 */;
import _mod15361 from "module_15361" /* 15361 */;
import _mod15362 from "module_15362" /* 15362 */;

if (!_mod15327) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15329(arg0);
    const tmp4 = text(arg1);
    if (!_mod15359) {
      if (_mod15347(tmp3, tmp4)) {
        const tmpResult = _mod15361;
        return tmpResult(!_mod15357(_mod15362.f, tmp3, tmp4), tmp3[tmp4]);
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