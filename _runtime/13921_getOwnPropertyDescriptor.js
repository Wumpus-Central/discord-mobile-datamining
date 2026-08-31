// === Module 13921: getOwnPropertyDescriptor ===

// Module 13921 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor2 from "getOwnPropertyDescriptor" /* 13922 */;
import _mod13924 from "module_13924" /* 13924 */;
import text from "text" /* 13931 */;
import _mod13954 from "module_13954" /* 13954 */;

if (!getOwnPropertyDescriptor2) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod13924(arg0);
    const tmp4 = text(arg1);
    if (!_mod13954) {
      if (tmp(13942)(tmp3, tmp4)) {
        let tmpResult = tmp(13956);
        tmpResult = tmp(13952);
        return tmpResult(!tmpResult(tmp(13957).f, tmp3, tmp4), tmp3[tmp4]);
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