// discord_app/modules/emojis/top_emojis/TopEmojisUtils.tsx
import fetchTopEmojis from "TopEmojisActionCreators.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import getEmojiToGroupId from "../EmojiStore.tsx";
import initialize from "TopEmojiStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/emojis/top_emojis/TopEmojisUtils.tsx");

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
      }
    }
  }
};