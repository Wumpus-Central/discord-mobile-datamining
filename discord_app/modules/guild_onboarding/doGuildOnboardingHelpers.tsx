// === Module 6599: doGuildOnboardingHelpers ===

// Module 6599 (doGuildOnboardingHelpers)
import FlagUtils from "FlagUtils" /* 1390 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4495 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 6600 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import size from "module_2" /* 2 */;

const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
let result = size.fileFinishedImporting("modules/guild_onboarding/doGuildOnboardingHelpers.tsx");

export const waitForOnboardingCompletion = function waitForOnboardingCompletion(guildId) {
  let closure_0 = guildId;
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    const result = GuildMemberStore.addConditionalChangeListener(() => {
      const selfMember = GuildMemberStore.getSelfMember(guildId);
      let num;
      const hasFlag = FlagUtils.hasFlag;
      FlagUtils;
      if (selfMember != null) {
        num = selfMember.flags;
      }
      if (num == null) {
        num = 0;
      }
      const hasFlagResult = hasFlag(num, GuildMemberFlags.COMPLETED_ONBOARDING);
      let flag = !hasFlagResult;
      if (hasFlagResult) {
        const obj = GuildOnboardingActionCreatorsDefault;
        obj.finishOnboarding(guildId);
        guildId();
        flag = false;
      }
      return flag;
    });
  });
  return promise;
};