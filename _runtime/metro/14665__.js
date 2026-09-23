// === Module 14665: ? ===

// Module 14665
import _mod14666 from "module_14666" /* 14666 */;
import _mod14668 from "module_14668" /* 14668 */;
import text from "text" /* 14675 */;
import _mod14686 from "module_14686" /* 14686 */;
import _mod14696 from "module_14696" /* 14696 */;
import _mod14698 from "module_14698" /* 14698 */;
import _mod14700 from "module_14700" /* 14700 */;
import _mod14701 from "module_14701" /* 14701 */;

if (!_mod14666) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14668(arg0);
    const tmp4 = text(arg1);
    if (!_mod14698) {
      if (_mod14686(tmp3, tmp4)) {
        const tmpResult = _mod14700;
        return tmpResult(!_mod14696(_mod14701.f, tmp3, tmp4), tmp3[tmp4]);
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