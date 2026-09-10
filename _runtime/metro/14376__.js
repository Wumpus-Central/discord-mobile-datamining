// === Module 14376: ? ===

// Module 14376
import _mod14377 from "module_14377" /* 14377 */;
import _mod14379 from "module_14379" /* 14379 */;
import text from "text" /* 14386 */;
import _mod14397 from "module_14397" /* 14397 */;
import _mod14407 from "module_14407" /* 14407 */;
import _mod14409 from "module_14409" /* 14409 */;
import _mod14411 from "module_14411" /* 14411 */;
import _mod14412 from "module_14412" /* 14412 */;

if (!_mod14377) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14379(arg0);
    const tmp4 = text(arg1);
    if (!_mod14409) {
      if (_mod14397(tmp3, tmp4)) {
        const tmpResult = _mod14407;
        return tmpResult(!tmpResult(_mod14412.f, tmp3, tmp4), tmp3[tmp4]);
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