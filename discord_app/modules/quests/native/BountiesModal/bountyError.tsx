// === Module 15278: bountyError ===

// Module 15278 (bountyError)
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import BountiesModalConstants from "BountiesModalConstants" /* 15264 */;
import size from "module_2" /* 2 */;

const duration = BountiesModalConstants.BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS;
const set = new Set([260021]);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/bountyError.tsx");

export const openBountyRewardClaimErrorToast = function openBountyRewardClaimErrorToast(code) {
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
      const obj2 = { text: message, variant: "critical", duration };
      obj.open("QUESTS_BOUNTIES_REWARD_CLAIM_FAILED", obj2);
    }
  }
  const intl = util.intl;
  message = intl.string(util.t.uLjCfn);
  obj = ToastActionCreatorsDefault;
};