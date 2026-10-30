// === Module 9924: TopEmojisUtils ===

// Module 9924 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9925 */;
import UserStore from "UserStore" /* 1384 */;
import EmojiStore from "EmojiStore" /* 6790 */;
import TopEmojiStore from "TopEmojiStore" /* 6792 */;

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