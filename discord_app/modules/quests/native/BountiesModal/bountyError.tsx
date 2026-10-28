// === Module 16578: bountyError ===

// Module 16578 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5699 */;
import BountiesModalConstants from "BountiesModalConstants" /* 16564 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 16579 */;
import size from "module_2" /* 2 */;

const duration = BountiesModalConstants.BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS;
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/bountyError.tsx");

export const openBountyRewardClaimErrorToast = function openBountyRewardClaimErrorToast(code) {
  const obj2 = { text: null, variant: "critical", duration: null };
  const obj = ToastActionCreatorsDefault;
  obj2.text = BountyRewardClaimErrorUtils.resolveBountyRewardClaimErrorMessage(code);
  obj2.duration = duration;
  obj.open("QUESTS_BOUNTIES_REWARD_CLAIM_FAILED", obj2);
};