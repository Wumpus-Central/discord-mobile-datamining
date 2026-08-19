// === Module 14373: set ===

// Module 14373 (set)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import dispatcherDefault from "dispatcher" /* 4094 */;
import registerAssetDefault from "registerAsset" /* 8555 */;
import BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS from "BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS" /* 14374 */;

let closure_3 = BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS.BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS;
const set = new Set([260021]);
const result = obj132.fileFinishedImporting("modules/quests/native/BountiesModal/bountyError.tsx");

export const openBountyRewardClaimErrorToast = function openBountyRewardClaimErrorToast(closure_0) {
  let obj = dispatcherDefault;
  let code;
  if (_require != null) {
    code = _require.code;
  }
  if (null != code) {
    if (set.has(_require.code)) {
      let message;
      if (_require != null) {
        message = _require.message;
      }
      if (null != message) {
        message = _require.message;
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