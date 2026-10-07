// === Module 6606: doGuildOnboardingHelpers ===

// Module 6606 (doGuildOnboardingHelpers)
import FlagUtils from "FlagUtils" /* 1390 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 6607 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;

require = fn;
const GuildMemberFlags = fn(4501).GuildMemberFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/doGuildOnboardingHelpers.tsx");

export const waitForOnboardingCompletion = function waitForOnboardingCompletion(guildId) {
  closure_0 = guildId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    const result = GuildMemberStore.addConditionalChangeListener(() => {
      const selfMember = GuildMemberStore.getSelfMember(closure_0);
      let num;
      if (selfMember != null) {
        num = selfMember.flags;
      }
      if (num == null) {
        num = 0;
      }
      const hasFlagResult = FlagUtils.hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
      let flag = !hasFlagResult;
      if (hasFlagResult) {
        GuildOnboardingActionCreatorsDefault.finishOnboarding(closure_0);
        closure_0();
        flag = false;
      }
      return flag;
    });
  });
};