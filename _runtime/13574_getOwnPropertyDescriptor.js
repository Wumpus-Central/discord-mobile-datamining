// _runtime/13574_getOwnPropertyDescriptor.js
import { text } from "13584_text.js";
import { 13577__ } from "metro/13577__.js";
import { 13607__ } from "metro/13607__.js";
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = 13577__(arg0);
    const tmp4 = text(arg1);
    if (!13607__) {
      if (tmp(13595)(tmp3, tmp4)) {
        let tmpResult = tmp(13609);
        tmpResult = tmp(13605);
        return tmpResult(!tmpResult(tmp(13610).f, tmp3, tmp4), tmp3[tmp4]);
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