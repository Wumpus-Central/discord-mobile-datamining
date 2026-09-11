// === Module 15075: bountyError ===

// Module 15075 (bountyError)
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4305 */;
import _modDef5648 from "module_5648" /* 5648 */;
import BountiesModalConstants from "BountiesModalConstants" /* 15061 */;
import size from "module_2" /* 2 */;

const toastDurationMs = BountiesModalConstants.BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS;
const set = new Set([260021]);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/bountyError.tsx");

export const openBountyRewardClaimErrorToast = function openBountyRewardClaimErrorToast(code) {
  let obj = ToastActionCreatorsDefault;
  code = undefined;
  if (code != null) {
    code = code.code;
  }
  if (null != code) {
    if (set.has(code.code)) {
      let message;
      if (code != null) {
        message = code.message;
      }
      if (null != message) {
        message = code.message;
      }
      obj = { key: "QUESTS_BOUNTIES_REWARD_CLAIM_FAILED", content: message, icon: _modDef5648, toastDurationMs };
      obj.open(obj);
    }
  }
  const intl = util.intl;
  message = intl.string(util.t.uLjCfn);
};