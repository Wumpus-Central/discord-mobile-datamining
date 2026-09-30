// === Module 6721: doGuildOnboardingHelpers ===

// Module 6721 (doGuildOnboardingHelpers)
import FlagUtils from "FlagUtils" /* 1385 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 6722 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;

require = fn;
const GuildMemberFlags = fn(4485).GuildMemberFlags;
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