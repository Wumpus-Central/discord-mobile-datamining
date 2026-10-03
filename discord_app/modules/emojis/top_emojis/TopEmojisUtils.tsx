// === Module 9872: TopEmojisUtils ===

// Module 9872 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9873 */;
import UserStore from "UserStore" /* 1377 */;
import EmojiStore from "EmojiStore" /* 5638 */;
import TopEmojiStore from "TopEmojiStore" /* 5641 */;

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