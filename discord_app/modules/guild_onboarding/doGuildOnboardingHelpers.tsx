// === Module 7235: doGuildOnboardingHelpers ===

// Module 7235 (doGuildOnboardingHelpers)
import FlagUtils from "FlagUtils" /* 1402 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 7236 */;
import GuildMemberStore from "GuildMemberStore" /* 4916 */;

require = fn;
const GuildMemberFlags = fn(4922).GuildMemberFlags;
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