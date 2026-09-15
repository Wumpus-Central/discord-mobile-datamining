// === Module 15118: bountyError ===

// Module 15118 (bountyError)
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4338 */;
import _modDef5682 from "module_5682" /* 5682 */;
import BountiesModalConstants from "BountiesModalConstants" /* 15106 */;
import size from "module_2" /* 2 */;

const toastDurationMs = BountiesModalConstants.BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS;
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
      const obj2 = { key: "QUESTS_BOUNTIES_REWARD_CLAIM_FAILED", content: message, icon: _modDef5682, toastDurationMs };
      obj.open(obj2);
    }
  }
  const intl = util.intl;
  message = intl.string(util.t.uLjCfn);
  obj = ToastActionCreatorsDefault;
};