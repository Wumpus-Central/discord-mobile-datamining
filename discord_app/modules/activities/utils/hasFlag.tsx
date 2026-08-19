// === Module 7260: hasFlag ===

// Module 7260 (hasFlag)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import hasFlag from "hasFlag" /* 1403 */;

const ActivityFlags = ME.ActivityFlags;
const result = obj132.fileFinishedImporting("modules/activities/utils/hasFlag.tsx");

export default function hasFlag(flags) {
  let tmp = arg1 !== ActivityFlags.INSTANCE;
  if (tmp) {
    let hasFlagResult = null != flags && null != flags.flags;
    if (hasFlagResult) {
      let num = flags.flags;
      if (num == null) {
        num = 0;
      }
      hasFlagResult = hasFlag.hasFlag(num, arg1);
    }
    tmp = hasFlagResult;
  }
  return tmp;
};