// discord_app/modules/search/native/stores/SearchGuildChannelTabStore.tsx
import comparator from "comparator";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import { Store } from "initialize";
import { apply } from "../../../../../_runtime/00012_apply.js";
import { NOOP } from "../../../../utils/AutocompleteUtils.tsx";

let c3;
let c4;
({ GUILD_VOCAL_CHANNELS_KEY: c3, GUILD_SELECTABLE_CHANNELS_KEY: c4 } = comparator);
require("HeaderRecord").AutocompleterResultTypes;
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
  let obj = NOOP /* NOOP */;
  const boosterMap = obj.getBoosterMap(AutocompleterResultTypes.TEXT_CHANNEL);
  let obj1 = NOOP /* NOOP */;
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
  const obj4 = NOOP;
  const queryChannelsResult = NOOP.queryChannels(obj);
  obj1 = {};
  const merged1 = Object.assign(obj);
  obj1.type = closure_3;
  obj1.boosters = boosterMap1;
  const obj6 = NOOP;
  this.voiceChannels = NOOP.queryChannels(obj1).map((channel) => ({ channel: channel.record }));
  const queryChannelsResult1 = NOOP.queryChannels(obj1);
  const obj8 = apply /* apply */;
  const mapped = apply /* apply */.chain(queryChannelsResult).map((channel) => {
    const obj = { channel: channel.record, lastMessageId: null };
    let lastMessageId = generateOldThreadCutoff.lastMessageId(channel.record.id);
    if (lastMessageId == null) {
      lastMessageId = channel.record.lastMessageId;
    }
    obj[1] = lastMessageId;
    return obj;
  });
  const chainResult = apply /* apply */.chain(queryChannelsResult);
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
class SearchGuildChannelTabStore extends Store {
}
const prototype2 = SearchGuildChannelTabStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(generateOldThreadCutoff);
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
const searchGuildChannelTabStore = new SearchGuildChannelTabStore(require("dispatcher"), {
  SEARCH_GUILD_CHANNEL_TAB_SEARCH: function handleSearchGuildChannelTabSearch(id) {
    let guildId;
    let searchQueryString;
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
let result = require("HeaderRecord").fileFinishedImporting("modules/search/native/stores/SearchGuildChannelTabStore.tsx");

export default searchGuildChannelTabStore;