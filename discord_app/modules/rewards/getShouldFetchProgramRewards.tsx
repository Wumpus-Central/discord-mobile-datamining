// === Module 17143: getShouldFetchProgramRewards ===

// Module 17143 (getShouldFetchProgramRewards)
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 15848 */;
import shouldAggressivelyFetchNitroRewards from "shouldAggressivelyFetchNitroRewards" /* 17144 */;
import ProgramRewardsStore from "ProgramRewardsStore" /* 15845 */;

require = fn;
const DidNotFetchReason = fn(15845).DidNotFetchReason;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rewards/getShouldFetchProgramRewards.tsx");

export function shouldFetchProgramRewards() {
  const shouldFetchResult = ProgramRewardsStore.shouldFetch();
  if (shouldFetchResult.shouldFetch) {
    return true;
  } else if (shouldFetchResult.reason !== DidNotFetchReason.CACHE_SHOULD_NOT_FETCH) {
    return false;
  } else {
    const rewardForProgram = ProgramRewardsStore.getRewardForProgram(ProgramRewardsTypes.RewardProgram.NITRO);
    return shouldAggressivelyFetchNitroRewards.shouldAggressivelyFetchNitroRewards(rewardForProgram);
  }
}