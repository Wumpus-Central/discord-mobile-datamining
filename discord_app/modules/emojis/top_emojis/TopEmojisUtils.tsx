// === Module 9118: maybeFetchTopEmojisByGuild ===

// Module 9118 (maybeFetchTopEmojisByGuild)
import fetchTopEmojis from "fetchTopEmojis" /* 9119 */;
import closure_2 from "mergeGuildAvatar" /* 1921 */;
import closure_3 from "getEmojiToGroupId" /* 5409 */;
import closure_4 from "initialize" /* 5412 */;

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