// === Module 13986: ? ===

// Module 13986
import _mod13987 from "module_13987" /* 13987 */;
import _mod13989 from "module_13989" /* 13989 */;
import text from "text" /* 13996 */;
import _mod14007 from "module_14007" /* 14007 */;
import _mod14017 from "module_14017" /* 14017 */;
import _mod14019 from "module_14019" /* 14019 */;
import _mod14021 from "module_14021" /* 14021 */;
import _mod14022 from "module_14022" /* 14022 */;

if (!_mod13987) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13989(arg0);
    const tmp4 = text(arg1);
    if (!_mod14019) {
      if (_mod14007(tmp3, tmp4)) {
        const tmpResult = _mod14021;
        return tmpResult(!_mod14017(_mod14022.f, tmp3, tmp4), tmp3[tmp4]);
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