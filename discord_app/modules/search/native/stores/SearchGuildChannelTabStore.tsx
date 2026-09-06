// === Module 12363: search ===

// Module 12363 (search)
import set from "set" /* 2 */;
import apply from "apply" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import NOOP from "NOOP" /* 5442 */;
import NOOPDefault from "NOOP" /* 5442 */;
import HeaderRecord from "HeaderRecord" /* 5515 */;
import comparator from "comparator" /* 2012 */;
import closure_5 from "generateOldThreadCutoff" /* 4575 */;

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
  obj = {
    query,
    guildId,
    limit: 1000,
    allowEmptyQueries: true,
    allowSnowflake: true,
    fuzzy: false,
    filter() {
      return true;
    }
  };
  const boosterMap1 = obj1.getBoosterMap(AutocompleterResultTypes.VOICE_CHANNEL);
  obj = {};
  const merged = Object.assign(obj);
  obj.type = closure_4;
  obj.boosters = boosterMap;
  const obj4 = NOOPDefault;
  const queryChannelsResult = NOOPDefault.queryChannels(obj);
  obj1 = {};
  const merged1 = Object.assign(obj);
  obj1.type = closure_3;
  obj1.boosters = boosterMap1;
  const obj6 = NOOPDefault;
  this.voiceChannels = NOOPDefault.queryChannels(obj1).map((channel) => ({ channel: channel.record }));
  const queryChannelsResult1 = NOOPDefault.queryChannels(obj1);
  const obj8 = apply;
  const mapped = apply.chain(queryChannelsResult).map((channel) => {
    const obj = { channel: channel.record, lastMessageId: null };
    let lastMessageId = closure_5.lastMessageId(channel.record.id);
    if (lastMessageId == null) {
      lastMessageId = channel.record.lastMessageId;
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
      const tmp = GuildChannelSearchManager;
    }
    const result = obj.set(id, value);
    value.search(searchQueryString, guildId);
  },
  SEARCH_GUILD_CHANNEL_TAB_CLEANUP: function handleSearchGuildChannelTabCleanup(id) {
    return map.delete(id.id);
  }
});
let result = set.fileFinishedImporting("modules/search/native/stores/SearchGuildChannelTabStore.tsx");

export default searchGuildChannelTabStore;