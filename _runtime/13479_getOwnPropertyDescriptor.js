import { text } from "13489_text.js";
import { 13482__ } from "metro/13482__.js";
import { 13512__ } from "metro/13512__.js";
// _runtime/13479_getOwnPropertyDescriptor.js
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = 13482__(arg0);
    const tmp4 = text /* text */(arg1);
    if (!13512__) {
      if (tmp(13500)(tmp3, tmp4)) {
        let tmpResult = tmp(13514);
        tmpResult = tmp(13510);
        return tmpResult(!tmpResult(tmp(13515).f, tmp3, tmp4), tmp3[tmp4]);
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