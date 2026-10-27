// discord_app/modules/intelligence_layer/search/SuggestedSearchStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import privDefault from "../../../../_runtime/01456_priv.js";
import SmartSearchUtils from "SmartSearchUtils.tsx";
import SmartSearchConstants from "SmartSearchConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function handleReset() {
  closure_3.reset();
  closure_4.reset();
}
let items = [];
({ MAX_CACHED_SUGGESTED_SEARCH_CHANNELS, MAX_CACHED_SUGGESTED_SEARCH_GUILDS } = SmartSearchConstants);
let closure_3 = new privDefault({ max: MAX_CACHED_SUGGESTED_SEARCH_GUILDS });
let obj = { max: MAX_CACHED_SUGGESTED_SEARCH_GUILDS };
let obj2 = { max: MAX_CACHED_SUGGESTED_SEARCH_CHANNELS };
const tmp3 = new privDefault({ max: MAX_CACHED_SUGGESTED_SEARCH_GUILDS });
let closure_4 = new privDefault({ max: MAX_CACHED_SUGGESTED_SEARCH_CHANNELS });
const Store = initializeDefault.Store;
class SuggestedSearchStore extends Store {}
const prototype = SuggestedSearchStore.prototype;
prototype["getNextSuggestions"] = function getNextSuggestions(channelIds, arg1) {
  channelIds = channelIds.channelIds;
  if (0 === channelIds.length) {
    let peekResult = closure_3.peek(tmp);
    if (peekResult == null) {
      peekResult = null;
    }
    let peekResult1 = peekResult;
  } else {
    peekResult1 = closure_4.peek(SmartSearchUtils.getChannelFilterKey(channelIds));
    if (peekResult1 == null) {
      peekResult1 = null;
    }
  }
  if (null == peekResult1) {
    let suggestedSearches = items;
  } else if (0 === peekResult1.suggestedSearches.length) {
    suggestedSearches = items;
  } else if (peekResult1.suggestedSearches.length < arg1) {
    suggestedSearches = peekResult1.suggestedSearches;
  } else {
    const suggestedSearches1 = peekResult1.suggestedSearches;
    const substr = suggestedSearches1.slice(peekResult1.currentIndex, peekResult1.currentIndex + arg1);
    const result = (peekResult1.currentIndex + arg1) % peekResult1.suggestedSearches.length;
    suggestedSearches = substr;
    if (result < arg1) {
      const push = substr.push;
      const suggestedSearches2 = peekResult1.suggestedSearches;
      items = [];
      HermesBuiltin.arraySpread(suggestedSearches2.slice(0, result), 0);
      HermesBuiltin.apply(items, substr);
      suggestedSearches = substr;
    }
  }
  return suggestedSearches;
};
prototype["hasSuggestions"] = function hasSuggestions(smartSearchQuery) {
  return this.getNextSuggestions(smartSearchQuery, 1).length > 0;
};
prototype["isLoadingSuggestedSearches"] = function isLoadingSuggestedSearches(channelIds) {
  channelIds = channelIds.channelIds;
  if (0 === channelIds.length) {
    let peekResult = closure_3.peek(tmp);
    if (peekResult == null) {
      peekResult = null;
    }
    let peekResult1 = peekResult;
  } else {
    peekResult1 = closure_4.peek(SmartSearchUtils.getChannelFilterKey(channelIds));
    if (peekResult1 == null) {
      peekResult1 = null;
    }
  }
  let flag;
  if (peekResult1 != null) {
    flag = peekResult1.isLoading;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["willExhaustSuggestedSearches"] = function willExhaustSuggestedSearches(channelIds, windowSize) {
  channelIds = channelIds.channelIds;
  if (0 === channelIds.length) {
    let peekResult = closure_3.peek(tmp);
    if (peekResult == null) {
      peekResult = null;
    }
    let peekResult1 = peekResult;
  } else {
    peekResult1 = closure_4.peek(SmartSearchUtils.getChannelFilterKey(channelIds));
    if (peekResult1 == null) {
      peekResult1 = null;
    }
  }
  let tmp10 = null != peekResult1 && 0 !== peekResult1.suggestedSearches.length;
  if (tmp10) {
    tmp10 =
      peekResult1.suggestedSearches.length >= windowSize &&
      peekResult1.currentIndex + windowSize >= peekResult1.suggestedSearches.length;
    const tmp12 =
      peekResult1.suggestedSearches.length >= windowSize &&
      peekResult1.currentIndex + windowSize >= peekResult1.suggestedSearches.length;
  }
  return tmp10;
};
prototype["getStateForScope"] = function getStateForScope(smartSearchQuery) {
  const channelIds = smartSearchQuery.channelIds;
  if (0 === channelIds.length) {
    let peekResult = closure_3.peek(tmp);
    if (peekResult == null) {
      peekResult = null;
    }
    let peekResult1 = peekResult;
  } else {
    peekResult1 = closure_4.peek(SmartSearchUtils.getChannelFilterKey(channelIds));
    if (peekResult1 == null) {
      peekResult1 = null;
    }
  }
  return peekResult1;
};
SuggestedSearchStore.displayName = "SuggestedSearchStore";
const suggestedSearchStore = new SuggestedSearchStore(DispatcherDefault, {
  SUGGESTED_SEARCHES_FETCH_START: function handleFetchStart(scope) {
    ({ guildId, channelIds } = scope.scope);
    if (0 === channelIds.length) {
      value = closure_3.get(guildId);
      if (null == value) {
        const obj3 = { guildId, currentIndex: 0, suggestedSearches: items, isLoading: false, requestId: null };
        const result = closure_3.set(guildId, obj3);
        value = obj3;
      }
      value2 = value;
    } else {
      const channelFilterKey = SmartSearchUtils.getChannelFilterKey(channelIds);
      value2 = closure_4.get(channelFilterKey);
      if (null == value2) {
        const obj5 = { guildId, currentIndex: 0, suggestedSearches: items, isLoading: false, requestId: null };
        const result1 = closure_4.set(channelFilterKey, obj5);
        value2 = obj5;
      }
    }
    value2.isLoading = true;
  },
  SUGGESTED_SEARCHES_FETCH_SUCCESS: function handleFetchSuccess(requestId) {
    ({ scope, suggestedSearches, windowSize } = requestId);
    let suggestedSearches2;
    ({ guildId, channelIds } = scope);
    if (0 === channelIds.length) {
      value = closure_3.get(guildId);
      if (null == value) {
        const obj3 = { guildId, currentIndex: 0, suggestedSearches: items, isLoading: false, requestId: null };
        const result = closure_3.set(guildId, obj3);
        value = obj3;
      }
      value2 = value;
    } else {
      const channelFilterKey = SmartSearchUtils.getChannelFilterKey(channelIds);
      value2 = closure_4.get(channelFilterKey);
      if (null == value2) {
        const obj5 = { guildId, currentIndex: 0, suggestedSearches: items, isLoading: false, requestId: null };
        const result1 = closure_4.set(channelFilterKey, obj5);
        value2 = obj5;
      }
    }
    value2.isLoading = false;
    value2.requestId = requestId.requestId;
    if (null != windowSize) {
      if (0 !== value2.suggestedSearches.length) {
        if (0 === value2.suggestedSearches.length) {
          suggestedSearches2 = items;
        } else if (value2.suggestedSearches.length < windowSize) {
          suggestedSearches2 = value2.suggestedSearches;
        } else {
          const suggestedSearches1 = value2.suggestedSearches;
          const substr = suggestedSearches1.slice(value2.currentIndex, value2.currentIndex + windowSize);
          const result2 = (value2.currentIndex + windowSize) % value2.suggestedSearches.length;
          suggestedSearches2 = substr;
          if (result2 < windowSize) {
            const push = substr.push;
            const suggestedSearches3 = value2.suggestedSearches;
            items = [];
            HermesBuiltin.arraySpread(suggestedSearches3.slice(0, result2), 0);
            HermesBuiltin.apply(items, substr);
            suggestedSearches2 = substr;
          }
        }
        const found = suggestedSearches.filter(
          (item) => !suggestedSearches2.some((suggestionId) => suggestionId.suggestionId === item.suggestionId),
        );
        if (0 !== found.length) {
          const items1 = [];
          HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(suggestedSearches2, 0));
          value2.suggestedSearches = items1;
          value2.currentIndex = 0;
        } else {
          value2.currentIndex = (value2.currentIndex + windowSize) % value2.suggestedSearches.length;
        }
      }
    }
    value2.currentIndex = 0;
    value2.suggestedSearches = suggestedSearches;
  },
  SUGGESTED_SEARCHES_FETCH_FAILURE: function handleFetchFailure(arg0) {
    ({ scope, windowSize } = arg0);
    const channelIds = scope.channelIds;
    if (0 === channelIds.length) {
      let peekResult = closure_3.peek(tmp);
      if (peekResult == null) {
        peekResult = null;
      }
      let peekResult1 = peekResult;
    } else {
      peekResult1 = closure_4.peek(SmartSearchUtils.getChannelFilterKey(channelIds));
      if (peekResult1 == null) {
        peekResult1 = null;
      }
    }
    if (null == peekResult1) {
      return false;
    } else {
      peekResult1.isLoading = false;
      if (tmp10) {
        peekResult1.currentIndex = (peekResult1.currentIndex + windowSize) % peekResult1.suggestedSearches.length;
      }
      tmp10 = null != windowSize && peekResult1.suggestedSearches.length > 0;
    }
  },
  SUGGESTED_SEARCH_ADVANCE: function handleAdvance(scope) {
    const channelIds = scope.scope.channelIds;
    if (0 === channelIds.length) {
      let peekResult = closure_3.peek(tmp);
      if (peekResult == null) {
        peekResult = null;
      }
      let peekResult1 = peekResult;
    } else {
      peekResult1 = closure_4.peek(SmartSearchUtils.getChannelFilterKey(channelIds));
      if (peekResult1 == null) {
        peekResult1 = null;
      }
    }
    if (null != peekResult1) {
      if (0 !== peekResult1.suggestedSearches.length) {
        peekResult1.currentIndex = (peekResult1.currentIndex + scope.windowSize) % peekResult1.suggestedSearches.length;
      }
    }
    return false;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    const keys = closure_4.keys();
    const found = keys.filter((item) => {
      const peekResult = closure_4.peek(item);
      let guildId;
      if (peekResult != null) {
        guildId = peekResult.guildId;
      }
      return guildId === guild.id;
    });
    if (!closure_3.has(guild.id)) {
      if (0 === found.length) {
        return false;
      }
    }
    closure_3.del(guild.id);
    const item = found.forEach((item) => closure_1_4.del(item));
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    const keys = closure_4.keys();
    const found = keys.filter((item) => {
      const channelIdsForFilterKey = SmartSearchUtils.getChannelIdsForFilterKey(item);
      return channelIdsForFilterKey.includes(channel.id);
    });
    if (0 === found.length) {
      return false;
    } else {
      const item = found.forEach((item) => closure_1_4.del(item));
    }
  },
  CONNECTION_OPEN: handleReset,
  LOGOUT: handleReset,
});
let result = size.fileFinishedImporting("modules/intelligence_layer/search/SuggestedSearchStore.tsx");

export default suggestedSearchStore;
export const EMPTY_SUGGESTED_SEARCHES = items;
