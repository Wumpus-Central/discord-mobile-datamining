// === Module 14387: ? ===

// Module 14387
import _mod14388 from "module_14388" /* 14388 */;
import _mod14390 from "module_14390" /* 14390 */;
import text from "text" /* 14397 */;
import _mod14408 from "module_14408" /* 14408 */;
import _mod14418 from "module_14418" /* 14418 */;
import _mod14420 from "module_14420" /* 14420 */;
import _mod14422 from "module_14422" /* 14422 */;
import _mod14423 from "module_14423" /* 14423 */;

if (!_mod14388) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14390(arg0);
    const tmp4 = text(arg1);
    if (!_mod14420) {
      if (_mod14408(tmp3, tmp4)) {
        const tmpResult = _mod14418;
        return tmpResult(!tmpResult(_mod14423.f, tmp3, tmp4), tmp3[tmp4]);
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