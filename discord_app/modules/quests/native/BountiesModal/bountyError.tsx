// discord_app/modules/quests/native/BountiesModal/bountyError.tsx
import util from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import _modDef5597 from "../../../../../_runtime/metro/05597__.js";
import BountiesModalConstants from "BountiesModalConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
      obj = { key: "QUESTS_BOUNTIES_REWARD_CLAIM_FAILED", content: message, icon: _modDef5597, toastDurationMs };
      obj.open(obj);
    }
  }
  const intl = util.intl;
  message = intl.string(util.t.uLjCfn);
};
