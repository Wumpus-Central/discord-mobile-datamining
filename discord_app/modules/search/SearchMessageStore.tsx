import fetchFingerprint from "fetchFingerprint";
import upsertRelationship from "upsertRelationship";
import { Store } from "initialize";

const require = arg1;
function handleReaction(optimistic) {
  let emoji;
  let messageId;
  let type;
  let userId;
  let tmp = optimistic;
  ({ messageId, emoji } = optimistic);
  ({ type, userId } = optimistic);
  if (obj.shouldApplyReaction(optimistic)) {
    const id = store.getId();
    const value = map1.get(messageId);
    if (null == value) {
      return false;
    } else {
      const reactionType = tmp.reactionType;
      if ("MESSAGE_REACTION_ADD" === type) {
        let addReactionResult = value.addReaction(emoji, tmp6, tmp.colors, reactionType);
      } else {
        addReactionResult = value.removeReaction(emoji, tmp6, reactionType);
      }
      tmp = map1;
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
  const aPIError = new require(4154) /* V6OrEarlierAPIError */.APIError(arg0);
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
      hasItem = outer1_3.isBlockedOrIgnoredForMessage(id);
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
class SearchMessageStore extends Store {
}
const prototype2 = SearchMessageStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint, upsertRelationship);
};
prototype2["getMessage"] = function getMessage(arg0) {
  return map1.get(arg0);
};
prototype2["getTotalCount"] = function getTotalCount(searchTabFetchId) {
  let value = map.get(searchTabFetchId);
  if (value == null) {
    if (typeof SearchState !== "error") {
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
    if (typeof SearchState !== "error") {
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
    if (typeof SearchState !== "error") {
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
    if (typeof SearchState !== "error") {
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
    if (typeof SearchState !== "error") {
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
    if (typeof SearchState !== "error") {
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
    if (typeof SearchState !== "error") {
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
    if (typeof SearchState !== "error") {
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
    if (typeof SearchState !== "error") {
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
    if (typeof SearchState !== "error") {
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
prototype2["hasSearchState"] = function hasSearchState(c23) {
  return map.has(c23);
};
SearchMessageStore.displayName = "SearchMessageStore";
const searchMessageStore = new SearchMessageStore(require("dispatcher"), {
  SEARCH_MESSAGES_START: function handleSearchMessagesStart(ids) {
    ids = ids.ids;
    const item = ids.forEach((arg0) => {
      let value = store.get(arg0);
      if (value == null) {
        if (typeof closure_4 !== "error") {
          HermesBuiltin.throwTypeError();
        }
        const obj = Object.create(closure_4.prototype);
        const _Set = Set;
        const set = new Set();
        obj[8] = set;
        value = obj;
        const tmp = closure_4;
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
        if (typeof closure_4 !== "error") {
          HermesBuiltin.throwTypeError();
        }
        const obj = Object.create(closure_4.prototype);
        const _Set = Set;
        const set = new Set();
        obj[8] = set;
        value = obj;
        const tmp = closure_4;
      }
      let result = store.set(id, value);
      const messages = id.messages;
      const item = value.handleSearchSuccess(id, messages.map((arg0) => {
        let tmp;
        [tmp] = arg0;
        return callback(table[3]).createMessageRecord(tmp);
      })).forEach((id) => {
        const result = closure_6.set(id.id, id);
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
        if (typeof closure_4 !== "error") {
          HermesBuiltin.throwTypeError();
        }
        const obj = Object.create(closure_4.prototype);
        const _Set = Set;
        const set = new Set();
        obj[8] = set;
        value = obj;
        const tmp = closure_4;
      }
      const result = store.set(arg0, value);
      value.handleSearchIndexing();
    });
  },
  SEARCH_MESSAGES_FAILURE: function handleSearchMessagesFailure(ids) {
    let closure_0 = ids;
    ids = ids.ids;
    const item = ids.forEach((arg0) => {
      let value = outer1_5.get(arg0);
      if (value == null) {
        if (typeof outer1_4 !== "error") {
          HermesBuiltin.throwTypeError();
        }
        const obj = Object.create(outer1_4.prototype);
        const _Set = Set;
        const set = new Set();
        obj[8] = set;
        value = obj;
        const tmp = outer1_4;
      }
      const result = outer1_5.set(arg0, value);
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
    const map = new Map();
    const map1 = new Map();
    const map2 = new Map();
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
        const result = map1.set(id, require(4475) /* createMinimalMessageRecord */.updateMessageRecord(value, message.message));
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
    const map = new Map();
    const map1 = new Map();
    const map2 = new Map();
  }
});
let result = require("V6OrEarlierAPIError").fileFinishedImporting("modules/search/SearchMessageStore.tsx");

export default searchMessageStore;