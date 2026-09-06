// discord_app/modules/rewards/ProgramRewardsUtils.tsx
import _modDef3994 from "../../../_runtime/metro/03994__.js";
import PremiumUtils from "../../utils/PremiumUtils.tsx";
import XboxGamePassPerksExperiment from "../partner_perks/xbox/game_pass_perks/XboxGamePassPerksExperiment.tsx";
import ProgramRewardsTypes from "ProgramRewardsTypes.tsx";
import PremiumRewardsOrbsExperiment from "../premium/tenure_reward/experiments/PremiumRewardsOrbsExperiment.tsx";
import useHasXboxMonthlyOrbsPerk from "hooks/useHasXboxMonthlyOrbsPerk.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function canFetchNitroProgramReward() {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const NITRO = ProgramRewardsTypes.RewardProgram.NITRO;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === NITRO) {
    let tmpResult = PremiumRewardsOrbsExperiment;
    let flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (ProgramRewardsTypes.RewardProgram.XBOX === NITRO) {
      tmpResult = XboxGamePassPerksExperiment;
      flag = tmpResult.getIsXboxGamePassPerksEnabled(str);
    }
  }
  if (flag) {
    const currentUser = UserStore.getCurrentUser();
    flag = PremiumUtils.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
    const tmpResult1 = PremiumUtils;
  }
  return flag;
}
function canFetchXboxProgramReward() {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const XBOX = ProgramRewardsTypes.RewardProgram.XBOX;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === XBOX) {
    let tmpResult = PremiumRewardsOrbsExperiment;
    let flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (ProgramRewardsTypes.RewardProgram.XBOX === XBOX) {
      tmpResult = XboxGamePassPerksExperiment;
      flag = tmpResult.getIsXboxGamePassPerksEnabled(str);
    }
  }
  if (flag) {
    flag = useHasXboxMonthlyOrbsPerk.hasCrepeMonthlyOrbsPerk(UserStore.getCurrentUser());
    const tmpResult1 = useHasXboxMonthlyOrbsPerk;
  }
  return flag;
}
const PremiumTypes = fn(1373).PremiumTypes;
const dependencyMap = {
  [fn(13727).RewardProgram.NITRO]: canFetchNitroProgramReward,
  [fn(13727).RewardProgram.XBOX]: canFetchXboxProgramReward,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rewards/ProgramRewardsUtils.tsx");

export const isProgramRewardStale = function isProgramRewardStale(next_reward_date) {
  if (null == next_reward_date) {
    return true;
  } else {
    next_reward_date = next_reward_date.next_reward_date;
    let tmp = null != next_reward_date;
    if (tmp) {
      tmp = "" !== next_reward_date;
    }
    if (tmp) {
      const _Date = Date;
      const date = new Date(next_reward_date);
      tmp = _modDef3994(date);
    }
    return tmp;
  }
};
export const isEligibleForProgramReward = function isEligibleForProgramReward(arg0) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
    let tmpResult = PremiumRewardsOrbsExperiment;
    return tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (ProgramRewardsTypes.RewardProgram.XBOX === arg0) {
    tmpResult = XboxGamePassPerksExperiment;
    return tmpResult.getIsXboxGamePassPerksEnabled(str);
  } else {
    return false;
  }
};
export const useIsEligibleForProgramReward = function useIsEligibleForProgramReward(arg0) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const obj = PremiumRewardsOrbsExperiment;
  const isXboxGamePassPerksEnabled = XboxGamePassPerksExperiment.useIsXboxGamePassPerksEnabled(str);
  if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
    return obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (ProgramRewardsTypes.RewardProgram.XBOX === arg0) {
    return isXboxGamePassPerksEnabled;
  } else {
    return false;
  }
};
export { canFetchNitroProgramReward };
export { canFetchXboxProgramReward };
export const canFetchAnyProgramReward = function canFetchAnyProgramReward() {
  let str = ProgramRewardsStore;
  if (ProgramRewardsStore === undefined) {
    str = "ProgramRewardsUtils";
  }
  const values = Object.values(ProgramRewardsTypes.RewardProgram);
  for (const item10015 of values) {
    if (typeof item10015 === "number") {
      if (dependencyMap[tmp2](str)) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    continue;
  }
  return false;
};
export const hasNecessaryPremiumSubscriptionStatus = function hasNecessaryPremiumSubscriptionStatus(currentUser) {
  if (currentUser == null) {
    currentUser = UserStore.getCurrentUser();
  }
  return PremiumUtils.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
};
