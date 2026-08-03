// === Module 5185: waitForOnboardingCompletion ===

// Module 5185 (waitForOnboardingCompletion)
import trackCommunicationDisabled from "trackCommunicationDisabled";
import { GuildMemberFlags } from "GuildMemberFlags";

const require = arg1;
let result = require("hasFlag").fileFinishedImporting("modules/guild_onboarding/doGuildOnboardingHelpers.tsx");

export const waitForOnboardingCompletion = function waitForOnboardingCompletion(arg0) {
  let closure_0 = arg0;
  return new Promise((arg0) => {
    let closure_0 = arg0;
    const result = outer1_3.addConditionalChangeListener(() => {
      const selfMember = outer2_3.getSelfMember(callback);
      let num;
      if (selfMember != null) {
        num = selfMember.flags;
      }
      if (num == null) {
        num = 0;
      }
      const hasFlagResult = callback(outer2_2[2]).hasFlag(num, outer2_4.COMPLETED_ONBOARDING);
      let flag = !hasFlagResult;
      if (hasFlagResult) {
        outer2_1(outer2_2[3]).finishOnboarding(callback);
        callback();
        flag = false;
        const obj2 = outer2_1(outer2_2[3]);
      }
      return flag;
    });
  });
};