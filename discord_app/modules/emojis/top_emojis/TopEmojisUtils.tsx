// === Module 10278: TopEmojisUtils ===

// Module 10278 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 10279 */;
import UserStore from "UserStore" /* 1371 */;
import EmojiStore from "EmojiStore" /* 5459 */;
import TopEmojiStore from "TopEmojiStore" /* 5462 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisUtils.tsx");

export const maybeFetchTopEmojisByGuild = function maybeFetchTopEmojisByGuild(guildId) {
  if (null != guildId) {
    if (null != UserStore.getCurrentUser()) {
      const topEmojisMetadata = EmojiStore.getTopEmojisMetadata(guildId);
      if (null != topEmojisMetadata) {
        const topEmojisTTL = topEmojisMetadata.topEmojisTTL;
        if (null != topEmojisTTL) {
          const _Date = Date;
        }
      }
      if (!TopEmojiStore.getIsFetching(guildId)) {
        const topEmojis = TopEmojisActionCreators.fetchTopEmojis(guildId);
      }
    }
  }
};