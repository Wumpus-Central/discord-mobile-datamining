// discord_app/modules/guild_settings/GuildSettingsEmojiStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import obj132Default from "../../utils/Durations.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import prototype2 from "../../records/EmojiRecord.tsx";
import handleConnectionOpen from "../../stores/SelectedGuildStore.tsx";
import importDefaultResult from "../../../_runtime/01405_priv.js";

let closure_2 = {};
let closure_3 = {};
let c4 = 0;
let obj = { max: 5, maxAge: null };
obj[1] = obj132Default.Millis.HOUR;
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
    dependencyMap2[guildId] = dependencyMap2[guildId].filter((item, index) => item.id !== closure_0);
  },
  EMOJI_FETCH_SUCCESS: function handleFetchSuccess(emojis) {
    emojis = emojis.emojis;
    closure_3[emojis.guildId] = emojis.map((item, index) => new closure_0(item));
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
let result = require("obj132").fileFinishedImporting("modules/guild_settings/GuildSettingsEmojiStore.tsx");

export default guildSettingsEmojiStore;