// === Module 8061: hasFlag ===

// Module 8061 (hasFlag)
import Constants from "Constants" /* 1071 */;
import FlagUtils from "FlagUtils" /* 1404 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/hasFlag.tsx");

export default function hasFlag(flags, IS_ANIMATED) {
  let tmp = IS_ANIMATED !== ActivityFlags.INSTANCE;
  if (tmp) {
    let hasFlagResult = null != flags && null != flags.flags;
    if (hasFlagResult) {
      let num = flags.flags;
      if (num == null) {
        num = 0;
      }
      hasFlagResult = FlagUtils.hasFlag(num, IS_ANIMATED);
    }
    tmp = hasFlagResult;
  }
  return tmp;
};