// === Module 9885: TopEmojisUtils ===

// Module 9885 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9886 */;
import UserStore from "UserStore" /* 1377 */;
import EmojiStore from "EmojiStore" /* 5645 */;
import TopEmojiStore from "TopEmojiStore" /* 5648 */;
import size from "module_2" /* 2 */;

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
        const obj = TopEmojisActionCreators;
        const topEmojis = obj.fetchTopEmojis(guildId);
      }
    }
  }
};