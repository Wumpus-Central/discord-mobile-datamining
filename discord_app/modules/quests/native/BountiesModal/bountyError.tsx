// discord_app/modules/quests/native/BountiesModal/bountyError.tsx
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import BountiesModalConstants from "BountiesModalConstants.tsx";
import BountyRewardClaimErrorUtils from "../../utils/BountyRewardClaimErrorUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const duration = BountiesModalConstants.BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS;
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/bountyError.tsx");

export const openBountyRewardClaimErrorToast = function openBountyRewardClaimErrorToast(code) {
  const obj2 = { text: null, variant: "critical", duration: null };
  const obj = ToastActionCreatorsDefault;
  obj2.text = BountyRewardClaimErrorUtils.resolveBountyRewardClaimErrorMessage(code);
  obj2.duration = duration;
  obj.open("QUESTS_BOUNTIES_REWARD_CLAIM_FAILED", obj2);
};
