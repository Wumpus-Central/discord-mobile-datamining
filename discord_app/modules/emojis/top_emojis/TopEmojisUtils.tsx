// === Module 10621: TopEmojisUtils ===

// Module 10621 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 10622 */;
import UserStore from "UserStore" /* 1372 */;
import EmojiStore from "EmojiStore" /* 5762 */;
import TopEmojiStore from "TopEmojiStore" /* 5765 */;

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