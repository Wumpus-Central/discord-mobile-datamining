// discord_app/modules/intelligence_layer/search/SmartSearchResultsStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import privDefault from "../../../../_runtime/01439_priv.js";
import SmartSearchTypes from "SmartSearchTypes.tsx";
import SmartSearchUtils from "SmartSearchUtils.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function handleReset() {
  closure_6.reset();
}
const SmartSearchConstants = fn(12058);
({ MAX_CACHED_ANSWERS_PER_GUILD: hasOwnProperty, MAX_CACHED_ANSWER_GUILDS } = SmartSearchConstants);
let closure_6 = new privDefault({ max: MAX_CACHED_ANSWER_GUILDS });
const Store = initializeDefault.Store;
class SmartSearchResultsStore extends Store {}
const prototype = SmartSearchResultsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(RelationshipStore, UserStore);
};
prototype["getAnswer"] = function getAnswer(arg0, arg1) {
  const peekResult = closure_6.peek(arg0);
  let peekResult1;
  if (peekResult != null) {
    peekResult1 = peekResult.peek(arg1);
  }
  if (peekResult1 == null) {
    peekResult1 = null;
  }
  return peekResult1;
};
prototype["getStatus"] = function getStatus(arg0, arg1) {
  const peekResult = closure_6.peek(arg0);
  let peekResult1;
  if (peekResult != null) {
    peekResult1 = peekResult.peek(arg1);
  }
  if (peekResult1 == null) {
    peekResult1 = null;
  }
  let status;
  if (peekResult1 != null) {
    status = peekResult1.status;
  }
  if (status == null) {
    status = null;
  }
  return status;
};
prototype["hasAnswer"] = function hasAnswer(guildId, requestKey) {
  const peekResult = closure_6.peek(guildId);
  let peekResult1;
  if (peekResult != null) {
    peekResult1 = peekResult.peek(requestKey);
  }
  if (peekResult1 == null) {
    peekResult1 = null;
  }
  return null != peekResult1;
};
SmartSearchResultsStore.displayName = "SmartSearchResultsStore";
let obj = { max: MAX_CACHED_ANSWER_GUILDS };
let obj2 = {
  SMART_SEARCH_FETCH_START: function handleFetchStart(guildId) {
    guildId = guildId.guildId;
    ({ requestKey, queryText, channelIds } = guildId);
    value = closure_6.get(guildId);
    if (null == value) {
      const obj2 = { max };
      const tmp7 = new privDefault(obj2);
      const result = closure_6.set(guildId, tmp7);
      value = tmp7;
    }
    const result1 = value.set(requestKey, {
      status: SmartSearchTypes.SmartSearchStatus.LOADING,
      queryText,
      answerText: "",
      citations: [],
      channelIds,
    });
    const obj3 = {
      status: SmartSearchTypes.SmartSearchStatus.LOADING,
      queryText,
      answerText: "",
      citations: [],
      channelIds,
    };
  },
  SMART_SEARCH_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ guildId, response } = arg0);
    ({ requestKey, channelIds } = arg0);
    const result = SmartSearchUtils.hydrateAndFilterCitations(response);
    value = closure_6.get(guildId);
    if (null == value) {
      const obj3 = { max };
      const tmp8 = new privDefault(obj3);
      const result1 = closure_6.set(guildId, tmp8);
      value = tmp8;
    }
    const obj4 = { status: null, queryText: null, answerText: null, citations: null, channelIds: null };
    obj4.status = SmartSearchUtils.resolveSearchStatus(response, result.length);
    ({ query_text: obj5.queryText, answer_text: obj5.answerText } = response);
    obj4.citations = result;
    obj4.channelIds = channelIds;
    const result2 = value.set(requestKey, obj4);
    const tmpResult = SmartSearchUtils;
  },
  SMART_SEARCH_FETCH_FAILURE: function handleFetchFailure(guildId) {
    guildId = guildId.guildId;
    ({ requestKey, status, queryText, channelIds } = guildId);
    value = closure_6.get(guildId);
    if (null == value) {
      const obj2 = { max };
      const tmp7 = new privDefault(obj2);
      const result = closure_6.set(guildId, tmp7);
      value = tmp7;
    }
    const result1 = value.set(requestKey, { status, queryText, answerText: "", citations: [], channelIds });
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (closure_6.has(guild.id)) {
      closure_6.del(guild.id);
    } else {
      return false;
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    c1 = undefined;
    let items;
    if (null == channel.guild_id) {
      return false;
    } else {
      const peekResult = closure_6.peek(channel.guild_id);
      c1 = peekResult;
      if (null == peekResult) {
        return false;
      } else {
        items = [];
        const item = peekResult.forEach((channelIds, index) => {
          channelIds = channelIds.channelIds;
          let hasItem = channelIds.includes(channel.id);
          if (!hasItem) {
            const citations = channelIds.citations;
            hasItem = citations.some((channelId) => channelId.channelId === id.id);
          }
          if (hasItem) {
            items.push(index);
          }
        });
        if (0 === items.length) {
          return false;
        } else {
          const item1 = items.forEach((item) => {
            _undefined.del(item);
          });
        }
      }
    }
  },
  CONNECTION_OPEN: handleReset,
  LOGOUT: handleReset,
};
const tmp3 = new privDefault({ max: MAX_CACHED_ANSWER_GUILDS });
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchResultsStore.tsx");

export default new SmartSearchResultsStore(DispatcherDefault, {
  SMART_SEARCH_FETCH_START: function handleFetchStart(guildId) {
    guildId = guildId.guildId;
    ({ requestKey, queryText, channelIds } = guildId);
    value = closure_6.get(guildId);
    if (null == value) {
      const obj2 = { max };
      const tmp7 = new privDefault(obj2);
      const result = closure_6.set(guildId, tmp7);
      value = tmp7;
    }
    const result1 = value.set(requestKey, {
      status: SmartSearchTypes.SmartSearchStatus.LOADING,
      queryText,
      answerText: "",
      citations: [],
      channelIds,
    });
    const obj3 = {
      status: SmartSearchTypes.SmartSearchStatus.LOADING,
      queryText,
      answerText: "",
      citations: [],
      channelIds,
    };
  },
  SMART_SEARCH_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ guildId, response } = arg0);
    ({ requestKey, channelIds } = arg0);
    const result = SmartSearchUtils.hydrateAndFilterCitations(response);
    value = closure_6.get(guildId);
    if (null == value) {
      const obj3 = { max };
      const tmp8 = new privDefault(obj3);
      const result1 = closure_6.set(guildId, tmp8);
      value = tmp8;
    }
    const obj4 = { status: null, queryText: null, answerText: null, citations: null, channelIds: null };
    obj4.status = SmartSearchUtils.resolveSearchStatus(response, result.length);
    ({ query_text: obj5.queryText, answer_text: obj5.answerText } = response);
    obj4.citations = result;
    obj4.channelIds = channelIds;
    const result2 = value.set(requestKey, obj4);
    const tmpResult = SmartSearchUtils;
  },
  SMART_SEARCH_FETCH_FAILURE: function handleFetchFailure(guildId) {
    guildId = guildId.guildId;
    ({ requestKey, status, queryText, channelIds } = guildId);
    value = closure_6.get(guildId);
    if (null == value) {
      const obj2 = { max };
      const tmp7 = new privDefault(obj2);
      const result = closure_6.set(guildId, tmp7);
      value = tmp7;
    }
    const result1 = value.set(requestKey, { status, queryText, answerText: "", citations: [], channelIds });
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (closure_6.has(guild.id)) {
      closure_6.del(guild.id);
    } else {
      return false;
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    c1 = undefined;
    let items;
    if (null == channel.guild_id) {
      return false;
    } else {
      const peekResult = closure_6.peek(channel.guild_id);
      c1 = peekResult;
      if (null == peekResult) {
        return false;
      } else {
        items = [];
        const item = peekResult.forEach((channelIds, index) => {
          channelIds = channelIds.channelIds;
          let hasItem = channelIds.includes(channel.id);
          if (!hasItem) {
            const citations = channelIds.citations;
            hasItem = citations.some((channelId) => channelId.channelId === id.id);
          }
          if (hasItem) {
            items.push(index);
          }
        });
        if (0 === items.length) {
          return false;
        } else {
          const item1 = items.forEach((item) => {
            _undefined.del(item);
          });
        }
      }
    }
  },
  CONNECTION_OPEN: handleReset,
  LOGOUT: handleReset,
});
