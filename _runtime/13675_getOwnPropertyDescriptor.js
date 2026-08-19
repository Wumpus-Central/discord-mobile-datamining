// === Module 13675: getOwnPropertyDescriptor ===

// Module 13675 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor2 from "getOwnPropertyDescriptor" /* 13676 */;
import _mod13678 from "module_13678" /* 13678 */;
import text from "text" /* 13685 */;
import call from "call" /* 13696 */;
import call2 from "call" /* 13706 */;
import _mod13708 from "module_13708" /* 13708 */;
import _mod13710 from "module_13710" /* 13710 */;
import getOwnPropertyDescriptor3 from "getOwnPropertyDescriptor" /* 13711 */;

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13678(arg0);
    const tmp4 = text(arg1);
    if (!_mod13708) {
      if (call(tmp3, tmp4)) {
        const tmpResult = call2;
        return tmpResult(!tmpResult(getOwnPropertyDescriptor3.f, tmp3, tmp4), tmp3[tmp4]);
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