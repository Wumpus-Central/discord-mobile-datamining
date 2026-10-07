// discord_app/modules/activities/utils/hasFlag.tsx
import Constants from "../../../Constants.tsx";
import FlagUtils from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
