// === Module 13790: ? ===

// Module 13790
import _mod13791 from "module_13791" /* 13791 */;
import _mod13793 from "module_13793" /* 13793 */;
import text from "text" /* 13800 */;
import _mod13811 from "module_13811" /* 13811 */;
import _mod13821 from "module_13821" /* 13821 */;
import _mod13823 from "module_13823" /* 13823 */;
import _mod13825 from "module_13825" /* 13825 */;
import _mod13826 from "module_13826" /* 13826 */;

if (!_mod13791) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13793(arg0);
    const tmp4 = text(arg1);
    if (!_mod13823) {
      if (_mod13811(tmp3, tmp4)) {
        const tmpResult = _mod13825;
        return tmpResult(!_mod13821(_mod13826.f, tmp3, tmp4), tmp3[tmp4]);
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