// discord_app/modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx
import UserUtils from "../../../utils/UserUtils.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const GuildMemberFlags = fn(4187).GuildMemberFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx");

export const useCanSeeNUFChannelsForGuild = function useCanSeeNUFChannelsForGuild(id) {
  _require = id;
  const items = [UserStore, GuildStore, GuildMemberStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const currentUser = UserStore.getCurrentUser();
      if (null != currentUser) {
        if (obj3.isNewUser(currentUser)) {
          const guild = GuildStore.getGuild(closure_0);
          if (null != guild) {
            const features2 = guild.features;
            if (!features2.has(GuildFeatures.HUB)) {
              const selfMember = GuildMemberStore.getSelfMember(closure_0);
              const features = guild.features;
              let hasFlagResult = features.has(tmp12.GUILD_ONBOARDING) && null != selfMember;
              if (hasFlagResult) {
                let tmp10Result = tmp10(1384);
                let num = selfMember.flags;
                if (num == null) {
                  num = 0;
                }
                hasFlagResult = tmp10Result.hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
              }
              if (hasFlagResult) {
                tmp10Result = tmp10(1384);
                let num2 = selfMember.flags;
                if (num2 == null) {
                  num2 = 0;
                }
                hasFlagResult = !tmp10Result.hasFlag(num2, GuildMemberFlags.COMPLETED_ONBOARDING);
              }
              return !hasFlagResult;
            }
            tmp12 = GuildFeatures;
          }
          return false;
        }
        obj3 = UserUtils;
      }
      return false;
    },
    items1,
  );
};
