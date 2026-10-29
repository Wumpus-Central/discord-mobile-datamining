// discord_app/modules/quests/utils/BountyRewardClaimErrorUtils.tsx
import util from "../../../intl/index.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const set = new Set([260021]);
const result = size.fileFinishedImporting("modules/quests/utils/BountyRewardClaimErrorUtils.tsx");

export function resolveBountyRewardClaimErrorMessage(code) {
  code = undefined;
  if (code != null) {
    code = code.code;
  }
  if (null != code) {
    if (set.has(code.code)) {
      let message1;
      if (code != null) {
        message1 = code.message;
      }
      if (null != message1) {
        let message = code.message;
      }
      return message;
    }
  }
  const intl = util.intl;
  message = intl.string(util.t.uLjCfn);
}
