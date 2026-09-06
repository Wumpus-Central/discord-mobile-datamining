// discord_app/modules/guild_settings/GuildSettingsEmojiStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import EmojiRecord from "../../records/EmojiRecord.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import priv from "../../../_runtime/01437_priv.js";

const dependencyMap = {};
const dependencyMap2 = {};
let closure_4 = 0;
let obj = { max: 5, maxAge: null };
obj.maxAge = DurationsDefault.Millis.HOUR;
priv = new priv(obj);
const Store = initializeDefault.Store;
class GuildSettingsEmojiStore extends Store {}
const prototype = GuildSettingsEmojiStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(SelectedGuildStore);
};
prototype["isUploadingEmoji"] = function isUploadingEmoji() {
  return closure_4 > 0;
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
  return priv.get(arg0);
};
GuildSettingsEmojiStore.displayName = "GuildSettingsEmojiStore";
obj = {
  EMOJI_DELETE: function handleEmojiDelete(arg0) {
    ({ guildId, emojiId: EmojiRecord } = arg0);
    dependencyMap2[guildId] = dependencyMap2[guildId].filter((id) => id.id !== EmojiRecord);
  },
  EMOJI_FETCH_SUCCESS: function handleFetchSuccess(emojis) {
    emojis = emojis.emojis;
    closure_3[emojis.guildId] = emojis.map((item) => new EmojiRecord(item));
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
    const result = priv.set(emojiId.emojiId, emojiId.userImage);
  },
  GUILD_EMOJIS_UPDATE: function handleGuildEmojiUpdate(guildId) {
    guildId = guildId.guildId;
    let num = dependencyMap[guildId];
    if (num == null) {
      num = 0;
    }
    dependencyMap[guildId] = num + 1;
  },
};
const guildSettingsEmojiStore = new GuildSettingsEmojiStore(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsEmojiStore.tsx");

export default guildSettingsEmojiStore;
