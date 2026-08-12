// _runtime/13639_getOwnPropertyDescriptor.js
import { text } from "13649_text.js";
import { 13642__ } from "metro/13642__.js";
import { 13672__ } from "metro/13672__.js";
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = 13642__(arg0);
    const tmp4 = text(arg1);
    if (!13672__) {
      if (tmp(13660)(tmp3, tmp4)) {
        let tmpResult = tmp(13674);
        tmpResult = tmp(13670);
        return tmpResult(!tmpResult(tmp(13675).f, tmp3, tmp4), tmp3[tmp4]);
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