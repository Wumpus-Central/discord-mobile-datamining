// === Module 14518: useUserAvailableGuildsWithTags ===

// Module 14518 (useUserAvailableGuildsWithTags)
import initialize from "initialize" /* 586 */;
import closure_2 from "trackCommunicationDisabled" /* 1991 */;
import closure_3 from "createGuildRecordFromRust" /* 1908 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_tag/useUserAvailableGuildsWithTags.tsx");

export const useUserAvailableGuildsWithTags = function useUserAvailableGuildsWithTags() {
  const items = [closure_3, closure_2];
  return initialize.useStateFromStoresArray(items, () => {
    guildsArray = guildsArray.getGuildsArray();
    return guildsArray.filter((id) => {
      selfMember = selfMember.getSelfMember(id.id);
      let guildSupportsTagsResult = callback(table[3]).guildSupportsTags(id);
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