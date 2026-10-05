// === Module 11987: SmartSearchResultsStore ===

// Module 11987 (SmartSearchResultsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import LRUCacheDefault from "LRUCache" /* 1444 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5112 */;
import SmartSearchTypes from "SmartSearchTypes" /* 11989 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import SmartSearchConstants from "SmartSearchConstants" /* 11988 */;
import size from "module_2" /* 2 */;

let set;

let MAX_CACHED_ANSWER_GUILDS;
let hasOwnProperty;
function handleReset() {
  closure_6.reset();
}
({ MAX_CACHED_ANSWERS_PER_GUILD: hasOwnProperty, MAX_CACHED_ANSWER_GUILDS } = SmartSearchConstants);
let obj = { max: MAX_CACHED_ANSWER_GUILDS };
const metroRequire = new LRUCacheDefault(obj);
new LRUCacheDefault(obj);
const Store = get_initializedDefault.Store;
class SmartSearchResultsStore extends Store {
  initialize() {
    this.waitFor(RelationshipStore, UserStore);
  }
  getAnswer(arg0, arg1) {
    const peekResult = closure_6.peek(arg0);
    let peekResult1;
    if (peekResult != null) {
      peekResult1 = peekResult.peek(arg1);
    }
    if (peekResult1 == null) {
      peekResult1 = null;
    }
    return peekResult1;
  }
  getStatus(arg0, arg1) {
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
  }
  hasAnswer(guildId, requestKey) {
    const peekResult = closure_6.peek(guildId);
    let peekResult1;
    if (peekResult != null) {
      peekResult1 = peekResult.peek(requestKey);
    }
    if (peekResult1 == null) {
      peekResult1 = null;
    }
    return null != peekResult1;
  }
}
const prototype = SmartSearchResultsStore.prototype;
SmartSearchResultsStore.displayName = "SmartSearchResultsStore";
let obj2 = {
  SMART_SEARCH_FETCH_START: function handleFetchStart(guildId) {
    let channelIds;
    let queryText;
    let requestKey;
    guildId = guildId.guildId;
    ({ requestKey, queryText, channelIds } = guildId);
    let value = closure_6.get(guildId);
    if (null == value) {
      const self = this;
      const self2 = this;
      const obj2 = { max: hasOwnProperty };
      const tmp5 = new LRUCacheDefault(obj2);
      const result = closure_6.set(guildId, tmp5);
      value = tmp5;
    }
    const obj3 = { status: SmartSearchTypes.SmartSearchStatus.LOADING, queryText, answerText: "", citations: [], channelIds };
    const result1 = value.set(requestKey, obj3);
  },
  SMART_SEARCH_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let ERROR;
    let blockedOrIgnoredForMessage;
    let channelIds;
    let guildId;
    let requestKey;
    let response;
    ({ guildId, response } = arg0);
    const message_citations = response.message_citations;
    ({ requestKey, channelIds } = arg0);
    const mapped = message_citations.map((sourceId) => {
      let obj2;
      const obj = { sourceId: sourceId.source_id, sourceType: sourceId.source_type, guildId: sourceId.guild_id, channelId: sourceId.channel_id, messageId: sourceId.message_id, message: obj2.createMessageRecord(sourceId.message) };
      obj2 = MessageRecordUtils;
      return obj;
    });
    const found = mapped.filter((message) => !blockedOrIgnoredForMessage.isBlockedOrIgnoredForMessage(message.message));
    let value = closure_6.get(guildId);
    if (null == value) {
      let obj2 = { max: hasOwnProperty };
      const self = this;
      const self2 = this;
      const tmp7 = new LRUCacheDefault(obj2);
      const result = closure_6.set(guildId, tmp7);
      value = tmp7;
    }
    const search_status = response.search_status;
    set = value.set;
    if ("not_qualified" === search_status) {
      ERROR = SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED;
    } else if ("no_results" === search_status) {
      ERROR = SmartSearchTypes.SmartSearchStatus.EMPTY;
    } else if ("success" === search_status) {
      let EMPTY;
      if (tmp10 > 0) {
        EMPTY = SmartSearchTypes.SmartSearchStatus.LOADED;
      } else {
        EMPTY = SmartSearchTypes.SmartSearchStatus.EMPTY;
      }
      ERROR = EMPTY;
    } else {
      ERROR = SmartSearchTypes.SmartSearchStatus.ERROR;
    }
    const obj3 = { status: ERROR, queryText: response.query_text, answerText: response.answer_text, citations: found, channelIds };
    const result1 = set(requestKey, obj3);
  },
  SMART_SEARCH_FETCH_FAILURE: function handleFetchFailure(guildId) {
    let channelIds;
    let queryText;
    let requestKey;
    let status;
    guildId = guildId.guildId;
    ({ requestKey, status, queryText, channelIds } = guildId);
    let value = closure_6.get(guildId);
    if (null == value) {
      const self = this;
      const self2 = this;
      const obj2 = { max: hasOwnProperty };
      const tmp5 = new LRUCacheDefault(obj2);
      const result = closure_6.set(guildId, tmp5);
      value = tmp5;
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
    let c1;
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
          let id;
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
  LOGOUT: handleReset
};
const smartSearchResultsStore = new SmartSearchResultsStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchResultsStore.tsx");

export default smartSearchResultsStore;