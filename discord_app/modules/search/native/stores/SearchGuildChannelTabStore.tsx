// discord_app/modules/search/native/stores/SearchGuildChannelTabStore.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import AutocompleteUtils from "../../../../utils/AutocompleteUtils.tsx";
import autocompleter_AutocompleterConstants from "../../../autocompleter/AutocompleterConstants.tsx";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const AutocompleteUtilsDefault = AutocompleteUtils;

let c3;
let closure_4;
({ GUILD_VOCAL_CHANNELS_KEY: c3, GUILD_SELECTABLE_CHANNELS_KEY: closure_4 } = GuildChannelStore);
const AutocompleterResultTypes = autocompleter_AutocompleterConstants.AutocompleterResultTypes;
let closure_7 = [];
let closure_8 = [];
class GuildChannelSearchManager {
  constructor() {
    const merged = Object.assign({ count: null, textChannels: null, voiceChannels: null });
    merged[1] = [];
    merged[2] = [];
    return merged;
  }
  search(query, guildId) {
    const self = this;
    let obj = AutocompleteUtils;
    const boosterMap = obj.getBoosterMap(AutocompleterResultTypes.TEXT_CHANNEL);
    const obj3 = {
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
    const obj2 = AutocompleteUtils;
    const boosterMap1 = obj2.getBoosterMap(AutocompleterResultTypes.VOICE_CHANNEL);
    const obj4 = { type: type2, boosters: boosterMap };
    const queryChannels = AutocompleteUtilsDefault.queryChannels;
    AutocompleteUtilsDefault;
    const merged = Object.assign(obj3);
    const obj5 = { type, boosters: boosterMap1 };
    const queryChannelsResult = queryChannels(obj4);
    const queryChannels2 = AutocompleteUtilsDefault.queryChannels;
    AutocompleteUtilsDefault;
    const merged1 = Object.assign(obj3);
    const queryChannels2Result = queryChannels2(obj5);
    this.voiceChannels = queryChannels2Result.map((channel) => ({ channel: channel.record }));
    const obj6 = _mod12;
    const chainResult = obj6.chain(queryChannelsResult);
    const mapped = chainResult.map((channel) => {
      let lastMessageId;
      const obj = { channel: channel.record, lastMessageId };
      lastMessageId = ReadStateStore.lastMessageId(channel.record.id);
      if (lastMessageId == null) {
        lastMessageId = channel.record.lastMessageId;
      }
      return obj;
    });
    const iter = mapped.sort((lastMessageId, lastMessageId2) => {
      const obj = SnowflakeUtilsDefault;
      return obj.compare(lastMessageId2.lastMessageId, lastMessageId.lastMessageId);
    });
    this.textChannels = iter.value();
    if (query.length > 0) {
      self.count = self.textChannels.length + self.voiceChannels.length;
    } else {
      self.count = null;
    }
  }
  getTextChannels() {
    return this.textChannels;
  }
  getVoiceChannels() {
    return this.voiceChannels;
  }
  getCount() {
    return this.count;
  }
}
const prototype = GuildChannelSearchManager.prototype;
const map = new Map();
const Store = get_initializedDefault.Store;
class SearchGuildChannelTabStore extends Store {
  initialize() {
    this.waitFor(ReadStateStore);
  }
  getTextChannels(arg0) {
    const value = map.get(arg0);
    let textChannels;
    if (value != null) {
      textChannels = value.getTextChannels();
    }
    if (textChannels == null) {
      textChannels = closure_7;
    }
    return textChannels;
  }
  getVoiceChannels(arg0) {
    const value = map.get(arg0);
    let voiceChannels;
    if (value != null) {
      voiceChannels = value.getVoiceChannels();
    }
    if (voiceChannels == null) {
      voiceChannels = closure_8;
    }
    return voiceChannels;
  }
  getCount(arg0) {
    const value = map.get(arg0);
    let count;
    if (value != null) {
      count = value.getCount();
    }
    if (count == null) {
      count = null;
    }
    return count;
  }
}
const prototype2 = SearchGuildChannelTabStore.prototype;
SearchGuildChannelTabStore.displayName = "SearchGuildChannelTabStore";
let obj = {
  SEARCH_GUILD_CHANNEL_TAB_SEARCH: function handleSearchGuildChannelTabSearch(id) {
    let guildId;
    let searchQueryString;
    id = id.id;
    ({ guildId, searchQueryString } = id);
    let value = map.get(id);
    if (value == null) {
      const self = this;
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
};
const searchGuildChannelTabStore = new SearchGuildChannelTabStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/search/native/stores/SearchGuildChannelTabStore.tsx");

export default searchGuildChannelTabStore;
