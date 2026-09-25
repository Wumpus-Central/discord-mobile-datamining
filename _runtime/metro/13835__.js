// === Module 13835: ? ===

// Module 13835
import _mod13836 from "module_13836" /* 13836 */;
import _mod13838 from "module_13838" /* 13838 */;
import text from "text" /* 13845 */;
import _mod13856 from "module_13856" /* 13856 */;
import _mod13866 from "module_13866" /* 13866 */;
import _mod13868 from "module_13868" /* 13868 */;
import _mod13870 from "module_13870" /* 13870 */;
import _mod13871 from "module_13871" /* 13871 */;

if (!_mod13836) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13838(arg0);
    const tmp4 = text(arg1);
    if (!_mod13868) {
      if (_mod13856(tmp3, tmp4)) {
        const tmpResult = _mod13870;
        return tmpResult(!_mod13866(_mod13871.f, tmp3, tmp4), tmp3[tmp4]);
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