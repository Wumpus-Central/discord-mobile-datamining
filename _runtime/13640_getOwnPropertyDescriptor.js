// _runtime/13640_getOwnPropertyDescriptor.js
import { text } from "13650_text.js";
import { 13643__ } from "metro/13643__.js";
import { 13673__ } from "metro/13673__.js";
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = 13643__(arg0);
    const tmp4 = text(arg1);
    if (!13673__) {
      if (tmp(13661)(tmp3, tmp4)) {
        let tmpResult = tmp(13675);
        tmpResult = tmp(13671);
        return tmpResult(!tmpResult(tmp(13676).f, tmp3, tmp4), tmp3[tmp4]);
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