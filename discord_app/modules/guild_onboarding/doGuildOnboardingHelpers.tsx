// discord_app/modules/guild_onboarding/doGuildOnboardingHelpers.tsx
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import GuildMemberConstants from "../guild_member/GuildMemberConstants.tsx";
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
