// === Module 9897: TopEmojisUtils ===

// Module 9897 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9898 */;
import UserStore from "UserStore" /* 1389 */;
import EmojiStore from "EmojiStore" /* 6783 */;
import TopEmojiStore from "TopEmojiStore" /* 6785 */;

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