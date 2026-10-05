// === Module 17734: GuildSettingsEmojiStore ===

// Module 17734 (GuildSettingsEmojiStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import EmojiRecord from "EmojiRecord" /* 17735 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import LRUCache from "LRUCache" /* 1444 */;
import size from "module_2" /* 2 */;

const React2 = {};
const _false = {};
let closure_4 = 0;
const obj = { max: 5, maxAge: DurationsDefault.Millis.HOUR };
const importDefaultResult1 = new LRUCache(obj);
const Store = get_initializedDefault.Store;
class GuildSettingsEmojiStore extends Store {
  initialize() {
    this.waitFor(SelectedGuildStore);
  }
  isUploadingEmoji() {
    return closure_4 > 0;
  }
  getEmojiRevision(id) {
    let num = closure_2[id];
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getEmojis(id) {
    return closure_3[id];
  }
  getEmojiRawAsset(arg0) {
    return importDefaultResult1.get(arg0);
  }
}
const prototype = GuildSettingsEmojiStore.prototype;
GuildSettingsEmojiStore.displayName = "GuildSettingsEmojiStore";
const obj2 = {
  EMOJI_DELETE: function handleEmojiDelete(arg0) {
    let closure_129_0;
    let guildId;
    ({ guildId, emojiId: closure_129_0 } = arg0);
    const arr = closure_3[guildId];
    closure_3[guildId] = arr.filter((id) => id.id !== closure_1_0);
  },
  EMOJI_FETCH_SUCCESS: function handleFetchSuccess(emojis) {
    emojis = emojis.emojis;
    closure_3[emojis.guildId] = emojis.map((item) => {
      const tmp = new EmojiRecord(item);
      return tmp;
    });
  },
  EMOJI_FETCH_FAILURE: function handleFetchFailure(guildId) {
    closure_3[guildId.guildId] = [];
  },
  EMOJI_UPLOAD_START: function handleStartUploading() {
    closure_4 = closure_4 + 1;
  },
  EMOJI_UPLOAD_STOP: function handleStopUploading() {
    closure_4 = closure_4 - 1;
  },
  EMOJI_CACHE_RAW_EMOJI_ASSET: function handleCacheRawEmojiAsset(emojiId) {
    const result = importDefaultResult1.set(emojiId.emojiId, emojiId.userImage);
  },
  GUILD_EMOJIS_UPDATE: function handleGuildEmojiUpdate(guildId) {
    guildId = guildId.guildId;
    let num = closure_2[guildId];
    if (num == null) {
      num = 0;
    }
    closure_2[guildId] = num + 1;
  }
};
const guildSettingsEmojiStore = new GuildSettingsEmojiStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsEmojiStore.tsx");

export default guildSettingsEmojiStore;