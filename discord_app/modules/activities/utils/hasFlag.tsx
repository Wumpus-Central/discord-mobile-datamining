// discord_app/modules/activities/utils/hasFlag.tsx
import { ActivityFlags } from "ME";
import { hasFlag } from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";

const result = require("set").fileFinishedImporting("modules/activities/utils/hasFlag.tsx");

export default function hasFlag(flags) {
  let tmp = arg1 !== ActivityFlags.INSTANCE;
  if (tmp) {
    let hasFlagResult = null != flags && null != flags.flags;
    if (hasFlagResult) {
      let num = flags.flags;
      if (num == null) {
        num = 0;
      }
      hasFlagResult = hasFlag /* hasFlag */.hasFlag(num, arg1);
      const obj = hasFlag /* hasFlag */;
    }
    tmp = hasFlagResult;
  }
  return tmp;
};