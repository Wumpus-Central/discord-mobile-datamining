// === Module 16126: ? ===

// Module 16126
import _mod16127 from "module_16127" /* 16127 */;
import _mod16129 from "module_16129" /* 16129 */;
import text from "text" /* 16136 */;
import _mod16147 from "module_16147" /* 16147 */;
import _mod16157 from "module_16157" /* 16157 */;
import _mod16159 from "module_16159" /* 16159 */;
import _mod16161 from "module_16161" /* 16161 */;
import _mod16162 from "module_16162" /* 16162 */;

if (!_mod16127) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod16129(arg0);
    const tmp4 = text(arg1);
    if (!_mod16159) {
      if (_mod16147(tmp3, tmp4)) {
        const tmpResult = _mod16161;
        return tmpResult(!_mod16157(_mod16162.f, tmp3, tmp4), tmp3[tmp4]);
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