// discord_app/modules/rewards/getShouldFetchProgramRewards.tsx
import ProgramRewardsTypes from "ProgramRewardsTypes.tsx";
import shouldAggressivelyFetchNitroRewards from "shouldAggressivelyFetchNitroRewards.tsx";
import ProgramRewardsStore from "ProgramRewardsStore.tsx";

require = fn;
const DidNotFetchReason = fn(15572).DidNotFetchReason;
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
