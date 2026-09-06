// === Module 7281: SearchMessageStore ===

// Module 7281 (SearchMessageStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import ReactionUtils from "ReactionUtils" /* 4211 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 4461 */;
import MessageRecordUtils from "MessageRecordUtils" /* 4783 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

require = fn;
function handleReaction(optimistic) {
  let colors = optimistic;
  ({ messageId, emoji } = optimistic);
  ({ type, userId, channelId } = optimistic);
  let obj = ReactionUtils;
  if (obj.shouldApplyReaction(optimistic)) {
    const id = AuthenticationStore.getId();
    const basicChannel = ChannelStore.getBasicChannel(channelId);
    if (basicChannel != null) {
      let addReaction = basicChannel.type;
    }
    let DM = ChannelTypes.DM;
    value = map1.get(messageId);
    if (null == value) {
      return false;
    } else {
      const reactionType = colors.reactionType;
      if ("MESSAGE_REACTION_ADD" === type) {
        addReaction = value.addReaction;
        obj = { colors: null, reactionType: null, isDMChannel: null };
        colors = colors.colors;
        obj.colors = colors;
        obj.reactionType = reactionType;
        obj.isDMChannel = addReaction === DM;
        let addReactionResult = addReaction(emoji, tmp8, obj);
        const tmp10 = addReaction === DM;
      } else {
        addReactionResult = value.removeReaction(emoji, tmp8, reactionType);
      }
      DM = map1;
      const result = map1.set(messageId, addReactionResult);
    }
  } else {
    return false;
  }
}
const ChannelTypes = fn(1074).ChannelTypes;
class SearchState {
  constructor() {
    merged = Object.assign({ isIndexing: false, isHistoricalIndexing: false, isFetching: false, analyticsId: null, error: null, messages: null, documentsIndexed: 0, totalResults: null, messageIds: null, isInitialFetchComplete: false, cursor: null });
    set = new Set();
    merged[8] = set;
    return merged;
  }
}
const prototype = SearchState.prototype;
prototype["handleSearchStart"] = function handleSearchStart() {
  this.isFetching = true;
  this.isIndexing = false;
  this.analyticsId = null;
  this.error = null;
};
prototype["handleSearchIndexing"] = function handleSearchIndexing() {
  this.isInitialFetchComplete = true;
  this.isIndexing = true;
  this.isHistoricalIndexing = true;
  this.isFetching = false;
  this.error = null;
};
prototype["handleSearchFailure"] = function handleSearchFailure(arg0) {
  this.isFetching = false;
  this.isIndexing = false;
  this.isInitialFetchComplete = true;
  this.isHistoricalIndexing = false;
  const aPIError = new V6OrEarlierAPIError.APIError(arg0);
  this.error = aPIError;
  this.analyticsId = null;
  this.documentsIndexed = 0;
};
prototype["handleSearchSuccess"] = function handleSearchSuccess(analyticsId, arr) {
  const self = this;
  let items;
  let items1;
  this.analyticsId = analyticsId.analyticsId;
  this.isFetching = false;
  this.isIndexing = false;
  this.isInitialFetchComplete = true;
  this.isHistoricalIndexing = analyticsId.doingHistoricalIndex;
  this.error = null;
  ({ documentsIndexed: this.documentsIndexed, cursor: this.cursor } = analyticsId);
  let messages = this.messages;
  if (messages == null) {
    messages = [];
  }
  items = [...messages];
  items1 = [];
  const item = arr.forEach((id) => {
    const messageIds = self.messageIds;
    let hasItem = messageIds.has(id.id);
    if (!hasItem) {
      hasItem = RelationshipStore.isBlockedOrIgnoredForMessage(id);
    }
    if (!hasItem) {
      const messageIds2 = self.messageIds;
      messageIds2.add(id.id);
      items.push(id);
      items1.push(id);
    }
  });
  self.messages = items;
  self.totalResults = analyticsId.totalResults;
  return items1;
};
let map = new Map();
let map1 = new Map();
let map2 = new Map();
const Store = initializeDefault.Store;
class SearchMessageStore extends Store {
}
const prototype2 = SearchMessageStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, ChannelStore, RelationshipStore);
};
prototype2["getMessage"] = function getMessage(arg0) {
  return map1.get(arg0);
};
prototype2["getTotalCount"] = function getTotalCount(searchTabFetchId) {
  value = map.get(searchTabFetchId);
  if (value == null) {
    if (typeof SearchState === "function") {
      const merged = Object.assign({ isIndexing: false, isHistoricalIndexing: false, isFetching: false, analyticsId: null, error: null, messages: null, documentsIndexed: 0, totalResults: null, messageIds: null, isInitialFetchComplete: false, cursor: null });
      const _Set = Set;
      const set = new Set();
      merged[8] = set;
      value = merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return value.totalResults;
};
prototype2["getIsInitialFetchComplete"] = function getIsInitialFetchComplete(arg0) {
  value = map.get(arg0);
  if (value == null) {
    if (typeof SearchState === "function") {
      const merged = Object.assign({ isIndexing: false, isHistoricalIndexing: false, isFetching: false, analyticsId: null, error: null, messages: null, documentsIndexed: 0, totalResults: null, messageIds: null, isInitialFetchComplete: false, cursor: null });
      const _Set = Set;
      const set = new Set();
      merged[8] = set;
      value = merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return value.isInitialFetchComplete;
};
prototype2["getIsIndexing"] = function getIsIndexing(searchTabFetchId) {
  value = map.get(searchTabFetchId);
  if (value == null) {
    if (typeof SearchState === "function") {
      const merged = Object.assign({ isIndexing: false, isHistoricalIndexing: false, isFetching: false, analyticsId: null, error: null, messages: null, documentsIndexed: 0, totalResults: null, messageIds: null, isInitialFetchComplete: false, cursor: null });
      const _Set = Set;
      const set = new Set();
      merged[8] = set;
      value = merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return value.isIndexing;
};
prototype2["getIsHistoricalIndexing"] = function getIsHistoricalIndexing(searchTabFetchId) {
  value = map.get(searchTabFetchId);
  if (value == null) {
    if (typeof SearchState === "function") {
      const merged = Object.assign({ isIndexing: false, isHistoricalIndexing: false, isFetching: false, analyticsId: null, error: null, messages: null, documentsIndexed: 0, totalResults: null, messageIds: null, isInitialFetchComplete: false, cursor: null });
      const _Set = Set;
      const set = new Set();
      merged[8] = set;
      value = merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return value.isHistoricalIndexing;
};
prototype2["getDocumentsIndexed"] = function getDocumentsIndexed(searchTabFetchId) {
  value = map.get(searchTabFetchId);
  if (value == null) {
    if (typeof SearchState === "function") {
      const merged = Object.assign({ isIndexing: false, isHistoricalIndexing: false, isFetching: false, analyticsId: null, error: null, messages: null, documentsIndexed: 0, totalResults: null, messageIds: null, isInitialFetchComplete: false, cursor: null });
      const _Set = Set;
      const set = new Set();
      merged[8] = set;
      value = merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return value.documentsIndexed;
};
prototype2["getIsFetching"] = function getIsFetching(arg0) {
  value = map.get(arg0);
  if (value == null) {
    if (typeof SearchState === "function") {
      const merged = Object.assign({ isIndexing: false, isHistoricalIndexing: false, isFetching: false, analyticsId: null, error: null, messages: null, documentsIndexed: 0, totalResults: null, messageIds: null, isInitialFetchComplete: false, cursor: null });
      const _Set = Set;
      const set = new Set();
      merged[8] = set;
      value = merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return value.isFetching;
};
prototype2["getError"] = function getError(arg0) {
  value = map.get(arg0);
  if (value == null) {
    if (typeof SearchState === "function") {
      const merged = Object.assign({ isIndexing: false, isHistoricalIndexing: false, isFetching: false, analyticsId: null, error: null, messages: null, documentsIndexed: 0, totalResults: null, messageIds: null, isInitialFetchComplete: false, cursor: null });
      const _Set = Set;
      const set = new Set();
      merged[8] = set;
      value = merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return value.error;
};
prototype2["getMessages"] = function getMessages(arg0) {
  value = map.get(arg0);
  if (value == null) {
    if (typeof SearchState === "function") {
      const merged = Object.assign({ isIndexing: false, isHistoricalIndexing: false, isFetching: false, analyticsId: null, error: null, messages: null, documentsIndexed: 0, totalResults: null, messageIds: null, isInitialFetchComplete: false, cursor: null });
      const _Set = Set;
      const set = new Set();
      merged[8] = set;
      value = merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return value.messages;
};
prototype2["getCursor"] = function getCursor(searchTabFetchId) {
  value = map.get(searchTabFetchId);
  if (value == null) {
    if (typeof SearchState === "function") {
      const merged = Object.assign({ isIndexing: false, isHistoricalIndexing: false, isFetching: false, analyticsId: null, error: null, messages: null, documentsIndexed: 0, totalResults: null, messageIds: null, isInitialFetchComplete: false, cursor: null });
      const _Set = Set;
      const set = new Set();
      merged[8] = set;
      value = merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return value.cursor;
};
prototype2["getAnalyticsId"] = function getAnalyticsId(arg0) {
  value = map.get(arg0);
  if (value == null) {
    if (typeof SearchState === "function") {
      const merged = Object.assign({ isIndexing: false, isHistoricalIndexing: false, isFetching: false, analyticsId: null, error: null, messages: null, documentsIndexed: 0, totalResults: null, messageIds: null, isInitialFetchComplete: false, cursor: null });
      const _Set = Set;
      const set = new Set();
      merged[8] = set;
      value = merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return value.analyticsId;
};
prototype2["hasSearchState"] = function hasSearchState(searchContextId) {
  return map.has(searchContextId);
};
SearchMessageStore.displayName = "SearchMessageStore";
const searchMessageStore = new SearchMessageStore(DispatcherDefault, {
  SEARCH_MESSAGES_START: function handleSearchMessagesStart(ids) {
    ids = ids.ids;
    const item = ids.forEach((item) => {
      value = map.get(item);
      if (value == null) {
        if (typeof SearchState === "function") {
          const merged = Object.assign({ isIndexing: false, isHistoricalIndexing: false, isFetching: false, analyticsId: null, error: null, messages: null, documentsIndexed: 0, totalResults: null, messageIds: null, isInitialFetchComplete: false, cursor: null });
          const _Set = Set;
          const set = new Set();
          merged[8] = set;
          value = merged;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const result = map.set(item, value);
      value.handleSearchStart();
    });
  },
  SEARCH_MESSAGES_SUCCESS: function handleSearchMessagesSuccess(data) {
    data = data.data;
    let item = data.forEach((id) => {
      id = id.id;
      value = map.get(id);
      if (value == null) {
        if (typeof SearchState === "function") {
          const merged = Object.assign({ isIndexing: false, isHistoricalIndexing: false, isFetching: false, analyticsId: null, error: null, messages: null, documentsIndexed: 0, totalResults: null, messageIds: null, isInitialFetchComplete: false, cursor: null });
          const _Set = Set;
          const set = new Set();
          merged[8] = set;
          value = merged;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      let result = map.set(id, value);
      const messages = id.messages;
      const item = value.handleSearchSuccess(id, messages.map((item) => {
        [tmp] = item;
        return closure_1_0(closure_1_1[5]).createMessageRecord(tmp);
      })).forEach((id) => {
        const result = closure_1_8.set(id.id, id);
        let num = closure_1_9.get(id.id);
        if (num == null) {
          num = 0;
        }
        const result1 = closure_1_9.set(id.id, num + 1);
      });
    });
  },
  SEARCH_MESSAGES_INDEXING: function handleSearchMessagesIndexing(ids) {
    ids = ids.ids;
    const item = ids.forEach((item) => {
      value = map.get(item);
      if (value == null) {
        if (typeof SearchState === "function") {
          const merged = Object.assign({ isIndexing: false, isHistoricalIndexing: false, isFetching: false, analyticsId: null, error: null, messages: null, documentsIndexed: 0, totalResults: null, messageIds: null, isInitialFetchComplete: false, cursor: null });
          const _Set = Set;
          const set = new Set();
          merged[8] = set;
          value = merged;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const result = map.set(item, value);
      value.handleSearchIndexing();
    });
  },
  SEARCH_MESSAGES_FAILURE: function handleSearchMessagesFailure(ids) {
    ids = ids.ids;
    const item = ids.forEach((item) => {
      value = map.get(item);
      if (value == null) {
        if (typeof SearchState === "function") {
          const merged = Object.assign({ isIndexing: false, isHistoricalIndexing: false, isFetching: false, analyticsId: null, error: null, messages: null, documentsIndexed: 0, totalResults: null, messageIds: null, isInitialFetchComplete: false, cursor: null });
          const _Set = Set;
          const set = new Set();
          merged[8] = set;
          value = merged;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const result = map.set(item, value);
      value.handleSearchFailure(ids.error);
    });
  },
  SEARCH_MESSAGES_CLEAR: function handleSearchMessagesClear(id) {
    value = map.get(id.id);
    if (null == value) {
      return false;
    } else {
      const messageIds = value.messageIds;
      const item = messageIds.forEach((item) => {
        let num = map2.get(item);
        if (num == null) {
          num = 0;
        }
        if (num <= 1) {
          set.delete(item);
          map2.delete(item);
        } else {
          const result = map2.set(item, num - 1);
        }
      });
      map.delete(id.id);
    }
  },
  SEARCH_MESSAGES_CLEAR_ALL: function handleSearchMessagesClearAll() {
    map = new Map();
    map1 = new Map();
    map2 = new Map();
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const id = message.message.id;
    if (null == id) {
      return false;
    } else {
      value = map1.get(id);
      if (null == value) {
        return false;
      } else {
        const result = map1.set(id, MessageRecordUtils.updateMessageRecord(value, message.message));
      }
    }
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(messageId) {
    messageId = messageId.messageId;
    const id = AuthenticationStore.getId();
    value = map1.get(messageId);
    let flag = false;
    if (null != value) {
      const result = map1.set(messageId, value.addReactionBatch(messageId.reactions, id));
      flag = true;
    }
    return flag;
  },
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(messageId) {
    messageId = messageId.messageId;
    value = map1.get(messageId);
    let flag = false;
    if (null != value) {
      const result = map1.set(messageId, value.set("reactions", []));
      flag = true;
    }
    return flag;
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(messageId) {
    messageId = messageId.messageId;
    value = map1.get(messageId);
    let flag = false;
    if (null != value) {
      const result = map1.set(messageId, value.removeReactionsForEmoji(messageId.emoji));
      flag = true;
    }
    return flag;
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    map = new Map();
    map1 = new Map();
    map2 = new Map();
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/SearchMessageStore.tsx");

export default searchMessageStore;