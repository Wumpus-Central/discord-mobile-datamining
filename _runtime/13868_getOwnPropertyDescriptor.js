// === Module 13868: getOwnPropertyDescriptor ===

// Module 13868 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor2 from "getOwnPropertyDescriptor" /* 13869 */;
import _mod13871 from "module_13871" /* 13871 */;
import text from "text" /* 13878 */;
import _mod13901 from "module_13901" /* 13901 */;

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13871(arg0);
    const tmp4 = text(arg1);
    if (!_mod13901) {
      if (tmp(13889)(tmp3, tmp4)) {
        let tmpResult = tmp(13903);
        tmpResult = tmp(13899);
        return tmpResult(!tmpResult(tmp(13904).f, tmp3, tmp4), tmp3[tmp4]);
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