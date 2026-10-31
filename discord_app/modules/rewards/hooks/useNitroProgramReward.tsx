// === Module 16894: useNitroProgramReward ===

// Module 16894 (useNitroProgramReward)
import initialize from "initialize" /* 504 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 15614 */;
import getShouldFetchProgramRewards from "getShouldFetchProgramRewards" /* 16895 */;
import nitroProgramRewardInvariants from "nitroProgramRewardInvariants" /* 16897 */;
import ProgramRewardsStore from "ProgramRewardsStore" /* 15611 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rewards/hooks/useNitroProgramReward.tsx");

export function useNitroProgramReward() {
  const items = [ProgramRewardsStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ isReady: ProgramRewardsStore.isReady(), programReward: ProgramRewardsStore.getRewardForProgram(ProgramRewardsTypes.RewardProgram.NITRO), totalDays: ProgramRewardsStore.getTotalDaysInDuration(ProgramRewardsTypes.RewardProgram.NITRO) }));
  ({ programReward, totalDays, isReady } = stateFromStoresObject);
  const obj3 = { isEligible: true, isReady, passesGeneralUIInvariant: null, passesProgressBarInvariant: null, programReward: null, shouldFetch: null, totalDays: null };
  const result = getShouldFetchProgramRewards.shouldFetchProgramRewards();
  obj3.passesGeneralUIInvariant = nitroProgramRewardInvariants.passesNitroGeneralUIInvariant(programReward);
  obj3.passesProgressBarInvariant = nitroProgramRewardInvariants.passesNitroProgressBarInvariant(programReward, totalDays);
  obj3.programReward = programReward;
  obj3.shouldFetch = result;
  obj3.totalDays = totalDays;
  return obj3;
}