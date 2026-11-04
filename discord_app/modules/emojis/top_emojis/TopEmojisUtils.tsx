// === Module 10124: TopEmojisUtils ===

// Module 10124 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 10125 */;
import UserStore from "UserStore" /* 1385 */;
import EmojiStore from "EmojiStore" /* 6931 */;
import TopEmojiStore from "TopEmojiStore" /* 6933 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisUtils.tsx");

export function maybeFetchTopEmojisByGuild(guildId) {
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
}