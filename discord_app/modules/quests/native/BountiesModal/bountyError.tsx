// === Module 17597: bountyError ===

// Module 17597 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6009 */;
import BountiesModalConstants from "BountiesModalConstants" /* 17583 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 17598 */;
import size from "module_2" /* 2 */;

const duration = BountiesModalConstants.BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS;
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/bountyError.tsx");

export function openBountyRewardClaimErrorToast(code) {
  const obj2 = { text: null, variant: "critical", duration: null };
  const obj = ToastActionCreatorsDefault;
  obj2.text = BountyRewardClaimErrorUtils.resolveBountyRewardClaimErrorMessage(code);
  obj2.duration = duration;
  obj.open("QUESTS_BOUNTIES_REWARD_CLAIM_FAILED", obj2);
}