// === Module 17215: getShouldFetchProgramRewards ===

// Module 17215 (getShouldFetchProgramRewards)
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 15918 */;
import shouldAggressivelyFetchNitroRewards from "shouldAggressivelyFetchNitroRewards" /* 17216 */;
import ProgramRewardsStore from "ProgramRewardsStore" /* 15915 */;

require = fn;
const DidNotFetchReason = fn(15915).DidNotFetchReason;
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