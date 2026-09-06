// discord_app/modules/guild_tag/useUserAvailableGuildsWithTags.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/useUserAvailableGuildsWithTags.tsx");

export const useUserAvailableGuildsWithTags = function useUserAvailableGuildsWithTags() {
  const items = [GuildStore, GuildMemberStore];
  return initialize.useStateFromStoresArray(items, () => {
    guildsArray = guildsArray.getGuildsArray();
    return guildsArray.filter((id) => {
      selfMember = selfMember.getSelfMember(id.id);
      let guildSupportsTagsResult = closure_1_0(closure_1_1[3]).guildSupportsTags(id);
      if (guildSupportsTagsResult) {
        let joinedAt;
        if (selfMember != null) {
          joinedAt = selfMember.joinedAt;
        }
        guildSupportsTagsResult = null != joinedAt;
      }
      if (guildSupportsTagsResult) {
        guildSupportsTagsResult = true !== selfMember.isPending;
      }
      if (guildSupportsTagsResult) {
        const profile = id.profile;
        let tag;
        if (profile != null) {
          tag = profile.tag;
        }
        guildSupportsTagsResult = null != tag;
      }
      return guildSupportsTagsResult;
    });
  });
};
