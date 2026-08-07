// _runtime/13502_getOwnPropertyDescriptor.js
import { text } from "13512_text.js";
import { 13505__ } from "metro/13505__.js";
import { 13535__ } from "metro/13535__.js";
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = 13505__(arg0);
    const tmp4 = text(arg1);
    if (!13535__) {
      if (tmp(13523)(tmp3, tmp4)) {
        let tmpResult = tmp(13537);
        tmpResult = tmp(13533);
        return tmpResult(!tmpResult(tmp(13538).f, tmp3, tmp4), tmp3[tmp4]);
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