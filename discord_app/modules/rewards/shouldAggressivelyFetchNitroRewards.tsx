// === Module 16896: shouldAggressivelyFetchNitroRewards ===

// Module 16896 (shouldAggressivelyFetchNitroRewards)
import PremiumUtils from "PremiumUtils" /* 2047 */;
import ProgramRewardsUtils from "ProgramRewardsUtils" /* 15612 */;
import ProgramRewardsTypes from "ProgramRewardsTypes" /* 15614 */;
import UserProfileStore from "UserProfileStore" /* 7772 */;
import UserStore from "UserStore" /* 1383 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rewards/shouldAggressivelyFetchNitroRewards.tsx");

export function shouldAggressivelyFetchNitroRewards(rewardForProgram) {
  if (null != rewardForProgram) {
    if (rewardForProgram.reward_program !== ProgramRewardsTypes.RewardProgram.NITRO) {
      return false;
    }
  }
  if (obj.canFetchNitroProgramReward()) {
    let prop;
    if (rewardForProgram != null) {
      prop = rewardForProgram.program_current_state;
    }
    if (prop === ProgramRewardsTypes.ProgramCurrentState.PAYMENT_PROCESSING) {
      return true;
    } else {
      const currentUser = UserStore.getCurrentUser();
      let tmp8 = null;
      if (null != currentUser) {
        const userProfile = UserProfileStore.getUserProfile(currentUser.id);
        let premiumSince;
        if (userProfile != null) {
          premiumSince = userProfile.premiumSince;
        }
        tmp8 = premiumSince;
      }
      const tmp3Result = PremiumUtils;
      return PremiumUtils.getDaysSincePremium(tmp8) < 1 && null == rewardForProgram;
    }
  } else {
    return false;
  }
  obj = ProgramRewardsUtils;
}