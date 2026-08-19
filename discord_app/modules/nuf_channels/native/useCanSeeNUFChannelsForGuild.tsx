// discord_app/modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx
import trackCommunicationDisabled from "../../../stores/GuildMemberStore.tsx";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import { GuildFeatures } from "../../../Constants.tsx";
import { GuildMemberFlags } from "../../guild_member/GuildMemberConstants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx");

export const useCanSeeNUFChannelsForGuild = function useCanSeeNUFChannelsForGuild(id) {
  const _require = id;
  const items = [closure_4, closure_3, closure_2];
  const items1 = [id];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const currentUser = closure_1_4.getCurrentUser();
    if (null != currentUser) {
      if (obj3.isNewUser(currentUser)) {
        const guild = closure_1_3.getGuild(id);
        if (null != guild) {
          const features2 = guild.features;
          if (!features2.has(GuildFeatures.HUB)) {
            const selfMember = closure_1_2.getSelfMember(id);
            const features = guild.features;
            let hasFlagResult = features.has(GuildFeatures.GUILD_ONBOARDING) && null != selfMember;
            if (hasFlagResult) {
              let tmp10Result = id(dependencyMap[7]);
              let num = selfMember.flags;
              if (num == null) {
                num = 0;
              }
              hasFlagResult = tmp10Result.hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
            }
            if (hasFlagResult) {
              tmp10Result = id(dependencyMap[7]);
              let num2 = selfMember.flags;
              if (num2 == null) {
                num2 = 0;
              }
              hasFlagResult = !tmp10Result.hasFlag(num2, GuildMemberFlags.COMPLETED_ONBOARDING);
            }
            return !hasFlagResult;
          }
        }
        return false;
      }
      obj3 = id(dependencyMap[6]);
    }
    return false;
  }, items1);
};