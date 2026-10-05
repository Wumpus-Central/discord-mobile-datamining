// discord_app/modules/rewards/ProgramRewardsUtils.tsx
import _modDef4302 from "../../../_runtime/metro/04302__.js";
import PremiumUtils from "../../utils/PremiumUtils.tsx";
import ProgramRewardsTypes from "ProgramRewardsTypes.tsx";
import PremiumRewardsOrbsExperiment from "../premium/tenure_reward/experiments/PremiumRewardsOrbsExperiment.tsx";
import useHasXboxMonthlyOrbsPerk from "hooks/useHasXboxMonthlyOrbsPerk.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const PremiumTypes = fn(1379).PremiumTypes;
const ReactCompilerGating = fn(558);
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
    let flag = PremiumRewardsOrbsExperiment.getPremiumRewardsOrbsExperiment(str).isInTreatment;
    const tmpResult = PremiumRewardsOrbsExperiment;
  } else {
    flag = false;
    if (ProgramRewardsTypes.RewardProgram.XBOX === NITRO) {
      flag = true;
    }
  }
  if (flag) {
    const currentUser = UserStore.getCurrentUser();
    flag = PremiumUtils.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
    const tmpResult2 = PremiumUtils;
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
    let flag = PremiumRewardsOrbsExperiment.getPremiumRewardsOrbsExperiment(str).isInTreatment;
    const tmpResult = PremiumRewardsOrbsExperiment;
  } else {
    flag = false;
    if (ProgramRewardsTypes.RewardProgram.XBOX === XBOX) {
      flag = true;
    }
  }
  if (flag) {
    flag = useHasXboxMonthlyOrbsPerk.hasCrepeMonthlyOrbsPerk(UserStore.getCurrentUser());
    const tmpResult2 = useHasXboxMonthlyOrbsPerk;
  }
  return flag;
}
const obj2 = {};
function isEligibleForProgramReward(arg0) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
    return PremiumRewardsOrbsExperiment.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else if (ProgramRewardsTypes.RewardProgram.XBOX === arg0) {
    return true;
  } else {
    return false;
  }
}
function hasNecessaryPremiumSubscriptionStatus(stateFromStores) {
  let currentUser = stateFromStores;
  if (stateFromStores == null) {
    currentUser = UserStore.getCurrentUser();
  }
  return PremiumUtils.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
}
obj2[fn(13538).RewardProgram.NITRO] = canFetchNitroProgramReward;
obj2[fn(13538).RewardProgram.XBOX] = canFetchXboxProgramReward;
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
      tmp = _modDef4302(date);
    }
    return tmp;
  }
};
export { isEligibleForProgramReward };
export const useIsEligibleForProgramReward = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let str = "ProgramRewardsUtils";
      if (undefined !== arg1) {
        str = arg1;
      }
      if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
        return obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
      } else if (ProgramRewardsTypes.RewardProgram.XBOX === arg0) {
        return true;
      } else {
        return false;
      }
      obj = PremiumRewardsOrbsExperiment;
    }
  : (arg0) => {
      let str = arg1;
      if (arg1 === undefined) {
        str = "ProgramRewardsUtils";
      }
      if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
        return obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
      } else if (ProgramRewardsTypes.RewardProgram.XBOX === arg0) {
        return true;
      } else {
        return false;
      }
      obj = PremiumRewardsOrbsExperiment;
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
      if (obj2[tmp2](str)) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    continue;
  }
  return false;
};
export { hasNecessaryPremiumSubscriptionStatus };
