// === Module 6827: waitForOnboardingCompletion ===

// Module 6827 (waitForOnboardingCompletion)
import closure_3 from "trackCommunicationDisabled" /* 1991 */;
import { GuildMemberFlags } from "GuildMemberFlags" /* 4012 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_onboarding/doGuildOnboardingHelpers.tsx");

export const waitForOnboardingCompletion = function waitForOnboardingCompletion(arg0) {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    const result = closure_1_3.addConditionalChangeListener(() => {
      const selfMember = closure_2_3.getSelfMember(callback);
      let num;
      if (selfMember != null) {
        num = selfMember.flags;
      }
      if (num == null) {
        num = 0;
      }
      const hasFlagResult = callback(closure_2_2[2]).hasFlag(num, closure_2_4.COMPLETED_ONBOARDING);
      let flag = !hasFlagResult;
      if (hasFlagResult) {
        closure_2_1(closure_2_2[3]).finishOnboarding(callback);
        callback();
        flag = false;
        const obj2 = closure_2_1(closure_2_2[3]);
      }
      return flag;
    });
  });
};