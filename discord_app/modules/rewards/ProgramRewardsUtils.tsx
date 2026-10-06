// discord_app/modules/rewards/ProgramRewardsUtils.tsx
import PremiumConstants from "../premium/PremiumConstants.tsx";
import isPastDefault from "../../../_runtime/04308_isPast.js";
import PremiumUtils from "../../utils/PremiumUtils.tsx";
import ProgramRewardsTypes from "ProgramRewardsTypes.tsx";
import PremiumRewardsOrbsExperiment from "../premium/tenure_reward/experiments/PremiumRewardsOrbsExperiment.tsx";
import useHasXboxMonthlyOrbsPerk from "hooks/useHasXboxMonthlyOrbsPerk.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const PremiumTypes = PremiumConstants.PremiumTypes;
function canFetchNitroProgramReward() {
  let flag;
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const NITRO = ProgramRewardsTypes.RewardProgram.NITRO;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === NITRO) {
    const tmpResult = PremiumRewardsOrbsExperiment;
    flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (ProgramRewardsTypes.RewardProgram.XBOX === NITRO) {
      flag = true;
    }
  }
  if (flag) {
    const currentUser = UserStore.getCurrentUser();
    const tmpResult2 = PremiumUtils;
    flag = tmpResult2.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
  }
  return flag;
}
function canFetchXboxProgramReward() {
  let flag;
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  const XBOX = ProgramRewardsTypes.RewardProgram.XBOX;
  if (str === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === XBOX) {
    const tmpResult = PremiumRewardsOrbsExperiment;
    flag = tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
  } else {
    flag = false;
    if (ProgramRewardsTypes.RewardProgram.XBOX === XBOX) {
      flag = true;
    }
  }
  if (flag) {
    const tmpResult2 = useHasXboxMonthlyOrbsPerk;
    flag = tmpResult2.hasCrepeMonthlyOrbsPerk(UserStore.getCurrentUser());
  }
  return flag;
}
let obj = {};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let str = "ProgramRewardsUtils";
      if (undefined !== arg1) {
        str = arg1;
      }
      obj = PremiumRewardsOrbsExperiment;
      const isInTreatment = obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
      if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
        return isInTreatment;
      } else if (ProgramRewardsTypes.RewardProgram.XBOX === arg0) {
        return true;
      } else {
        return false;
      }
    }
  : (arg0) => {
      let str = arg1;
      if (arg1 === undefined) {
        str = "ProgramRewardsUtils";
      }
      obj = PremiumRewardsOrbsExperiment;
      const isInTreatment = obj.usePremiumRewardsOrbsExperiment(str).isInTreatment;
      if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
        return isInTreatment;
      } else if (ProgramRewardsTypes.RewardProgram.XBOX === arg0) {
        return true;
      } else {
        return false;
      }
    };
function isEligibleForProgramReward(arg0) {
  let str = ProgramRewardsUtils;
  if (ProgramRewardsUtils === undefined) {
    str = "ProgramRewardsUtils";
  }
  if (ProgramRewardsTypes.RewardProgram.NITRO === arg0) {
    const tmpResult = PremiumRewardsOrbsExperiment;
    return tmpResult.getPremiumRewardsOrbsExperiment(str).isInTreatment;
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
  obj = PremiumUtils;
  return obj.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
}
obj[ProgramRewardsTypes.RewardProgram.NITRO] = canFetchNitroProgramReward;
obj[ProgramRewardsTypes.RewardProgram.XBOX] = canFetchXboxProgramReward;
const result = size.fileFinishedImporting("modules/rewards/ProgramRewardsUtils.tsx");

export const isProgramRewardStale = function isProgramRewardStale(next_reward_date) {
  if (null == next_reward_date) {
    return true;
  } else {
    next_reward_date = next_reward_date.next_reward_date;
    let tmp = null != next_reward_date && "" !== next_reward_date;
    if (tmp) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const tmp4 = isPastDefault;
      const date = new Date(next_reward_date);
      tmp = tmp4(date);
    }
    return tmp;
  }
};
export { isEligibleForProgramReward };
export const useIsEligibleForProgramReward = tmp2;
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
      if (obj[tmp2](str)) {
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
