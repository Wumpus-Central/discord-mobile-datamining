// _runtime/13582_getOwnPropertyDescriptor.js
import { text } from "13592_text.js";
import { 13585__ } from "metro/13585__.js";
import { 13615__ } from "metro/13615__.js";
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = 13585__(arg0);
    const tmp4 = text(arg1);
    if (!13615__) {
      if (tmp(13603)(tmp3, tmp4)) {
        let tmpResult = tmp(13617);
        tmpResult = tmp(13613);
        return tmpResult(!tmpResult(tmp(13618).f, tmp3, tmp4), tmp3[tmp4]);
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