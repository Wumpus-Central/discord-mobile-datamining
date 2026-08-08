// _runtime/13572_getOwnPropertyDescriptor.js
import { text } from "13582_text.js";
import { 13575__ } from "metro/13575__.js";
import { 13605__ } from "metro/13605__.js";
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = 13575__(arg0);
    const tmp4 = text(arg1);
    if (!13605__) {
      if (tmp(13593)(tmp3, tmp4)) {
        let tmpResult = tmp(13607);
        tmpResult = tmp(13603);
        return tmpResult(!tmpResult(tmp(13608).f, tmp3, tmp4), tmp3[tmp4]);
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