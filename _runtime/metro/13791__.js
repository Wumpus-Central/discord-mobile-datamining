// === Module 13791: ? ===

// Module 13791
import _mod13792 from "module_13792" /* 13792 */;
import _mod13794 from "module_13794" /* 13794 */;
import text from "text" /* 13801 */;
import _mod13812 from "module_13812" /* 13812 */;
import _mod13822 from "module_13822" /* 13822 */;
import _mod13824 from "module_13824" /* 13824 */;
import _mod13826 from "module_13826" /* 13826 */;
import _mod13827 from "module_13827" /* 13827 */;

if (!_mod13792) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13794(arg0);
    const tmp4 = text(arg1);
    if (!_mod13824) {
      if (_mod13812(tmp3, tmp4)) {
        const tmpResult = _mod13826;
        return tmpResult(!_mod13822(_mod13827.f, tmp3, tmp4), tmp3[tmp4]);
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