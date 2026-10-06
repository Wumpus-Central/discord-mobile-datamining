// discord_app/modules/quests/native/BountiesModal/bountyError.tsx
import intl2 from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import AssetRegistryDefault from "../../../../../_runtime/04813_AssetRegistry.js";
import BountiesModalConstants from "BountiesModalConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const toastDurationMs = BountiesModalConstants.BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS;
const set = new Set([260021]);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/bountyError.tsx");

export const openBountyRewardClaimErrorToast = function openBountyRewardClaimErrorToast(code) {
  code = undefined;
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  if (code != null) {
    code = code.code;
  }
  if (null != code) {
    if (set.has(code.code)) {
      let message;
      let message1;
      if (code != null) {
        message1 = code.message;
      }
      if (null != message1) {
        message = code.message;
      }
      const obj = {
        key: "QUESTS_BOUNTIES_REWARD_CLAIM_FAILED",
        content: message,
        icon: AssetRegistryDefault,
        toastDurationMs,
      };
      open(obj);
    }
  }
  const intl = intl2.intl;
  message = intl.string(intl2.t.uLjCfn);
};
