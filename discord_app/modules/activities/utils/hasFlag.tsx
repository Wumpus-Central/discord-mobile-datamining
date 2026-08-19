// discord_app/modules/activities/utils/hasFlag.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";
import hasFlag from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";

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