// discord_app/modules/quests/native/BountiesModal/bountyError.tsx
import { BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS as closure_3 } from "BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS";
import set from "dispatcher";

let set = new Set([260021]);
const result = set.fileFinishedImporting("modules/quests/native/BountiesModal/bountyError.tsx");

export const openBountyRewardClaimErrorToast = function openBountyRewardClaimErrorToast(closure_0) {
  let obj = importDefault(3894);
  let code;
  if (closure_0 != null) {
    code = closure_0.code;
  }
  if (null != code) {
    if (set.has(closure_0.code)) {
      let message;
      if (closure_0 != null) {
        message = closure_0.message;
      }
      if (null != message) {
        message = closure_0.message;
      }
      obj = { key: "QUESTS_BOUNTIES_REWARD_CLAIM_FAILED", content: null, icon: null, toastDurationMs: null };
      obj[1] = message;
      obj[2] = importDefault(9181);
      obj[3] = closure_3;
      obj.open(obj);
    }
  }
  const intl = require(1236) /* getSystemLocale */.intl;
  message = intl.string(require(1236) /* getSystemLocale */.t.uLjCfn);
};