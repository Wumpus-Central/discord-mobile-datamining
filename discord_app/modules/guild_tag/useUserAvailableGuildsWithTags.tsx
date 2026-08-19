// === Module 14062: useUserAvailableGuildsWithTags ===

// Module 14062 (useUserAvailableGuildsWithTags)
import initialize from "initialize" /* 589 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;

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