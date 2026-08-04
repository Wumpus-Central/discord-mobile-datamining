// discord_app/modules/emojis/top_emojis/TopEmojiStore.tsx
import { PersistedStore } from "initialize";

let obj = { topEmojisByGuildId: {} };
let closure_2 = {};
class TopEmojiStore extends PersistedStore {
}
const prototype = TopEmojiStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  const tmp = arg0;
};
prototype["getState"] = function getState() {
  return obj;
};
prototype["getTopEmojiIdsByGuildId"] = function getTopEmojiIdsByGuildId(guildId) {
  return obj.topEmojisByGuildId[guildId];
};
prototype["getIsFetching"] = function getIsFetching(arg0) {
  return table[arg0];
};
TopEmojiStore.displayName = "TopEmojiStore";
TopEmojiStore.persistKey = "TopEmojiStore";
obj = {
  LOGOUT: function handleLogout() {
    let closure_1 = obj;
    let closure_2 = {};
  },
  TOP_EMOJIS_FETCH: function handleTopEmojiFetching(guildId) {
    closure_2[guildId.guildId] = true;
  },
  TOP_EMOJIS_FETCH_SUCCESS: function handleTopEmojisLoaded(arg0) {
    let guildId;
    let topEmojisMetadata;
    ({ guildId, topEmojisMetadata } = arg0);
    obj.topEmojisByGuildId[guildId] = topEmojisMetadata.map((emojiId) => emojiId.emojiId);
    closure_2[guildId] = false;
  }
};
const topEmojiStore = new TopEmojiStore(require("dispatcher"), obj);
const result = require("set").fileFinishedImporting("modules/emojis/top_emojis/TopEmojiStore.tsx");

export default topEmojiStore;