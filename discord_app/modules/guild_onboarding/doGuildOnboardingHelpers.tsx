// === Module 7408: doGuildOnboardingHelpers ===

// Module 7408 (doGuildOnboardingHelpers)
import FlagUtils from "FlagUtils" /* 1398 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 7409 */;
import GuildMemberStore from "GuildMemberStore" /* 5053 */;

require = fn;
const GuildMemberFlags = fn(5059).GuildMemberFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/doGuildOnboardingHelpers.tsx");

export function waitForOnboardingCompletion(guildId) {
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
}