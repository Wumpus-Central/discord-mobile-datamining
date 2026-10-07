// discord_app/modules/go_live/utils/windowSourceMatches.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/utils/windowSourceMatches.tsx");

export default function windowSourceMatches(str, arg1) {
  if (null == arg1) {
    return false;
  } else {
    const tmp3 = _slicedToArray(":".split(":"), 2);
    return "window" === tmp3[0] && tmp3[1] === arg1;
  }
}
