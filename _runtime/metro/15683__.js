// === Module 15683: ? ===

// Module 15683
import _mod15684 from "module_15684" /* 15684 */;
import _mod15686 from "module_15686" /* 15686 */;
import text from "text" /* 15693 */;
import _mod15704 from "module_15704" /* 15704 */;
import _mod15714 from "module_15714" /* 15714 */;
import _mod15716 from "module_15716" /* 15716 */;
import _mod15718 from "module_15718" /* 15718 */;
import _mod15719 from "module_15719" /* 15719 */;

if (!_mod15684) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod15686(arg0);
    const tmp4 = text(arg1);
    if (!_mod15716) {
      if (_mod15704(tmp3, tmp4)) {
        const tmpResult = _mod15718;
        return tmpResult(!_mod15714(_mod15719.f, tmp3, tmp4), tmp3[tmp4]);
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