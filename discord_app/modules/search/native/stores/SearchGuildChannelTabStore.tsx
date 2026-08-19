// discord_app/modules/search/native/stores/SearchGuildChannelTabStore.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import apply from "../../../../../_runtime/00012_apply.js";
import initializeDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../../Dispatcher.tsx";
import NOOP from "../../../../utils/AutocompleteUtils.tsx";
import NOOPDefault from "../../../../utils/AutocompleteUtils.tsx";
import HeaderRecord from "../../../autocompleter/AutocompleterConstants.tsx";
import comparator from "../../../../stores/GuildChannelStore.tsx";
import generateOldThreadCutoff from "../../../../stores/ReadStateStore.tsx";

({ GUILD_VOCAL_CHANNELS_KEY: c3, GUILD_SELECTABLE_CHANNELS_KEY: c4 } = comparator);
HeaderRecord.AutocompleterResultTypes;
let closure_7 = [];
let closure_8 = [];
class GuildChannelSearchManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[1] = [];
    obj[2] = [];
    return obj;
  }
}
const prototype = GuildChannelSearchManager.prototype;
prototype["search"] = function search(query, guildId) {
  const self = this;
  let obj = NOOP;
  const boosterMap = obj.getBoosterMap(AutocompleterResultTypes.TEXT_CHANNEL);
  obj1 = NOOP;
  const boosterMap1 = obj1.getBoosterMap(AutocompleterResultTypes.VOICE_CHANNEL);
  obj = {};
  const merged = Object.assign(obj);
  obj.type = closure_4;
  obj.boosters = boosterMap;
  const queryChannelsResult = NOOPDefault.queryChannels(obj);
  obj1 = {};
  const merged1 = Object.assign(obj);
  obj1.type = closure_3;
  obj1.boosters = boosterMap1;
  this.voiceChannels = NOOPDefault.queryChannels(obj1).map((item, index) => ({ channel: item.record }));
  const queryChannelsResult1 = NOOPDefault.queryChannels(obj1);
  const mapped = apply.chain(queryChannelsResult).map((item, index) => {
    const obj = { channel: item.record, lastMessageId: null };
    let lastMessageId = closure_5.lastMessageId(item.record.id);
    if (lastMessageId == null) {
      lastMessageId = item.record.lastMessageId;
    }
    obj[1] = lastMessageId;
    return obj;
  });
  const chainResult = apply.chain(queryChannelsResult);
  this.textChannels = mapped.sort((lastMessageId, lastMessageId2) => callback(table[5]).compare(lastMessageId2.lastMessageId, lastMessageId.lastMessageId)).value();
  if (query.length > 0) {
    self.count = self.textChannels.length + self.voiceChannels.length;
  } else {
    self.count = null;
  }
};
prototype["getTextChannels"] = function getTextChannels() {
  return this.textChannels;
};
prototype["getVoiceChannels"] = function getVoiceChannels() {
  return this.voiceChannels;
};
prototype["getCount"] = function getCount() {
  return this.count;
};
const map = new Map();
const Store = initializeDefault.Store;
class SearchGuildChannelTabStore extends Store {
}
const prototype2 = SearchGuildChannelTabStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(closure_5);
};
prototype2["getTextChannels"] = function getTextChannels(arg0) {
  const value = map.get(arg0);
  let textChannels;
  if (value != null) {
    textChannels = value.getTextChannels();
  }
  if (textChannels == null) {
    textChannels = closure_7;
  }
  return textChannels;
};
prototype2["getVoiceChannels"] = function getVoiceChannels(arg0) {
  const value = map.get(arg0);
  let voiceChannels;
  if (value != null) {
    voiceChannels = value.getVoiceChannels();
  }
  if (voiceChannels == null) {
    voiceChannels = closure_8;
  }
  return voiceChannels;
};
prototype2["getCount"] = function getCount(arg0) {
  const value = map.get(arg0);
  let count;
  if (value != null) {
    count = value.getCount();
  }
  if (count == null) {
    count = null;
  }
  return count;
};
SearchGuildChannelTabStore.displayName = "SearchGuildChannelTabStore";
const searchGuildChannelTabStore = new SearchGuildChannelTabStore(dispatcherDefault, {
  SEARCH_GUILD_CHANNEL_TAB_SEARCH: function handleSearchGuildChannelTabSearch(id) {
    id = id.id;
    let obj = map;
    ({ guildId, searchQueryString } = id);
    let value = map.get(id);
    if (value == null) {
      if (typeof GuildChannelSearchManager !== "function") {
        HermesBuiltin.throwTypeError();
      }
      obj = Object.create(GuildChannelSearchManager.prototype);
      obj[1] = [];
      obj[2] = [];
      value = obj;
    }
    const result = obj.set(id, value);
    value.search(searchQueryString, guildId);
  },
  SEARCH_GUILD_CHANNEL_TAB_CLEANUP: function handleSearchGuildChannelTabCleanup(id) {
    return map.delete(id.id);
  }
});
let result = obj132.fileFinishedImporting("modules/search/native/stores/SearchGuildChannelTabStore.tsx");

export default searchGuildChannelTabStore;