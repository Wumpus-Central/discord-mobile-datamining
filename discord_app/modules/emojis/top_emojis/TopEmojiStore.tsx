// === Module 5462: TopEmojiStore ===

// Module 5462 (TopEmojiStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let obj = { topEmojisByGuildId: {} };
let closure_1 = obj;
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
  return closure_1;
};
prototype["getTopEmojiIdsByGuildId"] = function getTopEmojiIdsByGuildId(guildId) {
  return closure_1.topEmojisByGuildId[guildId];
};
prototype["getIsFetching"] = function getIsFetching(arg0) {
  return closure_2[arg0];
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
    closure_1.topEmojisByGuildId[guildId] = topEmojisMetadata.map((emojiId) => emojiId.emojiId);
    closure_2[guildId] = false;
  }
};
const topEmojiStore = new TopEmojiStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/top_emojis/TopEmojiStore.tsx");

export default topEmojiStore;