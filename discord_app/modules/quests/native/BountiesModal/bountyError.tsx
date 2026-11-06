// === Module 17198: bountyError ===

// Module 17198 (bountyError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5867 */;
import BountiesModalConstants from "BountiesModalConstants" /* 17184 */;
import BountyRewardClaimErrorUtils from "BountyRewardClaimErrorUtils" /* 17199 */;
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