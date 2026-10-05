// discord_app/modules/emojis/top_emojis/TopEmojiStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_1, closure_2;

const obj = { topEmojisByGuildId: {} };
const React2 = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class TopEmojiStore extends PersistedStore {
  initialize(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = obj;
    }
    closure_1 = tmp;
  }
  getState() {
    return closure_1;
  }
  getTopEmojiIdsByGuildId(guildId) {
    return closure_1.topEmojisByGuildId[guildId];
  }
  getIsFetching(arg0) {
    return closure_2[arg0];
  }
}
const prototype = TopEmojiStore.prototype;
TopEmojiStore.displayName = "TopEmojiStore";
TopEmojiStore.persistKey = "TopEmojiStore";
const obj2 = {
  LOGOUT: function handleLogout() {
    closure_1 = obj;
    closure_2 = {};
  },
  TOP_EMOJIS_FETCH: function handleTopEmojiFetching(guildId) {
    closure_2[guildId.guildId] = true;
  },
  TOP_EMOJIS_FETCH_SUCCESS: function handleTopEmojisLoaded(arg0) {
    let guildId;
    let topEmojisMetadata;
    ({ guildId, topEmojisMetadata } = arg0);
    closure_1.topEmojisByGuildId[guildId] = topEmojisMetadata.map((emojiId) => emojiId.emojiId);
    closure_2[guildId] = false;
  },
};
const topEmojiStore = new TopEmojiStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/emojis/top_emojis/TopEmojiStore.tsx");

export default topEmojiStore;
