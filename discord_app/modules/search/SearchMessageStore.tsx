// === Module 7281: handleReaction ===

// Module 7281 (handleReaction)
import initializeDefault from "initialize" /* 504 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import MAX_REACTIONS from "MAX_REACTIONS" /* 4211 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 4461 */;
import createMinimalMessageRecord from "createMinimalMessageRecord" /* 4783 */;
import closure_2 from "fetchFingerprint" /* 502 */;
import closure_3 from "ensureGuildLoaded" /* 1957 */;
import closure_4 from "markAllUserIdListsStale" /* 4209 */;
import { ChannelTypes } from "ME" /* 1074 */;

require = arg1;
function handleReaction(optimistic) {
  let colors = optimistic;
  ({ messageId, emoji } = optimistic);
  ({ type, userId, channelId } = optimistic);
  let obj = MAX_REACTIONS;
  if (obj.shouldApplyReaction(optimistic)) {
    const id = store.getId();
    basicChannel = basicChannel.getBasicChannel(channelId);
    if (basicChannel != null) {
      let addReaction = basicChannel.type;
    }
    let DM = ChannelTypes.DM;
    const value = map1.get(messageId);
    if (null == value) {
      return false;
    } else {
      const reactionType = colors.reactionType;
      if ("MESSAGE_REACTION_ADD" === type) {
        addReaction = value.addReaction;
        obj = { colors: null, reactionType: null, isDMChannel: null };
        colors = colors.colors;
        obj[0] = colors;
        obj[1] = reactionType;
        obj[2] = addReaction === DM;
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
class SearchState {
  constructor() {
    obj = Object.create(new.target.prototype);
    set = new Set();
    obj[8] = set;
    return obj;
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
  let self = this;
  self = this;
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
      hasItem = closure_1_4.isBlockedOrIgnoredForMessage(id);
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
  this.waitFor(closure_2, closure_3, closure_4);
};
prototype2["getMessage"] = function getMessage(arg0) {
  return map1.get(arg0);
};
prototype2["getTotalCount"] = function getTotalCount(searchTabFetchId) {
  let value = map.get(searchTabFetchId);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
    const tmp2 = SearchState;
  }
  return value.totalResults;
};
prototype2["getIsInitialFetchComplete"] = function getIsInitialFetchComplete(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
    const tmp2 = SearchState;
  }
  return value.isInitialFetchComplete;
};
prototype2["getIsIndexing"] = function getIsIndexing(searchTabFetchId) {
  let value = map.get(searchTabFetchId);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
    const tmp2 = SearchState;
  }
  return value.isIndexing;
};
prototype2["getIsHistoricalIndexing"] = function getIsHistoricalIndexing(searchTabFetchId) {
  let value = map.get(searchTabFetchId);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
    const tmp2 = SearchState;
  }
  return value.isHistoricalIndexing;
};
prototype2["getDocumentsIndexed"] = function getDocumentsIndexed(searchTabFetchId) {
  let value = map.get(searchTabFetchId);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
    const tmp2 = SearchState;
  }
  return value.documentsIndexed;
};
prototype2["getIsFetching"] = function getIsFetching(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
    const tmp2 = SearchState;
  }
  return value.isFetching;
};
prototype2["getError"] = function getError(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
    const tmp2 = SearchState;
  }
  return value.error;
};
prototype2["getMessages"] = function getMessages(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
    const tmp2 = SearchState;
  }
  return value.messages;
};
prototype2["getCursor"] = function getCursor(searchTabFetchId) {
  let value = map.get(searchTabFetchId);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
    const tmp2 = SearchState;
  }
  return value.cursor;
};
prototype2["getAnalyticsId"] = function getAnalyticsId(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
    const tmp2 = SearchState;
  }
  return value.analyticsId;
};
prototype2["hasSearchState"] = function hasSearchState(c25) {
  return map.has(c25);
};
SearchMessageStore.displayName = "SearchMessageStore";
const searchMessageStore = new SearchMessageStore(dispatcherDefault, {
  SEARCH_MESSAGES_START: function handleSearchMessagesStart(ids) {
    ids = ids.ids;
    const item = ids.forEach((arg0) => {
      let value = store.get(arg0);
      if (value == null) {
        if (typeof closure_6 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const obj = Object.create(closure_6.prototype);
        const _Set = Set;
        const set = new Set();
        obj[8] = set;
        value = obj;
        const tmp = closure_6;
      }
      const result = store.set(arg0, value);
      value.handleSearchStart();
    });
  },
  SEARCH_MESSAGES_SUCCESS: function handleSearchMessagesSuccess(data) {
    data = data.data;
    let item = data.forEach((id) => {
      id = id.id;
      let value = store.get(id);
      if (value == null) {
        if (typeof closure_6 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const obj = Object.create(closure_6.prototype);
        const _Set = Set;
        const set = new Set();
        obj[8] = set;
        value = obj;
        const tmp = closure_6;
      }
      let result = store.set(id, value);
      const messages = id.messages;
      const item = value.handleSearchSuccess(id, messages.map((arg0) => {
        [tmp] = arg0;
        return callback(table[5]).createMessageRecord(tmp);
      })).forEach((id) => {
        const result = closure_8.set(id.id, id);
        let num = store.get(id.id);
        if (num == null) {
          num = 0;
        }
        const result1 = store.set(id.id, num + 1);
      });
    });
  },
  SEARCH_MESSAGES_INDEXING: function handleSearchMessagesIndexing(ids) {
    ids = ids.ids;
    const item = ids.forEach((arg0) => {
      let value = store.get(arg0);
      if (value == null) {
        if (typeof closure_6 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const obj = Object.create(closure_6.prototype);
        const _Set = Set;
        const set = new Set();
        obj[8] = set;
        value = obj;
        const tmp = closure_6;
      }
      const result = store.set(arg0, value);
      value.handleSearchIndexing();
    });
  },
  SEARCH_MESSAGES_FAILURE: function handleSearchMessagesFailure(ids) {
    closure_0 = ids;
    ids = ids.ids;
    const item = ids.forEach((arg0) => {
      let value = closure_1_7.get(arg0);
      if (value == null) {
        if (typeof closure_1_6 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const obj = Object.create(closure_1_6.prototype);
        const _Set = Set;
        const set = new Set();
        obj[8] = set;
        value = obj;
        const tmp = closure_1_6;
      }
      const result = closure_1_7.set(arg0, value);
      value.handleSearchFailure(ids.error);
    });
  },
  SEARCH_MESSAGES_CLEAR: function handleSearchMessagesClear(id) {
    const value = map.get(id.id);
    if (null == value) {
      return false;
    } else {
      const messageIds = value.messageIds;
      const item = messageIds.forEach((arg0) => {
        let num = store.get(arg0);
        if (num == null) {
          num = 0;
        }
        if (num <= 1) {
          set.delete(arg0);
          store.delete(arg0);
        } else {
          const result = store.set(arg0, num - 1);
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
      const value = map1.get(id);
      if (null == value) {
        return false;
      } else {
        const result = map1.set(id, createMinimalMessageRecord.updateMessageRecord(value, message.message));
      }
    }
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(messageId) {
    messageId = messageId.messageId;
    const id = store.getId();
    const value = map1.get(messageId);
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
    const value = map1.get(messageId);
    let flag = false;
    if (null != value) {
      const result = map1.set(messageId, value.set("reactions", []));
      flag = true;
    }
    return flag;
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(messageId) {
    messageId = messageId.messageId;
    const value = map1.get(messageId);
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
let result = require("set").fileFinishedImporting("modules/search/SearchMessageStore.tsx");

export default searchMessageStore;