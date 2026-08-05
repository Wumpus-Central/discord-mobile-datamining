// discord_app/modules/activities/utils/hasFlag.tsx
import { ActivityFlags } from "ME";

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
      hasFlagResult = require("../../../../discord_common/js/shared/utils/FlagUtils.tsx") /* hasFlag */.hasFlag(num, arg1);
      const obj = require("../../../../discord_common/js/shared/utils/FlagUtils.tsx") /* hasFlag */;
    }
    tmp = hasFlagResult;
  }
  return tmp;
};