// _runtime/13643_getOwnPropertyDescriptor.js
import { text } from "13653_text.js";
import { 13646__ } from "metro/13646__.js";
import { 13676__ } from "metro/13676__.js";
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = 13646__(arg0);
    const tmp4 = text(arg1);
    if (!13676__) {
      if (tmp(13664)(tmp3, tmp4)) {
        let tmpResult = tmp(13678);
        tmpResult = tmp(13674);
        return tmpResult(!tmpResult(tmp(13679).f, tmp3, tmp4), tmp3[tmp4]);
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