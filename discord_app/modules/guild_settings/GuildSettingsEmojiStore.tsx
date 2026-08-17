// discord_app/modules/guild_settings/GuildSettingsEmojiStore.tsx
import initializeDefault from "initialize" /* 589 */;
import setDefault from "set" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_0 from "prototype" /* 16784 */;
import closure_1 from "handleConnectionOpen" /* 4197 */;
import importDefaultResult from "priv" /* 1405 */;

let closure_2 = {};
let closure_3 = {};
let c4 = 0;
let obj = { max: 5, maxAge: null };
obj[1] = setDefault.Millis.HOUR;
importDefaultResult = new importDefaultResult(obj);
let c5 = importDefaultResult;
const Store = initializeDefault.Store;
class GuildSettingsEmojiStore extends Store {
}
const prototype = GuildSettingsEmojiStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_1);
};
prototype["isUploadingEmoji"] = function isUploadingEmoji() {
  return c4 > 0;
};
prototype["getEmojiRevision"] = function getEmojiRevision(id) {
  let num = dependencyMap[id];
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getEmojis"] = function getEmojis(id) {
  return dependencyMap2[id];
};
prototype["getEmojiRawAsset"] = function getEmojiRawAsset(arg0) {
  return importDefaultResult.get(arg0);
};
GuildSettingsEmojiStore.displayName = "GuildSettingsEmojiStore";
obj = {
  EMOJI_DELETE: function handleEmojiDelete(arg0) {
    ({ guildId, emojiId: closure_0 } = arg0);
    dependencyMap2[guildId] = dependencyMap2[guildId].filter((id) => id.id !== closure_0);
  },
  EMOJI_FETCH_SUCCESS: function handleFetchSuccess(emojis) {
    emojis = emojis.emojis;
    closure_3[emojis.guildId] = emojis.map((arg0) => new closure_0(arg0));
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
    const result = importDefaultResult.set(emojiId.emojiId, emojiId.userImage);
  },
  GUILD_EMOJIS_UPDATE: function handleGuildEmojiUpdate(guildId) {
    guildId = guildId.guildId;
    let num = dependencyMap[guildId];
    if (num == null) {
      num = 0;
    }
    dependencyMap[guildId] = num + 1;
  }
};
const guildSettingsEmojiStore = new GuildSettingsEmojiStore(dispatcherDefault, obj);
let result = require("set").fileFinishedImporting("modules/guild_settings/GuildSettingsEmojiStore.tsx");

export default guildSettingsEmojiStore;