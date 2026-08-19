// discord_app/modules/guild_tag/useUserAvailableGuildsWithTags.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_tag/useUserAvailableGuildsWithTags.tsx");

export const useUserAvailableGuildsWithTags = function useUserAvailableGuildsWithTags() {
  const items = [closure_3, closure_2];
  return initialize.useStateFromStoresArray(items, () => {
    guildsArray = guildsArray.getGuildsArray();
    return guildsArray.filter((item, index) => {
      selfMember = selfMember.getSelfMember(item.id);
      let guildSupportsTagsResult = callback(table[3]).guildSupportsTags(item);
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
        const profile = item.profile;
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