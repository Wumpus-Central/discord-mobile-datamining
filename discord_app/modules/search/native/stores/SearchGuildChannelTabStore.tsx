// discord_app/modules/search/native/stores/SearchGuildChannelTabStore.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import AutocompleteUtils from "../../../../utils/AutocompleteUtils.tsx";
import autocompleter_AutocompleterConstants from "../../../autocompleter/AutocompleterConstants.tsx";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const AutocompleteUtilsDefault = AutocompleteUtils;

({ GUILD_VOCAL_CHANNELS_KEY: c3, GUILD_SELECTABLE_CHANNELS_KEY: closure_4 } = GuildChannelStore);
autocompleter_AutocompleterConstants.AutocompleterResultTypes;
let closure_7 = [];
let closure_8 = [];
class GuildChannelSearchManager {
  constructor() {
    merged = Object.assign({ count: null, textChannels: null, voiceChannels: null });
    merged[1] = [];
    merged[2] = [];
    return merged;
  }
}
const prototype = GuildChannelSearchManager.prototype;
prototype["search"] = function search(query, guildId) {
  const self = this;
  let obj = AutocompleteUtils;
  const boosterMap = obj.getBoosterMap(AutocompleterResultTypes.TEXT_CHANNEL);
  let obj1 = AutocompleteUtils;
  obj = {
    query,
    guildId,
    limit: 1000,
    allowEmptyQueries: true,
    allowSnowflake: true,
    fuzzy: false,
    filter() {
      return true;
    },
  };
  const boosterMap1 = obj1.getBoosterMap(AutocompleterResultTypes.VOICE_CHANNEL);
  obj = {};
  const merged = Object.assign(obj);
  obj.type = type2;
  obj.boosters = boosterMap;
  const queryChannelsResult = AutocompleteUtilsDefault.queryChannels(obj);
  obj1 = {};
  const merged1 = Object.assign(obj);
  obj1.type = type;
  obj1.boosters = boosterMap1;
  this.voiceChannels = AutocompleteUtilsDefault.queryChannels(obj1).map((channel) => ({ channel: channel.record }));
  const queryChannelsResult1 = AutocompleteUtilsDefault.queryChannels(obj1);
  const mapped = _mod12.chain(queryChannelsResult).map((channel) => {
    const obj = { channel: channel.record, lastMessageId: null };
    let lastMessageId = ReadStateStore.lastMessageId(channel.record.id);
    if (lastMessageId == null) {
      lastMessageId = channel.record.lastMessageId;
    }
    obj.lastMessageId = lastMessageId;
    return obj;
  });
  const chainResult = _mod12.chain(queryChannelsResult);
  this.textChannels = mapped
    .sort((lastMessageId, lastMessageId2) =>
      SnowflakeUtilsDefault.compare(lastMessageId2.lastMessageId, lastMessageId.lastMessageId),
    )
    .value();
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
class SearchGuildChannelTabStore extends Store {}
const prototype2 = SearchGuildChannelTabStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(ReadStateStore);
};
prototype2["getTextChannels"] = function getTextChannels(arg0) {
  value = map.get(arg0);
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
  value = map.get(arg0);
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
  value = map.get(arg0);
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
const searchGuildChannelTabStore = new SearchGuildChannelTabStore(DispatcherDefault, {
  SEARCH_GUILD_CHANNEL_TAB_SEARCH: function handleSearchGuildChannelTabSearch(id) {
    id = id.id;
    ({ guildId, searchQueryString } = id);
    value = map.get(id);
    if (value == null) {
      if (typeof GuildChannelSearchManager === "function") {
        const merged = Object.assign({ count: null, textChannels: null, voiceChannels: null });
        merged[1] = [];
        merged[2] = [];
        value = merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const result = map.set(id, value);
    value.search(searchQueryString, guildId);
  },
  SEARCH_GUILD_CHANNEL_TAB_CLEANUP: function handleSearchGuildChannelTabCleanup(id) {
    return map.delete(id.id);
  },
});
let result = size.fileFinishedImporting("modules/search/native/stores/SearchGuildChannelTabStore.tsx");

export default searchGuildChannelTabStore;
