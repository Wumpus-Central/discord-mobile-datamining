// === Module 16419: initialize ===

// Module 16419 (initialize)
import prototype from "prototype";
import handleConnectionOpen from "handleConnectionOpen";
import importDefaultResult from "priv";
import { Store } from "initialize";

let closure_2 = {};
let closure_3 = {};
let c4 = 0;
let obj = { max: 5, maxAge: null };
obj[1] = require("set").Millis.HOUR;
importDefaultResult = new importDefaultResult(obj);
let c5 = importDefaultResult;
class GuildSettingsEmojiStore extends Store {
}
const prototype = GuildSettingsEmojiStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(handleConnectionOpen);
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
    let prototype;
    let guildId;
    ({ guildId, emojiId: prototype } = arg0);
    dependencyMap2[guildId] = dependencyMap2[guildId].filter((id) => id.id !== prototype);
  },
  EMOJI_FETCH_SUCCESS: function handleFetchSuccess(emojis) {
    emojis = emojis.emojis;
    closure_3[emojis.guildId] = emojis.map((arg0) => new prototype(arg0));
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
const guildSettingsEmojiStore = new GuildSettingsEmojiStore(require("dispatcher"), obj);
let result = require("priv").fileFinishedImporting("modules/guild_settings/GuildSettingsEmojiStore.tsx");

export default guildSettingsEmojiStore;