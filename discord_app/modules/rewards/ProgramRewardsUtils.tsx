// discord_app/modules/rewards/ProgramRewardsUtils.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { PremiumTypes } from "GuildFeatures";
import { isPast } from "../../../_runtime/03784_isPast.js";
import { getPremiumPlanItem } from "../../utils/PremiumUtils.tsx";
import { apexExperiment } from "../croissant/crepe/CrepeExperiment.tsx";
import { PremiumRewardsOrbsTreatment } from "../premium/tenure_reward/experiments/PremiumRewardsOrbsExperiment.tsx";
import { RewardProgram } from "ProgramRewardsTypes.tsx";

const require = arg1;
function canFetchNitroProgramReward(canUseMonthlyOrbs) {
  let str = canUseMonthlyOrbs;
  if (canUseMonthlyOrbs === undefined) {
    str = "ProgramRewardsUtils";
  }
  const NITRO = RewardProgram.RewardProgram.NITRO;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (RewardProgram.RewardProgram.NITRO === NITRO) {
    let tmpResult = tmp(13056);
    let flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (tmp(13053).RewardProgram.XBOX === NITRO) {
      tmpResult = tmp(7063);
      flag = tmpResult.getIsCrepeEnabled(str);
    }
  }
  if (flag) {
    const currentUser = authStore.getCurrentUser();
    flag = tmp(4007).isPremiumExactly(currentUser, PremiumTypes.TIER_2);
    const tmpResult1 = tmp(4007);
  }
  return flag;
}
function canFetchXboxProgramReward(canUseMonthlyOrbs) {
  let str = canUseMonthlyOrbs;
  if (canUseMonthlyOrbs === undefined) {
    str = "ProgramRewardsUtils";
  }
  const XBOX = RewardProgram.RewardProgram.XBOX;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (RewardProgram.RewardProgram.NITRO === XBOX) {
    let tmpResult = tmp(13056);
    let flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (tmp(13053).RewardProgram.XBOX === XBOX) {
      tmpResult = tmp(7063);
      flag = tmpResult.getIsCrepeEnabled(str);
    }
  }
  if (flag) {
    flag = tmp(13057).hasCrepeMonthlyOrbsPerk(authStore.getCurrentUser());
    const tmpResult1 = tmp(13057);
  }
  return flag;
}
let closure_5 = { [arg1(13053).RewardProgram.NITRO]: canFetchNitroProgramReward, [arg1(13053).RewardProgram.XBOX]: canFetchXboxProgramReward };
const result = require("isPast").fileFinishedImporting("modules/rewards/ProgramRewardsUtils.tsx");

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
      tmp = isPast(date);
      const tmp4 = isPast;
    }
    return tmp;
  }
};
export const isEligibleForProgramReward = function isEligibleForProgramReward(arg0, canUseMonthlyOrbs) {
  let str = canUseMonthlyOrbs;
  if (canUseMonthlyOrbs === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (RewardProgram.RewardProgram.NITRO === arg0) {
    let tmpResult = tmp(13056);
    return tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (tmp(13053).RewardProgram.XBOX === arg0) {
    tmpResult = tmp(7063);
    return tmpResult.getIsCrepeEnabled(str);
  } else {
    return false;
  }
};
export const useIsEligibleForProgramReward = function useIsEligibleForProgramReward(arg0, location) {
  let str = location;
  if (location === undefined) {
    str = "ProgramRewardsUtils";
  }
  const obj = PremiumRewardsOrbsTreatment;
  const tmp = require;
  const isCrepeEnabled = apexExperiment.useIsCrepeEnabled(str);
  if (RewardProgram.RewardProgram.NITRO === arg0) {
    return obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (tmp(13053).RewardProgram.XBOX === arg0) {
    return isCrepeEnabled;
  } else {
    return false;
  }
  const obj2 = apexExperiment;
};
export { canFetchNitroProgramReward };
export { canFetchXboxProgramReward };
export const canFetchAnyProgramReward = function canFetchAnyProgramReward(ProgramRewardsStore) {
  let str = ProgramRewardsStore;
  if (ProgramRewardsStore === undefined) {
    str = "ProgramRewardsUtils";
  }
  const values = Object.values(RewardProgram.RewardProgram);
  for (const item10015 of values) {
    if (typeof item10015 === "number") {
      let tmp4 = dependencyMap;
      let tmp5 = item10015;
      if (dependencyMap[tmp2](str)) {
        let tmp3 = obj;
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
    currentUser = authStore.getCurrentUser();
  }
  return getPremiumPlanItem.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
};