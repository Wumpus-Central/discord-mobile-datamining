// _runtime/13488_getOwnPropertyDescriptor.js
import { text } from "13498_text.js";
import { 13491__ } from "metro/13491__.js";
import { 13521__ } from "metro/13521__.js";
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = 13491__(arg0);
    const tmp4 = text(arg1);
    if (!13521__) {
      if (tmp(13509)(tmp3, tmp4)) {
        let tmpResult = tmp(13523);
        tmpResult = tmp(13519);
        return tmpResult(!tmpResult(tmp(13524).f, tmp3, tmp4), tmp3[tmp4]);
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