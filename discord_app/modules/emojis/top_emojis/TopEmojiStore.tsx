// === Module 5285: initialize ===

// Module 5285 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let obj = { topEmojisByGuildId: {} };
let closure_2 = {};
const PersistedStore = initializeDefault.PersistedStore;
class TopEmojiStore extends PersistedStore {
}
const prototype = TopEmojiStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = obj;
  }
  closure_1 = tmp;
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
    closure_1 = obj;
    closure_2 = {};
  },
  TOP_EMOJIS_FETCH: function handleTopEmojiFetching(guildId) {
    closure_2[guildId.guildId] = true;
  },
  TOP_EMOJIS_FETCH_SUCCESS: function handleTopEmojisLoaded(arg0) {
    ({ guildId, topEmojisMetadata } = arg0);
    obj.topEmojisByGuildId[guildId] = topEmojisMetadata.map((emojiId) => emojiId.emojiId);
    closure_2[guildId] = false;
  }
};
const topEmojiStore = new TopEmojiStore(dispatcherDefault, obj);
const result = require("set").fileFinishedImporting("modules/emojis/top_emojis/TopEmojiStore.tsx");

export default topEmojiStore;