// === Module 9304: maybeFetchTopEmojisByGuild ===

// Module 9304 (maybeFetchTopEmojisByGuild)
import fetchTopEmojis from "fetchTopEmojis" /* 9305 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import getEmojiToGroupId from "getEmojiToGroupId" /* 6727 */;
import initialize from "initialize" /* 6730 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/emojis/top_emojis/TopEmojisUtils.tsx");

export const maybeFetchTopEmojisByGuild = function maybeFetchTopEmojisByGuild(guildId) {
  if (null != guildId) {
    if (null != currentUser.getCurrentUser()) {
      topEmojisMetadata = topEmojisMetadata.getTopEmojisMetadata(guildId);
      if (null != topEmojisMetadata) {
        const topEmojisTTL = topEmojisMetadata.topEmojisTTL;
        if (null != topEmojisTTL) {
          const _Date = Date;
        }
      }
      if (!isFetching.getIsFetching(guildId)) {
        const topEmojis = fetchTopEmojis.fetchTopEmojis(guildId);
      }
    }
  }
};