// === Module 16927: BountyRewardClaimErrorUtils ===

// Module 16927 (BountyRewardClaimErrorUtils)
import util from "util" /* 1113 */;
import size from "module_2" /* 2 */;

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