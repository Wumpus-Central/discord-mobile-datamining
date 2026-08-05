// _runtime/13451_getOwnPropertyDescriptor.js
import { text } from "13461_text.js";
import { 13454__ } from "metro/13454__.js";
import { 13484__ } from "metro/13484__.js";
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = 13454__(arg0);
    const tmp4 = text(arg1);
    if (!13484__) {
      if (tmp(13472)(tmp3, tmp4)) {
        let tmpResult = tmp(13486);
        tmpResult = tmp(13482);
        return tmpResult(!tmpResult(tmp(13487).f, tmp3, tmp4), tmp3[tmp4]);
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