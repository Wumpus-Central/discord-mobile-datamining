// === Module 14848: set ===

// Module 14848 (set)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import dispatcherDefault from "dispatcher" /* 4194 */;
import registerAssetDefault from "registerAsset" /* 7689 */;
import BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS from "BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS" /* 14834 */;
import set from "set" /* 2 */;

let closure_3 = BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS.BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS;
let set = new Set([260021]);
const result = set.fileFinishedImporting("modules/quests/native/BountiesModal/bountyError.tsx");

export const openBountyRewardClaimErrorToast = function openBountyRewardClaimErrorToast(closure_0) {
  let obj = dispatcherDefault;
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
      obj[2] = registerAssetDefault;
      obj[3] = closure_3;
      obj.open(obj);
    }
  }
  const intl = getSystemLocale.intl;
  message = intl.string(getSystemLocale.t.uLjCfn);
};