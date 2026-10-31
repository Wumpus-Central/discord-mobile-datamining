// discord_app/modules/rewards/invariants/nitroProgramRewardInvariants.tsx
import differenceInCalendarDaysDefault from "../../../../_runtime/04456_differenceInCalendarDays.js";
import ProgramRewardsTypes from "../ProgramRewardsTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/rewards/invariants/nitroProgramRewardInvariants.tsx");

export function passesNitroGeneralUIInvariant(programReward) {
  if (null == programReward) {
    return false;
  } else {
    ({ next_reward_date, program_current_state } = programReward);
    if (null == program_current_state) {
      return false;
    } else {
      if (null != next_reward_date) {
        if ("" !== next_reward_date) {
          const _Date = Date;
          const date = new Date(next_reward_date);
          const time = date.getTime();
          const _Number = Number;
          if (!Number.isNaN(time)) {
            const _Date2 = Date;
          }
          return false;
        }
        return true;
      }
      const items = [
        ProgramRewardsTypes.ProgramCurrentState.PAYMENT_PROCESSING,
        ProgramRewardsTypes.ProgramCurrentState.PAYMENT_ERROR,
      ];
      if (!items.includes(program_current_state)) {
        return false;
      }
    }
  }
}
export function passesNitroProgressBarInvariant(programReward, totalDays) {
  if (null != programReward) {
    if (null != totalDays) {
      const next_reward_date = programReward.next_reward_date;
      if (null != next_reward_date) {
        if ("" !== next_reward_date) {
          const _Date4 = Date;
          const date = new Date(next_reward_date);
          const time = date.getTime();
          const _Number = Number;
          let isNaNResult = Number.isNaN(time);
          if (!isNaNResult) {
            const _Date = Date;
            isNaNResult = time <= Date.now();
          }
          let tmp2 = !isNaNResult;
          if (!isNaNResult) {
            const _Date2 = Date;
            const date1 = new Date(next_reward_date);
            const _Date3 = Date;
            const date2 = new Date();
            tmp2 = differenceInCalendarDaysDefault(date1, date2) <= totalDays;
          }
          return tmp2;
        }
      }
      return false;
    }
  }
  return false;
}
