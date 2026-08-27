// === Module 9025: maybeFetchTopEmojisByGuild ===

// Module 9025 (maybeFetchTopEmojisByGuild)
import fetchTopEmojis from "fetchTopEmojis" /* 9026 */;
import closure_2 from "mergeGuildAvatar" /* 1922 */;
import closure_3 from "getEmojiToGroupId" /* 5353 */;
import closure_4 from "initialize" /* 5356 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/emojis/top_emojis/TopEmojisUtils.tsx");

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
        const obj = fetchTopEmojis;
      }
    }
  }
};