// _runtime/13631_getOwnPropertyDescriptor.js
import { text } from "13641_text.js";
import { 13634__ } from "metro/13634__.js";
import { 13664__ } from "metro/13664__.js";
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = 13634__(arg0);
    const tmp4 = text(arg1);
    if (!13664__) {
      if (tmp(13652)(tmp3, tmp4)) {
        let tmpResult = tmp(13666);
        tmpResult = tmp(13662);
        return tmpResult(!tmpResult(tmp(13667).f, tmp3, tmp4), tmp3[tmp4]);
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