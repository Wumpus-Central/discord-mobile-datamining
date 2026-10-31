// === Module 9945: TopEmojisUtils ===

// Module 9945 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9946 */;
import UserStore from "UserStore" /* 1383 */;
import EmojiStore from "EmojiStore" /* 6796 */;
import TopEmojiStore from "TopEmojiStore" /* 6798 */;

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