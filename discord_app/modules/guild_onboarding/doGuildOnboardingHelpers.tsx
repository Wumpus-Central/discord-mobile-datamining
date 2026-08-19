// === Module 6790: waitForOnboardingCompletion ===

// Module 6790 (waitForOnboardingCompletion)
import _updateOnboardingResponsesDefault from "_updateOnboardingResponses" /* 6791 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import { GuildMemberFlags } from "GuildMemberFlags" /* 4009 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/guild_onboarding/doGuildOnboardingHelpers.tsx");

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
      const hasFlagResult = callback(dependencyMap[2]).hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
      let flag = !hasFlagResult;
      if (hasFlagResult) {
        _updateOnboardingResponsesDefault.finishOnboarding(callback);
        callback();
        flag = false;
      }
      return flag;
    });
  });
};