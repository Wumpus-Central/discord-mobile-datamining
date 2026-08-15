// _runtime/13675_getOwnPropertyDescriptor.js
import { text } from "13685_text.js";
import { 13678__ } from "metro/13678__.js";
import { 13708__ } from "metro/13708__.js";
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = 13678__(arg0);
    const tmp4 = text(arg1);
    if (!13708__) {
      if (tmp(13696)(tmp3, tmp4)) {
        let tmpResult = tmp(13710);
        tmpResult = tmp(13706);
        return tmpResult(!tmpResult(tmp(13711).f, tmp3, tmp4), tmp3[tmp4]);
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